import React, { Component } from 'react';
import Form from '../Form/Form';

export default class WorkInfoForm extends Component {
  onInputChange = (name, value) =>
    this.props.onChange(this.props.id, name, value);

  render() {
    const { companyName, position, from, to, description } = this.props.fields;
    const { id, onDelete } = this.props;
    const fields = [
      {
        type: 'text',
        placeholder: 'Enter the company name here',
        value: companyName,
        name: 'companyName',
      },
      {
        type: 'text',
        placeholder: 'Enter position here',
        value: position,
        name: 'position',
      },
      {
        type: 'text',
        placeholder: 'From',
        value: from,
        name: 'from',
      },
      {
        type: 'text',
        placeholder: 'To',
        value: to,
        name: 'to',
      },
      {
        type: 'textarea',
        placeholder: 'Enter your main tasks here...',
        value: description,
        name: 'description',
      },
    ];

    return (
      <div className='cv-form-list'>
        <Form fields={fields} onChange={this.onInputChange} />
        <button className='btn-delete' onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}
