import { Component } from 'react';
import CVEdit from './components/CVEdit/CVEdit';

import uniqid from 'uniqid';

import './styles/app.css';

const initialState = {
  generalInfo: {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  educationalInfo: [
    {
      schoolName: '',
      degree: '',
      from: '',
      to: '',
      id: uniqid('education'),
    },
  ],
  workInfo: [
    {
      companyName: '',
      position: '',
      from: '',
      to: '',
      description: '',
      id: uniqid('work'),
    },
  ],
  editing: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  editGeneral = (name, value) => {
    this.setState((prev) => {
      return { generalInfo: { ...prev.generalInfo, [name]: value } };
    });
  };

  addEducation = () => {
    const educationInfo = {
      schoolName: '',
      degree: '',
      from: '',
      to: '',
      id: uniqid('education'),
    };
    this.setState((prev) => ({
      educationalInfo: [...prev.educationalInfo, educationInfo],
    }));
  };

  deleteEducation = (id) => {
    this.setState((prev) => ({
      educationalInfo: prev.educationalInfo.filter(
        (education) => education.id !== id
      ),
    }));
  };

  addWork = () => {
    const workInfo = {
      companyName: '',
      position: '',
      from: '',
      to: '',
      description: '',
      id: uniqid('work'),
    };
    this.setState((prev) => ({
      workInfo: [...prev.workInfo, workInfo],
    }));
  };

  deleteWork = (id) => {
    this.setState((prev) => ({
      workInfo: prev.workInfo.filter((work) => work.id !== id),
    }));
  };

  editEducation = (id, name, value) => {
    this.setState((prev) => {
      const educationList = prev.educationalInfo;
      let targetEducation = educationList.find(
        (education) => education.id === id
      );
      if (targetEducation) {
        targetEducation = { ...targetEducation, [name]: value };
        return {
          educationalInfo: [
            ...educationList.filter((education) => education.id !== id),
            targetEducation,
          ],
        };
      }
      return { educationalInfo: educationList };
    });
  };

  editWork = (id, name, value) => {
    this.setState((prev) => {
      const workList = prev.workInfo;
      let targetWork = workList.find((work) => work.id === id);
      if (targetWork) {
        targetWork = { ...targetWork, [name]: value };
        return {
          workInfo: [...workList.filter((work) => work.id !== id), targetWork],
        };
      }
      return { workInfo: workList };
    });
  };

  render() {
    const { generalInfo, educationalInfo, workInfo, editing } = this.state;
    return (
      <div className='App'>
        {editing ? (
          <CVEdit
            generalInformation={generalInfo}
            onGeneralChange={this.editGeneral}
            educationalList={educationalInfo}
            workList={workInfo}
            onEducationAddition={this.addEducation}
            onEducationDelete={this.deleteEducation}
            onEducationChange={this.editEducation}
            onWorkAddition={this.addWork}
            onWorkDelete={this.deleteWork}
            onWorkChange={this.editWork}
          />
        ) : (
          'DISPLAY INFO'
        )}
      </div>
    );
  }
}

export default App;
