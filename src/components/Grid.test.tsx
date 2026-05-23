import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid, GridItem, IGridProps, IGridItemProps } from './Grid';

describe('Grid Component', () => {
  it('renders grid container with correct CSS grid properties', () => {
    const mockProps: IGridProps = {
      options: {
        numColumns: 3,
        gap: '10px'
      }
    };

    render(<Grid {...mockProps}>Grid content</Grid>);

    const gridContainer = screen.getByText('Grid content');
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveStyle({
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px'
    });
  });

  it('renders grid with default gap when not provided', () => {
    const mockProps: IGridProps = {
      options: {
        numColumns: 2
      }
    };

    render(<Grid {...mockProps}>Grid content</Grid>);

    const gridContainer = screen.getByText('Grid content');
    expect(gridContainer).toHaveStyle({
      gap: '0px 0px'
    });
  });

  it('renders grid with custom className', () => {
    const mockProps: IGridProps = {
      options: {
        numColumns: 2
      },
      className: 'custom-grid-class'
    };

    render(<Grid {...mockProps}>Grid content</Grid>);

    const gridContainer = screen.getByText('Grid content');
    expect(gridContainer).toHaveClass('grid-container');
    expect(gridContainer).toHaveClass('custom-grid-class');
  });

  it('renders children correctly', () => {
    const mockProps: IGridProps = {
      options: {
        numColumns: 2
      }
    };

    render(
      <Grid {...mockProps}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders different number of columns correctly', () => {
    const mockProps: IGridProps = {
      options: {
        numColumns: 4
      }
    };

    render(<Grid {...mockProps}>Grid content</Grid>);

    const gridContainer = screen.getByText('Grid content');
    expect(gridContainer).toHaveStyle({
      gridTemplateColumns: '1fr 1fr 1fr 1fr'
    });
  });
});

describe('GridItem Component', () => {
  it('renders grid item with correct gridColumnEnd span', () => {
    const mockProps: IGridItemProps = {
      options: {
        width: 2
      }
    };

    render(<GridItem {...mockProps}>Grid item content</GridItem>);

    const gridItem = screen.getByText('Grid item content');
    expect(gridItem).toBeInTheDocument();
    expect(gridItem).toHaveStyle({
      gridColumnEnd: 'span 2'
    });
  });

  it('renders grid item with default width of 1 when not provided', () => {
    const mockProps: IGridItemProps = {};

    render(<GridItem {...mockProps}>Grid item content</GridItem>);

    const gridItem = screen.getByText('Grid item content');
    expect(gridItem).toHaveStyle({
      gridColumnEnd: 'span 1'
    });
  });

  it('renders grid item with custom className', () => {
    const mockProps: IGridItemProps = {
      options: {
        width: 3
      },
      className: 'custom-grid-item-class'
    };

    render(<GridItem {...mockProps}>Grid item content</GridItem>);

    const gridItem = screen.getByText('Grid item content');
    expect(gridItem).toHaveClass('grid-item');
    expect(gridItem).toHaveClass('custom-grid-item-class');
  });

  it('renders children correctly', () => {
    const mockProps: IGridItemProps = {};

    render(
      <GridItem {...mockProps}>
        <span>Child content</span>
      </GridItem>
    );

    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('renders with different width values', () => {
    const mockProps: IGridItemProps = {
      options: {
        width: 5
      }
    };

    render(<GridItem {...mockProps}>Grid item content</GridItem>);

    const gridItem = screen.getByText('Grid item content');
    expect(gridItem).toHaveStyle({
      gridColumnEnd: 'span 5'
    });
  });
});

describe('Grid and GridItem Integration', () => {
  it('works together correctly in a grid layout', () => {
    const gridProps: IGridProps = {
      options: {
        numColumns: 3,
        gap: '15px'
      }
    };

    render(
      <Grid {...gridProps}>
        <GridItem>Item 1</GridItem>
        <GridItem options={{ width: 2 }}>Item 2 (spans 2)</GridItem>
        <GridItem>Item 3</GridItem>
      </Grid>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2 (spans 2)')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // Check that the first item has default span of 1
    expect(screen.getByText('Item 1')).toHaveStyle({
      gridColumnEnd: 'span 1'
    });

    // Check that the second item has custom span of 2
    expect(screen.getByText('Item 2 (spans 2)')).toHaveStyle({
      gridColumnEnd: 'span 2'
    });

    // Check that the grid has 3 columns and 15px gap
    const gridContainer = screen.getByText('Item 1').closest('.grid-container');
    expect(gridContainer).toHaveStyle({
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '15px'
    });
  });
});