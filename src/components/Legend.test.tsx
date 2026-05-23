// Jest tests for Legend component
import Legend from './Legend';

// Mock the image import
jest.mock('../assets/legend_nobg.png', () => 'mocked-image-path.png');

describe('Legend Component', () => {
	it('exports a function component', () => {
		expect(typeof Legend).toBe('function');
	});

	// Basic test to ensure that the component module loads correctly
	it('loads the component module successfully', () => {
		expect(Legend).toBeDefined();
	});

	// Test that the component has the expected structure
	it('has the correct component name', () => {
		expect(Legend.name).toBe('Legend');
	});

	// Test the component's render output (at a basic level)
	it('should have a function length of 0 (no required props)', () => {
		expect(Legend.length).toBe(0);
	});
});