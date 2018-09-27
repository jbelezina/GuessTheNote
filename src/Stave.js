import React, { Component } from "react";
import stave from "./stave.png";
import Note from "./Note";
class Stave extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img
          src={stave}
          style={{
            position: "absolute",
            top: "57px",
            left: "10%"
          }}
          width="300"
          alt="stave"
        />
        <div style={{ position: "absolute" }}>
          <Note
            pitch={this.props.currentNote}
            noteNo={this.props.currentNoteNo}
          />
        </div>
      </div>
    );
  }
}

export default Stave;
