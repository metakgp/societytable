import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell, { TableCellProps } from './Tablecell';
import { ISociety, Block } from '../data/societies';
import Modal from 'react-modal';

// Mock react-modal
Modal.setAppElement = jest.fn();
jest.mock('react-modal', () => ({
  __esModule: true,
  default: ({ isOpen, children, onRequestClose }: any) => {
    return isOpen ? (
      <div data-testid="modal" onClick={onRequestClose}>
        {children}
      </div>
    ) : null;
  }
}));

// Mock FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, size }: any) => (
    <span data-testid="fontawesome-icon" data-icon={icon} data-size={size} />
  )
}));

// Mock GridItem
jest.mock('./Grid', () => ({
  GridItem: ({ className, children }: { className: string; children: React.ReactNode }) => (
    <div className={className} data-testid="grid-item">
      {children}
    </div>
  )
}));

// Sample society for testing
const sampleSociety: ISociety = {
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
};

describe('TableCell', () => {
  // Test for society type
  it('renders society cell correctly', () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1
    };

    render(<TableCell {...props} />);

    // Find the main container by class since we can't add data-testid directly
    const cellContainer = document.querySelector('.cell-container');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');

    // Check if the society cell is rendered with correct classes
    const gridItem = screen.getByTestId('grid-item');
    expect(gridItem).toBeInTheDocument();
    expect(gridItem).toHaveClass('society');
    expect(gridItem).toHaveClass('block-t');

    // Check if the society data is displayed
    expect(screen.getByText('1')).toBeInTheDocument(); // index
    expect(screen.getByText('2013')).toBeInTheDocument(); // year
    expect(screen.getByText('Ar')).toBeInTheDocument(); // symbol
    expect(screen.getByText('M')).toBeInTheDocument(); // size
    expect(screen.getByTitle('Aerial Robotics Kharagpur')).toBeInTheDocument(); // title
  });

  it('renders society cell with recognized indicator', () => {
    const societyWithRecognition: ISociety = {
      ...sampleSociety,
      tsg_recognized: true
    };

    const props: TableCellProps = {
      type: 'society',
      society: societyWithRecognition,
      index: 1
    };

    render(<TableCell {...props} />);

    // Check if the recognized indicator is present
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders society cell without recognized indicator when not recognized', () => {
    const societyWithoutRecognition: ISociety = {
      ...sampleSociety,
      tsg_recognized: false
    };

    const props: TableCellProps = {
      type: 'society',
      society: societyWithoutRecognition,
      index: 1
    };

    render(<TableCell {...props} />);

    // Check that no recognized indicator is present
    const recognizedElements = screen.queryAllByText('*');
    expect(recognizedElements.length).toBe(0);
  });

  // Test for empty cell
  it('renders empty cell correctly', () => {
    const props: TableCellProps = {
      type: 'empty'
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');
    expect(cellContainer).toHaveClass('empty-cell');
  });

  // Test for inner-transition cell
  it('renders inner-transition cell correctly', () => {
    const props: TableCellProps = {
      type: 'inner-transition'
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');
    expect(cellContainer).toHaveClass('inner-transition-cell');

    expect(screen.getByText('↓')).toBeInTheDocument();
  });

  // Test for the-unknown-soc cell
  it('renders the-unknown-soc cell correctly', () => {
    const props: TableCellProps = {
      type: 'the-unknown-soc'
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');
    expect(cellContainer).toHaveClass('the-unknown-soc');

    // Use more specific selectors for elements with the same text
    const spans = screen.getAllByText('?');
    expect(spans).toHaveLength(3); // index, year, and size are all '?'

    // Find the index span by its class
    expect(document.querySelector('.index')).toHaveTextContent('?');
    expect(screen.getByText('Us')).toBeInTheDocument(); // symbol
    expect(screen.getByTitle('Click to learn more.')).toBeInTheDocument();
  });

  // Test for undiscovered cell
  it('renders undiscovered cell correctly', () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 119,
      block: 'T' as Block
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');
    expect(cellContainer).toHaveClass('undiscovered-soc');
    expect(cellContainer).toHaveClass('block-t');

    expect(screen.getByText('119')).toBeInTheDocument(); // index
    expect(screen.getByText('Uue')).toBeInTheDocument(); // symbol (IUPAC name)
  });

  // Test for undiscovered cell invisible prop
  it('renders undiscovered cell with invisible class when invisible prop is true', () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 119,
      block: 'T' as Block,
      invisible: true
    };

    render(<TableCell {...props} />);

    const cellContainer = document.querySelector('.cell-container');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('invisible');
  });

  // Test for society cell invisible prop
  it('renders society cell with invisible class when invisible prop is true', () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1,
      invisible: true
    };

    render(<TableCell {...props} />);

    const cellContainer = document.querySelector('.cell-container');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('invisible');
  });

  // Test for modal opening when clicking on society cell
  it('opens modal when society cell is clicked', async () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1
    };

    render(<TableCell {...props} />);

    // Initially, modal should not be open
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should now be open
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });

  // Test for modal opening when clicking on the-unknown-soc cell
  it('opens modal when the-unknown-soc cell is clicked', async () => {
    const props: TableCellProps = {
      type: 'the-unknown-soc'
    };

    render(<TableCell {...props} />);

    // Initially, modal should not be open
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should now be open
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });

  // Test for modal opening when clicking on undiscovered cell
  it('opens modal when undiscovered cell is clicked', async () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 119,
      block: 'T' as Block
    };

    render(<TableCell {...props} />);

    // Initially, modal should not be open
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should now be open
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });

  // Test for modal closing functionality
  it('closes modal when close button is clicked', async () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1
    };

    render(<TableCell {...props} />);

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should be open
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    // Click on modal to trigger close (using mock that calls onRequestClose)
    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);

    // Modal should be closed after a brief wait
    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });

  // Test for DetailsModal content in society type
  it('renders DetailsModal with correct content for society type', async () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1
    };

    render(<TableCell {...props} />);

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should be open with correct content
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    expect(screen.getByText('Aerial Robotics Kharagpur')).toBeInTheDocument();
    expect(screen.getByText(sampleSociety.description)).toBeInTheDocument();

    // Check that social links are rendered
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  // Test for DetailsModal content in the-unknown-soc type
  it('renders DetailsModal with correct content for the-unknown-soc type', async () => {
    const props: TableCellProps = {
      type: 'the-unknown-soc'
    };

    render(<TableCell {...props} />);

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should be open with correct content
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    expect(screen.getByText('The Unknown Society')).toBeInTheDocument();
    expect(screen.getByText(/Incompleteness creates room for innovation/)).toBeInTheDocument();
  });

  // Test for DetailsModal content in undiscovered type
  it('renders DetailsModal with correct content for undiscovered type', async () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 119,
      block: 'T' as Block
    };

    render(<TableCell {...props} />);

    // Click on the cell to open modal
    const cellContainer = document.querySelector('.cell-container');
    fireEvent.click(cellContainer!);

    // Modal should be open with correct content
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    expect(screen.getByText('Ununenium (Undiscovered)')).toBeInTheDocument();
    expect(screen.getByText(/This society has not been discovered yet/)).toBeInTheDocument();
  });

  // Test for IUPAC temporary name function behavior
  it('renders correct IUPAC temporary name for undiscovered elements', () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 115,
      block: 'T' as Block
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();

    // Index 115 should map to Ununpentium (Uup)
    expect(screen.getByText('115')).toBeInTheDocument();
    expect(screen.getByText('Uup')).toBeInTheDocument();
  });

  // Test for different block types
  it('renders undiscovered cell with correct block class', () => {
    const props: TableCellProps = {
      type: 'undiscovered',
      index: 115,
      block: 'O' as Block
    };

    render(<TableCell {...props} />);

    const cellContainer = screen.getByTestId('grid-item');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('block-o');
  });

  // Test for container class based on type
  it('applies correct type class to container', () => {
    const props: TableCellProps = {
      type: 'society',
      society: sampleSociety,
      index: 1
    };

    render(<TableCell {...props} />);

    const cellContainer = document.querySelector('.cell-container');
    expect(cellContainer).toBeInTheDocument();
    expect(cellContainer).toHaveClass('society');
  });
});