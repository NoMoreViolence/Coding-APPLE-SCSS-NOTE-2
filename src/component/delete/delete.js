import React, { Component } from 'react';
import './delete.scss';

class Delete extends Component {
  execute = () => {
    this.props.action(this.props.number);
    this.props.close();
  };

  render = () => (
    <>
      <div id="memo-what-for">
        <span>노트 삭제</span>
      </div>

      <div>정말 노트를 삭제 하시겠어요 ? ({this.props.title})</div>

      <div id="memo-button">
        <button onClick={this.execute}>삭제하기</button>
      </div>
    </>
  );
}

export default Delete;
