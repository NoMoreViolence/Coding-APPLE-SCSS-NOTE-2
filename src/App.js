import React, { Component } from 'react';
import NoteList from './component/note-list/note-list';
import styled from 'styled-components';
import ModalPage from './component/modal/modal';
import NoteRaw from './component/note-raw/note-raw';
import SearchComponent from './component/search-bar/search-bar';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppDiv = styled.div`
  width: 50vw;
  height: 80vh;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #28bbf7;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div {
    display: flex;
    justify-content: flex-end;
  }

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

class App extends Component {
  state = {
    search: '',
    notes: [
      { date: new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.', edited: false },
      { date: new Date(), text: '두번째 메모', title: 'SECOND', edited: false }
    ],
    modalToogle: false
  };

  toogleModal = () => {
    this.setState({
      modalToogle: !this.state.modalToogle
    });
  };

  onChangeSearchText = e => {
    this.setState({
      search: e.target.value
    });
  };
  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, { title, text, date: new Date(), edited: false }]
    });
  };
  changeNote = (title, text, number) => {
    this.setState({
      notes: this.state.notes.map((note, idx) => (idx === number ? { ...note, title, text, edited: true } : note))
    });
  };
  deleteNote = number => {
    this.setState({
      notes: this.state.notes.filter((note, idx) => (idx === number ? false : true))
    });
  };

  render() {
    return (
      <Container>
        {this.state.modalToogle && (
          <ModalPage>
            <NoteRaw action={this.createNote} close={this.toogleModal} />
          </ModalPage>
        )}
        <AppDiv>
          <SearchBar>
            <div>
              <span>노트 만들기</span>
            </div>
            <div>
              <button onClick={this.toogleModal}>노트 작성</button>
              <SearchComponent search={this.state.search} onChangeSearchText={this.onChangeSearchText} />
            </div>
          </SearchBar>
          <NoteList search={this.state.search} notes={this.state.notes} changeNote={this.changeNote} deleteNote={this.deleteNote} />
        </AppDiv>
      </Container>
    );
  }
}

export default App;
