import React, { Component } from 'react';

export default class WorkInfoDisplay extends Component {
  render() {
    const workDisplayList = this.props.workList.map(
      ({ companyName, position, from, to, description, id }) => (
        <div className='work-entry' key={id}>
          <h3>{companyName}</h3>
          <p>
            From {from} to {to}
          </p>
          <p>Position: {position}</p>
          <h4>Main Taks</h4>
          <p>{description}</p>
        </div>
      )
    );
    return (
      <div className='work-info'>
        <h2 className='section-title'>Work Experience</h2>
        <div className='work-list'>{workDisplayList}</div>
      </div>
    );
  }
}
