import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CVEdit from '../CVEdit';

const generalInfo = {
  name: 'myName',
  email: 'email@email',
  phoneNumber: '55555555',
  address: 'myAdress',
};

let count = 1;

function getEducationInfo() {
  const educationalInfo = {
    schoolName: 'MySchoolName',
    degree: 'mydegree',
    from: '11-11-2011',
    to: '11-11-2015',
    id: count,
  };
  count++;
  return educationalInfo;
}

describe('CVEdit', () => {
  test('should render general information input from props', () => {
    render(<CVEdit generalInformation={generalInfo} educationalList={[]} />);
    const inputElements = screen.getAllByDisplayValue(
      /[(myName)(email@email)(55555555)(myAdress)]/i
    );
    expect(inputElements.length).toBe(4);
  });
  test('should render educational information input from props', () => {
    render(
      <CVEdit generalInformation={{}} educationalList={[getEducationInfo()]} />
    );
    const inputElements = screen.getAllByDisplayValue(
      /[(MySchoolName)(mydegree)(11-11-2011)(11-11-2015)]/i
    );
    expect(inputElements.length).toBe(4);
  });
  test('should render multiple educational information input from props', () => {
    render(
      <CVEdit
        generalInformation={{}}
        educationalList={[
          getEducationInfo(),
          getEducationInfo(),
          getEducationInfo(),
        ]}
      />
    );
    const inputElements = screen.getAllByDisplayValue(
      /[(MySchoolName)(mydegree)(11-11-2011)(11-11-2015)]/i
    );
    expect(inputElements.length).toBe(12);
  });
  test('should call callback to add educational experience', () => {
    const onEducationAdditionMocked = jest.fn();
    render(
      <CVEdit
        generalInformation={{}}
        educationalList={[]}
        onEducationAddition={onEducationAdditionMocked}
      />
    );
    const educationAddBtn = screen.getByText(/Add Education/i);
    userEvent.click(educationAddBtn);
    expect(onEducationAdditionMocked).toHaveBeenCalledTimes(1);
  });
});
