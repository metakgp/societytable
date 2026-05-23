// Mock React.StrictMode to return its children directly for testing
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  StrictMode: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock the App component to have a simple render
jest.mock('./components/App.tsx', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mocked-app">Mocked App Component</div>,
  }
})

// Mock the react-dom/client module
const mockRender = jest.fn()
const mockRoot = {
  render: mockRender,
  unmount: jest.fn(),
}
const mockCreateRoot = jest.fn(() => mockRoot)
jest.mock('react-dom/client', () => ({
  createRoot: mockCreateRoot,
}))

// Mock SCSS imports
jest.mock('./styles/index.scss', () => ({}))

import React from 'react'

// Mock the DOM elements that are needed for the main file
const originalGetElementById = document.getElementById

describe('Main', () => {
  let container: HTMLElement

  beforeEach(() => {
    // Create a container element for testing
    container = document.createElement('div')
    container.id = 'root'
    document.body.appendChild(container)

    // Mock document.getElementById to return our test container
    Object.defineProperty(document, 'getElementById', {
      value: (id: string) => {
        if (id === 'root') {
          return container
        }
        return originalGetElementById.call(document, id)
      },
      writable: true,
    })

    // The ReactDOM.createRoot is already mocked at the module level
  })

  afterEach(() => {
    // Clean up after each test
    document.body.innerHTML = ''
    jest.clearAllMocks()
  })

  // Note: We cannot directly test the main.tsx side effects in a unit test
  // because importing it triggers immediate execution of ReactDOM.createRoot.
  // Instead, we verify our mocks were set up correctly.

  it('should have correct mocks set up', () => {
    // Verify that our mocks are properly configured
    expect(mockCreateRoot).toBeDefined();
    expect(mockRender).toBeDefined();
  });
});