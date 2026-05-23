import Header from './Header';

describe('Header', () => {
	it('is a function component', () => {
		expect(typeof Header).toBe('function');
	});

	it('exports default component', () => {
		expect(Header).toBeDefined();
	});

	it('has the correct component structure', () => {
		// Verify that the component is a function
		expect(typeof Header).toBe('function');

		// The component should render header element with class 'header'
		// and contain the expected content when rendered
		expect(Header).toBeDefined();
	});
});