import React, { Component } from "react";
import noteUp from "./note_up.png";
import noteDown from "./note_down.png";
class Note extends Component {
  render() {
    let style;

    switch (this.props.pitch) {
      case "G":
        style = {
          position: "absolute",
          left: 160,
          top: 268
        };
        break;

      case "A":
        style = {
          position: "absolute",
          left: 160,
          top: 247
        };
        break;

      case "H":
        style = {
          position: "absolute",
          left: 160,
          top: 225
        };
        break;

      case "C":
        style = {
          position: "absolute",
          left: 160,
          top: 203
        };
        break;

      case "D":
        style = {
          position: "absolute",
          left: 160,
          top: 182
        };
        break;

      case "E":
        style = {
          position: "absolute",
          left: 160,
          top: 161
        };
        break;

      case "F":
        style = {
          position: "absolute",
          left: 160,
          top: 138
        };
        break;

      case "G1":
        style = {
          position: "absolute",
          left: 160,
          top: 118
        };
        break;

      case "A1":
        style = {
          position: "absolute",
          left: 160,
          top: 95
        };
        break;

      case "H1":
        style = {
          position: "absolute",
          left: 160,
          top: 75
        };
        break;

      case "C1":
        style = {
          position: "absolute",
          left: 160,
          top: 189
        };
        break;

      case "D1":
        style = {
          position: "absolute",
          left: 160,
          top: 169
        };
        break;

      case "E1":
        style = {
          position: "absolute",
          left: 160,
          top: 147
        };
        break;

      case "F1":
        style = {
          position: "absolute",
          left: 160,
          top: 123
        };
        break;

      case "G2":
        style = {
          position: "absolute",
          left: 160,
          top: 101
        };
        break;

      case "A2":
        style = {
          position: "absolute",
          left: 160,
          top: 77
        };
        break;

      case "H2":
        style = {
          position: "absolute",
          left: 160,
          top: 55
        };
        break;
    }

    let note;
    if (this.props.noteNo <= 9) {
      note = noteUp;
    } else {
      note = noteDown;
    }

    return (
      <div>
        <img src={note} style={style} width="170" height="196" alt="note" />
      </div>
    );
  }
}

export default Note;
