import React, { Component } from 'react';

export class Form extends Component {
  render() {
    let fields = this.props.fields.map(
      ({ type, placeholder, value, name }, index) => (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          key={index}
          onChange={(e) => this.props.onChange(name, e.target.value)}
        />
      )
    );

    return <div>{fields}</div>;
  }
}

export default Form;
