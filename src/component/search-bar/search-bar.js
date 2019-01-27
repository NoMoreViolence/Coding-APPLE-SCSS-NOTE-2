import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
`;
const InputBar = styled.input`
  margin-left: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  outline: none;
  background-color: white;
`;

class SearchBar extends Component {
  static defaultProps = {
    onChangeSearchText: () => console.log('Props가 전달되지 않았습니다')
  };

  render = () => {
    return (
      <SearchBarDiv>
        <InputBar name="search" placeholder="메모를 검색하세요" value={this.props.search} onChange={this.props.onChangeSearchText} />
      </SearchBarDiv>
    );
  };
}

export default SearchBar;
