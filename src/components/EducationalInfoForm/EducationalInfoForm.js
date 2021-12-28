import React, { Component } from 'react';
import Form from '../Form/Form';

export default class EducationalInfoForm extends Component {
  render() {
    const { schoolName, degree, from, to } = this.props.fields;
    const { id, onDelete } = this.props;
    const fields = [
      {
        type: 'text',
        placeholder: 'Enter the school name here',
        value: schoolName,
        name: 'schoolName',
      },
      {
        type: 'text',
        placeholder: 'Enter degree here',
        value: degree,
        name: 'degree',
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
    ];

    return (
      <div>
        <Form fields={fields} />
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  }
}
