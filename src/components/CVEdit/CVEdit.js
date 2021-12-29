import React, { Component } from 'react';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import EducationInfoForm from '../EducationalInfoForm/EducationalInfoForm';
import WorkInfoForm from '../WorkInfoForm/WorkInfoForm';

import '../../styles/CVEdit.css';

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
      <div className='cv-edit'>
        <h2 className='cv-form-header'>General Information</h2>
        <GeneralInfoForm
          fields={generalInformation}
          onChange={onGeneralChange}
        />

        <h2 className='cv-form-header'>Educational Experience</h2>
        {educationalFormList}
        <button className='btn-add' onClick={onEducationAddition}>
          Add Educational Experience
        </button>

        <h2 className='cv-form-header'>Work Experience</h2>
        {workFormList}
        <button className='btn-add' onClick={onWorkAddition}>
          Add Work Experience
        </button>
      </div>
    );
  }
}
