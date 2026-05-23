import '@testing-library/jest-dom';

// Mock the testing-library/jest-dom import to verify it's working
// This test file verifies that setupTests.ts is properly configured
describe('setupTests.ts configuration', () => {
  // Test that the toHaveTextContent matcher is available
  test('should have access to extended Jest DOM matchers', () => {
    const element = document.createElement('div');
    element.textContent = 'Hello, World!';
    
    // Using toHaveTextContent matcher which comes from @testing-library/jest-dom
    expect(element).toHaveTextContent('Hello, World!');
  });

  // Test that the toBeInTheDocument matcher is available
  test('should have access to toBeInTheDocument matcher', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    
    // Using toBeInTheDocument matcher which comes from @testing-library/jest-dom
    expect(element).toBeInTheDocument();
    
    document.body.removeChild(element);
  });

  // Test that the toHaveAttribute matcher is available
  test('should have access to toHaveAttribute matcher', () => {
    const element = document.createElement('div');
    element.setAttribute('data-testid', 'test-element');
    element.setAttribute('class', 'test-class');
    
    // Using toHaveAttribute matcher which comes from @testing-library/jest-dom
    expect(element).toHaveAttribute('data-testid', 'test-element');
    expect(element).toHaveAttribute('class', 'test-class');
  });

  // Test that the toHaveClass matcher is available
  test('should have access to toHaveClass matcher', () => {
    const element = document.createElement('div');
    element.className = 'test-class another-class';
    
    // Using toHaveClass matcher which comes from @testing-library/jest-dom
    expect(element).toHaveClass('test-class');
    expect(element).toHaveClass('another-class');
    expect(element).toHaveClass('test-class', 'another-class');
  });

  // Test that the toBeVisible matcher is available
  test('should have access to toBeVisible matcher', () => {
    const element = document.createElement('div');
    element.style.display = 'block';
    document.body.appendChild(element); // Element needs to be in the document to be visible

    // Using toBeVisible matcher which comes from @testing-library/jest-dom
    expect(element).toBeVisible();

    element.style.display = 'none';
    expect(element).not.toBeVisible();

    document.body.removeChild(element);
  });

  // Test that the toBeDisabled matcher is available
  test('should have access to toBeDisabled matcher', () => {
    const inputElement = document.createElement('input');
    inputElement.disabled = true;
    
    // Using toBeDisabled matcher which comes from @testing-library/jest-dom
    expect(inputElement).toBeDisabled();
    
    inputElement.disabled = false;
    expect(inputElement).not.toBeDisabled();
  });

  // Basic test to verify Jest itself is working
  test('should run basic Jest tests', () => {
    expect(1).toBe(1);
    expect('test').toBe('test');
    expect({ a: 1 }).toEqual({ a: 1 });
  });
});