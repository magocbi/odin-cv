import React, { Component } from 'react';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import EducationInfoForm from '../EducationalInfoForm/EducationalInfoForm';

export default class CVEdit extends Component {
  render() {
    const {
      generalInformation,
      educationalList,
      onEducationDelete,
      onEducationAddition,
    } = this.props;

    const educationalFormList = educationalList.map((education) => (
      <EducationInfoForm
        fields={education}
        id={education.id}
        onDelete={onEducationDelete}
        key={education.id}
      />
    ));
    return (
      <div>
        <GeneralInfoForm fields={generalInformation} />
        {educationalFormList}
        <button onClick={onEducationAddition}>
          Add Educational Experience
        </button>
      </div>
    );
  }
}
