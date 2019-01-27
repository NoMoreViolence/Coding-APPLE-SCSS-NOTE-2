import React, { Component } from 'react';
import './modal.scss';

class ModalPage extends Component {
  render = () => (
    <div className="modal">
      <div className="modal-card">{this.props.children && this.props.children}</div>
    </div>
  );
}

export default ModalPage;
