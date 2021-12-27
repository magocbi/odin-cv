import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form';

const onChangeMocked = jest.fn();

describe('Form', () => {
  test('should render input fields', () => {
    const fields = [{}, {}, {}, {}];
    render(<Form fields={fields} />);
    const inputElements = screen.getAllByDisplayValue('');
    expect(inputElements.length).toBe(4);
  });

  test('should render correct type from props', () => {
    const input = { type: 'date' };
    render(<Form fields={[input]} />);
    const inputElement = screen.getByDisplayValue('');
    expect(inputElement).toHaveAttribute('type', input.type);
  });

  test('should render correct placeholder from props', () => {
    const input = { placeholder: 'My Placeholder' };
    render(<Form fields={[input]} />);
    const inputElement = screen.getByPlaceholderText(input.placeholder);
    expect(inputElement).toBeInTheDocument();
  });
  test('should render correct value from props', () => {
    const input = { value: 'my value' };
    render(<Form fields={[input]} onChange={onChangeMocked} />);
    const inputElement = screen.getByDisplayValue(input.value);
    expect(inputElement).toBeInTheDocument();
  });
  test('should call upon callback when input is changed by user with the input name', () => {
    render(<Form onChange={onChangeMocked} fields={[{ name: 'email' }]} />);
    const inputElement = screen.getByDisplayValue('');
    const typedText = 'testing input change';
    userEvent.type(inputElement, typedText);
    expect(onChangeMocked).toHaveBeenCalledTimes(typedText.length);
    expect(onChangeMocked).toHaveBeenCalledWith(
      'email',
      'testing input change'
    );
  });
});
