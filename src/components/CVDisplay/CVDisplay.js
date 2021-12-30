import React, { Component } from 'react';
import GeneralInfoDisplay from '../GeneralInfoDisplay/GeneralInfoDisplay';

export default class CVDisplay extends Component {
  render() {
    const { generalInformation, workList, educationalLists } = this.props;

    return (
      <div>
        <GeneralInfoDisplay generalInfo={generalInformation} />
      </div>
    );
  }
}
