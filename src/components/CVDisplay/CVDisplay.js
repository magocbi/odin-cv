import React, { Component } from 'react';
import EducationalInfoDisplay from '../EducationalInfoDisplay/EducationalInfoDisplay';
import GeneralInfoDisplay from '../GeneralInfoDisplay/GeneralInfoDisplay';
import WorkInfoDisplay from '../WorkInfoDisplay/WorkInfoDisplay';

export default class CVDisplay extends Component {
  render() {
    const { generalInformation, workList, educationalList } = this.props;

    return (
      <div>
        <GeneralInfoDisplay generalInfo={generalInformation} />
        <EducationalInfoDisplay educationalList={educationalList} />
        <WorkInfoDisplay workList={workList} />
      </div>
    );
  }
}
