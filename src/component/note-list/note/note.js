import React, { Component } from 'react';
import './note.scss';
import ModalPage from '../../modal/modal';
import NoteRaw from '../../note-raw/note-raw';
import Delete from './../../delete/delete';

class Note extends Component {
  static defaultProps = {
    title: '',
    text: '',
    date: new Date()
  };

  state = {
    showEditModal: false,
    showDeleteModal: false
  };

  changeEditToogle = () => {
    this.setState({
      showChangeModal: !this.state.showChangeModal
    });
  };

  changeDeleteToogle = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  render = () => (
    <div id="note">
      <div id="note-menu">
        <span>{this.props.title}</span>
        <span>
          <span id="showChangeModal" onClick={this.changeEditToogle}>
            편집
          </span>
          <span id="showDeleteModal" onClick={this.changeDeleteToogle}>
            삭제
          </span>
        </span>
      </div>
      <div id="date">
        <span>
          {this.props.date.toISOString()}
          {this.props.edited && ' (edited)'}
        </span>
      </div>
      <div>{this.props.text}</div>

      {this.state.showChangeModal && (
        <ModalPage>
          <NoteRaw
            noteNumber={this.props.noteNumber}
            action={this.props.changeNote}
            close={this.changeEditToogle}
            subject={'노트 수정'}
            title={this.props.title}
            text={this.props.text}
          />
        </ModalPage>
      )}

      {this.state.showDeleteModal && (
        <ModalPage
          close={() => {
            this.toogle({ target: { id: 'showDeleteModal' } });
          }}
        >
          <Delete number={this.props.noteNumber} action={this.props.deleteNote} title={this.props.title} close={this.changeDeleteToogle} />
        </ModalPage>
      )}
    </div>
  );
}

export default Note;
