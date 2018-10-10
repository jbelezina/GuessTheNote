import React from "react";
import stave from "./stave.png";
import Note from "./Note";

const Stave = props => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          top: "0vh",
          left: "5vw"
        }}
      >
        <img src={stave} width="200" alt="stave" />
        <Note pitch={props.currentNote} noteNo={props.currentNoteNo} />
      </div>
    </div>
  );
};

export default Stave;
