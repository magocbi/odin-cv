import React, { Component } from 'react';
import '../../styles/EducationalInfoDisplay.css';

export default class EducationalInfoDisplay extends Component {
  render() {
    const educationDisplayList = this.props.educationalList.map(
      ({ schoolName, degree, from, to, id }) => (
        <div className='education-entry' key={id}>
          <h3>{schoolName}</h3>
          <p>
            From {from} to {to}
          </p>
          <p>Degree: {degree}</p>
        </div>
      )
    );
    return (
      <div className='education-info'>
        <h2 className='section-title'>Education</h2>
        <div className='education-list'>{educationDisplayList}</div>
      </div>
    );
  }
}
