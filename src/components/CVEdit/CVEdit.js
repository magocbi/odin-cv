import React, { Component } from 'react';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';

export default class CVEdit extends Component {
  render() {
    const { generalInformation } = this.props;

    return (
      <div>
        <GeneralInfoForm fields={generalInformation} />
      </div>
    );
  }
}
