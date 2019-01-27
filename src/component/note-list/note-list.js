import React, { Component } from 'react';
import Note from './note/note';
import './note-list.scss';

class NoteList extends Component {
  static defaultProps = {
    notes: [],
    search: ''
  };

  render() {
    const filteredNotes = filterNotes => {
      return filterNotes
        .map((note, idx) => {
          return { ...note, idx };
        })
        .filter(note => {
          return note.text.indexOf(this.props.search) !== -1;
        });
    };

    const noteListReturn = notes => {
      return filteredNotes(notes).map((note, idx) => {
        return (
          <Note
            key={idx}
            noteNumber={note.idx}
            title={note.title}
            text={note.text}
            date={note.date}
            edited={note.edited}
            changeNote={this.props.changeNote}
            deleteNote={this.props.deleteNote}
          />
        );
      });
    };

    // const noteListReturn = notes => {
    //   return notes.map((note, idx) => {
    //     return (
    //       <div key={idx}>
    //         <div>{note.title}</div>
    //         <div>{note.text}</div>
    //       </div>
    //     );
    //   });
    // };

    return (
      <div id="note-list-container">
        <div id="note-list">{noteListReturn(this.props.notes)}</div>
      </div>
    );
  }
}

export default NoteList;
