import React from 'react';
import Draggable from 'react-draggable';

const draggablePieceHoc = (Piece) => {
  return class extends React.Component {
    render() {
      return (
        <Draggable
          onDrag={this.props.onDrag}
          onStart={this.props.onStart}
          onStop={this.props.onStop}
        >
          <div>
            <Piece id={this.props.id}></Piece>
          </div>
        </Draggable>
      );
    }
  };
};

export default draggablePieceHoc;
