import React, { Component } from 'react';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import EducationInfoForm from '../EducationalInfoForm/EducationalInfoForm';
import WorkInfoForm from '../WorkInfoForm/WorkInfoForm';

export default class CVEdit extends Component {
  render() {
    const {
      generalInformation,
      onGeneralChange,
      educationalList,
      workList,
      onEducationDelete,
      onEducationAddition,
      onEducationChange,
      onWorkDelete,
      onWorkAddition,
      onWorkChange,
    } = this.props;

    const educationalFormList = educationalList.map((education) => (
      <EducationInfoForm
        fields={education}
        id={education.id}
        onDelete={onEducationDelete}
        onChange={onEducationChange}
        key={education.id}
      />
    ));
    const workFormList = workList.map((work) => (
      <WorkInfoForm
        fields={work}
        id={work.id}
        onDelete={onWorkDelete}
        onChange={onWorkChange}
        key={work.id}
      />
    ));
    return (
      <div>
        <GeneralInfoForm
          fields={generalInformation}
          onChange={onGeneralChange}
        />
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
