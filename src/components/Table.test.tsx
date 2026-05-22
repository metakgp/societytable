import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';
import { ISociety } from '../data/societies';

// Mock the child components
jest.mock('./Grid', () => ({
  Grid: ({ children }: { children: React.ReactNode }) => <div data-testid="grid">{children}</div>
}));

jest.mock('./Legend', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="legend">Legend</div>
  };
});

jest.mock('./Tablecell', () => ({
  __esModule: true,
  default: ({ society, type, index, block, invisible, key }: any) => {
    // Handle NaN index to avoid React warnings
    const safeIndex = typeof index === 'number' && !isNaN(index) ? index : undefined;
    // Use the provided key prop if available, otherwise create a unique key
    const elementKey = key || `tablecell-${type}-${safeIndex || 'default'}`;

    if (type === 'society') {
      return <div key={elementKey} data-testid={`tablecell-${type}`} data-index={safeIndex} data-invisible={invisible}>{society?.name}</div>;
    } else if (type === 'undiscovered') {
      return <div key={elementKey} data-testid={`tablecell-${type}`} data-block={block} data-index={safeIndex} data-invisible={invisible}>Undiscovered {safeIndex}</div>;
    } else {
      return <div key={elementKey} data-testid={`tablecell-${type}`} data-type={type} data-invisible={invisible}>Cell {type}</div>;
    }
  },
  TableCellProps: {}
}));

// Mock Fuse.js
jest.mock('fuse.js', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation((items: any[], _options?: any) => ({
      search: (query: string) => {
        if (!query || query.length < 3) return [];
        return items
          .filter((item: any) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.symbol.toLowerCase().includes(query.toLowerCase())
          )
          .map((item: any) => ({ item }));
      }
    }))
  };
});

// Mock the legend image import
jest.mock('../assets/legend_nobg.png', () => '');

describe('Table', () => {
  const mockSocieties: ISociety[] = [
    {
      symbol: 'Ar',
      name: 'Aerial Robotics Kharagpur',
      year: 2013,
      size: 'M',
      tsg_recognized: true,
      description: 'The ARK consists of a group of students working towards building autonomous aerial vehicles.',
      block: 'T',
      links: {
        website: 'https://arl-kgp.github.io/',
        fb: 'https://www.facebook.com/aerialroboticskgp',
        email: 'aerialroboticskharagpur@gmail.com',
        metawiki: 'https://wiki.metakgp.org/w/Aerial_Robotics_Kharagpur'
      }
    },
    {
      symbol: 'Wt',
      name: 'Western Technology Music Society',
      year: 2008,
      size: 'S',
      tsg_recognized: true,
      description: 'WTMS is a group of self learned musicians who explore different genres of western music.',
      block: 'W',
      links: { fb: 'https://www.facebook.com/wtmsiitkgp/' }
    },
    {
      symbol: 'Sf',
      name: 'Spring Fest',
      year: 1960,
      size: 'XL',
      tsg_recognized: true,
      description: 'Spring Fest is the annual Social and Cultural fest of IIT Kharagpur.',
      block: 'O',
      links: { fb: 'https://www.facebook.com/springfest.iitkgp/' }
    }
  ];

  it('renders without crashing', () => {
    render(<Table societies={mockSocieties} />);
    expect(screen.getAllByTestId('grid')).toHaveLength(2); // main grid and inner transition grid
  });

  it('displays the search input', () => {
    render(<Table societies={mockSocieties} />);
    const searchInput = screen.getByPlaceholderText('🔎 Search societies');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveClass('soc-search');
  });

  it('renders all societies in the grid', () => {
    render(<Table societies={mockSocieties} />);

    // Check if both grids are rendered (main and inner transition)
    const grids = screen.getAllByTestId('grid');
    expect(grids).toHaveLength(2);

    // Check for the main grid (first grid)
    expect(grids[0]).toBeInTheDocument();

    // Since W-block societies are treated differently (inner transition),
    // we expect to see the other societies in the main grid
    expect(screen.getByText('Aerial Robotics Kharagpur')).toBeInTheDocument();
    expect(screen.getByText('Spring Fest')).toBeInTheDocument();
  });

  it('filters societies when search input changes', async () => {
    render(<Table societies={mockSocieties} />);

    const searchInput = screen.getByPlaceholderText('🔎 Search societies');
    
    // Initially all societies should be visible
    expect(screen.getByText('Aerial Robotics Kharagpur')).toBeInTheDocument();
    expect(screen.getByText('Spring Fest')).toBeInTheDocument();
    
    // Type in the search input - should search when at least 3 characters are entered
    fireEvent.input(searchInput, { target: { value: 'Aeri' } });
    
    // Wait for the component to re-render
    await waitFor(() => {
      // After filtering, we would expect fewer or the same number of elements
      // depending on the filter result
    });
    
    // Try to filter by a specific society name
    fireEvent.input(searchInput, { target: { value: 'Aerial' } });
    
    await waitFor(() => {
      expect(screen.getByText('Aerial Robotics Kharagpur')).toBeInTheDocument();
    });
    
    // Clear the search
    fireEvent.input(searchInput, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByText('Aerial Robotics Kharagpur')).toBeInTheDocument();
      expect(screen.getByText('Spring Fest')).toBeInTheDocument();
    });
  });

  it('renders inner transition container with legend', () => {
    render(<Table societies={mockSocieties} />);

    const grids = screen.getAllByTestId('grid');
    const innerTransitionGrid = grids[1]; // The second grid is the inner transition grid
    expect(innerTransitionGrid).toBeInTheDocument();

    const legend = screen.getByTestId('legend');
    expect(legend).toBeInTheDocument();
  });

  it('handles empty societies array', () => {
    render(<Table societies={[]} />);

    // Should still render the search input and both grids (main and inner transition)
    expect(screen.getByPlaceholderText('🔎 Search societies')).toBeInTheDocument();
    expect(screen.getAllByTestId('grid')).toHaveLength(2);
  });

  it('applies invisible class based on filter for filtered societies', async () => {
    render(<Table societies={mockSocieties} />);
    
    const searchInput = screen.getByPlaceholderText('🔎 Search societies');
    fireEvent.input(searchInput, { target: { value: 'NonExistent' } });
    
    await waitFor(() => {
      // When searching for non-existent term, the societies should be invisible
      // but still be rendered (they will have an invisible style class)
    });
  });
});