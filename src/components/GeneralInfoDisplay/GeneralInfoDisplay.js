import React, { Component } from 'react';
import '../../styles/GeneralInfoDisplay.css';

export default class GeneralInfoDisplay extends Component {
  render() {
    const { name, email, phoneNumber, address } = this.props.generalInfo;
    return (
      <div className='general-info'>
        <h1 className='name'>{name}</h1>
        <ul className='details'>
          <li>
            <span className='detail-header'>Email:</span> {email}
          </li>
          <li>
            <span className='detail-header'>Phone:</span> {phoneNumber}
          </li>
          <li>
            <span className='detail-header'>Address:</span> {address}
          </li>
        </ul>
      </div>
    );
  }
}
