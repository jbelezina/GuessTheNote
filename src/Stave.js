import React, { Component } from "react";
import stave from "./stave.png";
import Note from "./Note";

const Stave = props => {
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
        <Note pitch={props.currentNote} noteNo={props.currentNoteNo} />
      </div>
    </div>
  );
};

export default Stave;
