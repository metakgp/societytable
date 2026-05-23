// Mock asset imports before importing components
jest.mock('../assets/legend_nobg.png', () => {
  return '/mocked-image-path.png';
});

import App from './App';

describe('App Component', () => {
  it('is a function component', () => {
    expect(typeof App).toBe('function');
  });

  it('exports default component', () => {
    expect(App).toBeDefined();
  });
});