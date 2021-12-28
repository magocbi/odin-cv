import { render, screen } from '@testing-library/react';
import CVEdit from '../CVEdit';

describe('CVEdit', () => {
  test('should render general information input from props', () => {
    const generalInfo = {
      name: 'myName',
      email: 'email@email',
      phoneNumber: '55555555',
      address: 'myAdress',
    };
    render(<CVEdit generalInformation={generalInfo} />);
    const inputElements = screen.getAllByDisplayValue(
      /[(myName)(email@email)(55555555)(myAdress)]/i
    );
    expect(inputElements.length).toBe(4);
  });
});
