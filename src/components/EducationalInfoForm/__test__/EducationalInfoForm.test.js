import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EducationalInfoForm from '../EducationalInfoForm';

describe('EducationalInfoForm', () => {
  const educationalInfo = {
    schoolName: 'MySchoolName',
    degree: 'mydegree',
    from: '11-11-2011',
    to: '11-11-2015',
  };
  const onDeleteMock = jest.fn();
  test('should render correct inputs from props', () => {
    render(<EducationalInfoForm fields={educationalInfo} />);
    const inputElements = screen.getAllByDisplayValue(
      /[(MySchoolName)(mydegree)(11-11-2011)(11-11-2015)]/i
    );
    expect(inputElements.length).toBe(4);
  });
  test('should send id to callback on button click', () => {
    render(
      <EducationalInfoForm
        fields={educationalInfo}
        id={5}
        onDelete={onDeleteMock}
      />
    );
    const deleteButton = screen.getByText(/delete/i);
    userEvent.click(deleteButton);
    expect(onDeleteMock).toBeCalledWith(5);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
