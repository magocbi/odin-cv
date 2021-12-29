import React, { Component } from 'react';
import '../../styles/Form.css';

export class Form extends Component {
  render() {
    let fields = this.props.fields.map(
      ({ type, placeholder, value, name }, index) => {
        if (type === 'textarea')
          return (
            <textarea
              className='cv-field no-resize'
              placeholder={placeholder}
              value={value}
              name={name}
              key={index}
              onChange={(e) => this.props.onChange(name, e.target.value)}
            />
          );
        else
          return (
            <input
              className='cv-field'
              type={type}
              placeholder={placeholder}
              value={value}
              name={name}
              key={index}
              onChange={(e) => this.props.onChange(name, e.target.value)}
            />
          );
      }
    );

    return <div className='cv-section'>{fields}</div>;
  }
}

export default Form;
