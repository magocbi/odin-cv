import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WorkInfoForm from '../WorkInfoForm';

describe('EducationalInfoForm', () => {
  const workInfo = {
    companyName: 'MyCompanyName',
    position: 'myposition',
    from: '11-11-2011',
    to: '11-11-2015',
    description: 'My tasks were 1,2,3 and 4',
  };
  const onDeleteMock = jest.fn();
  test('should render correct inputs from props', () => {
    render(<WorkInfoForm fields={workInfo} />);
    const inputElements = screen.getAllByDisplayValue(
      /[(MyCompanyName)(myposition)(11-11-2011)(11-11-2015)(My tasks were 1,2,3 and 4)]/i
    );
    expect(inputElements.length).toBe(5);
  });
  test('should send id to callback on button click', () => {
    render(<WorkInfoForm fields={workInfo} id={5} onDelete={onDeleteMock} />);
    const deleteButton = screen.getByText(/delete/i);
    userEvent.click(deleteButton);
    expect(onDeleteMock).toBeCalledWith(5);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
