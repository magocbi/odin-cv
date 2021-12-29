import React, { Component } from 'react';
import Form from '../Form/Form';

export default class GeneralInfoForm extends Component {
  render() {
    const { name, email, phoneNumber, address } = this.props.fields;
    const { onChange } = this.props;
    const fields = [
      {
        type: 'text',
        placeholder: 'Enter your name here',
        value: name,
        name: 'name',
      },
      {
        type: 'email',
        placeholder: 'example@email.com',
        value: email,
        name: 'email',
      },
      {
        type: 'tel',
        placeholder: 'Enter phone number here',
        value: phoneNumber,
        name: 'phoneNumber',
      },
      {
        type: 'text',
        placeholder: 'Enter your address here',
        value: address,
        name: 'address',
      },
    ];
    return (
      <div>
        <Form fields={fields} onChange={onChange} />
      </div>
    );
  }
}
