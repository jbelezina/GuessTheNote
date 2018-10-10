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
          left: 65,
          top: 142
        };
        break;

      case "A":
        style = {
          position: "absolute",
          left: 65,
          top: 128
        };
        break;

      case "H":
        style = {
          position: "absolute",
          left: 65,
          top: 112
        };
        break;

      case "C":
        style = {
          position: "absolute",
          left: 65,
          top: 100
        };
        break;

      case "D":
        style = {
          position: "absolute",
          left: 65,
          top: 83
        };
        break;

      case "E":
        style = {
          position: "absolute",
          left: 65,
          top: 70
        };
        break;

      case "F":
        style = {
          position: "absolute",
          left: 65,
          top: 55
        };
        break;

      case "G1":
        style = {
          position: "absolute",
          left: 65,
          top: 42
        };
        break;

      case "A1":
        style = {
          position: "absolute",
          left: 65,
          top: 26
        };
        break;

      case "H1":
        style = {
          position: "absolute",
          left: 65,
          top: 12
        };
        break;

      case "C1":
        style = {
          position: "absolute",
          left: 65,
          top: 88
        };
        break;

      case "D1":
        style = {
          position: "absolute",
          left: 65,
          top: 77
        };
        break;

      case "E1":
        style = {
          position: "absolute",
          left: 65,
          top: 60
        };
        break;

      case "F1":
        style = {
          position: "absolute",
          left: 65,
          top: 45
        };
        break;

      case "G2":
        style = {
          position: "absolute",
          left: 65,
          top: 30
        };
        break;

      case "A2":
        style = {
          position: "absolute",
          left: 65,
          top: 15
        };
        break;

      case "H2":
        style = {
          position: "absolute",
          left: 65,
          top: 0
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
        <img src={note} style={style} width="130" height="130" alt="note" />
      </div>
    );
  }
}

export default Note;
