import { render, screen } from '@testing-library/react';
import GeneralInfoForm from '../GeneralInfoForm';

const fields = {
  name: 'myName',
  email: 'email@email',
  phoneNumber: '55555555',
  address: 'myAdress',
};

describe('GeneralInfoForm', () => {
  test('should render the correct number of inputs from props', () => {
    render(<GeneralInfoForm fields={fields} />);
    const inputElements = screen.getAllByDisplayValue(
      /[(myName)(email@email)(55555555)(myAdress)]/i
    );
    expect(inputElements.length).toBe(4);
  });
});
