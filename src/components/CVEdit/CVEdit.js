import React, { Component } from 'react';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import EducationInfoForm from '../EducationalInfoForm/EducationalInfoForm';
import WorkInfoForm from '../WorkInfoForm/WorkInfoForm';

export default class CVEdit extends Component {
  render() {
    const {
      generalInformation,
      educationalList,
      workList,
      onEducationDelete,
      onEducationAddition,
      onWorkDelete,
      onWorkAddition,
    } = this.props;

    const educationalFormList = educationalList.map((education) => (
      <EducationInfoForm
        fields={education}
        id={education.id}
        onDelete={onEducationDelete}
        key={education.id}
      />
    ));
    const workFormList = workList.map((work) => (
      <WorkInfoForm
        fields={work}
        id={work.id}
        onDelete={onWorkDelete}
        key={work.id}
      />
    ));
    return (
      <div>
        <GeneralInfoForm fields={generalInformation} />
        {educationalFormList}
        <button onClick={onEducationAddition}>
          Add Educational Experience
        </button>
        {workFormList}
        <button onClick={onWorkAddition}>Add Work Experience</button>
      </div>
    );
  }
}
