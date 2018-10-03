import React, { Component } from "react";
import Stave from "./Stave";
import Controls from "./Controls";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.generateNewNote();
  }

  generateNewNote = () => {
    console.log("generating a note");
    let newNoteNumber = Math.floor(Math.random() * 17);
    this.props.setNewNote(newNoteNumber);
    this.props.setMessageTo("Jak to nutka?");
    this.props.unblockGuessing();
  };

  handleSelection = guessedNote => {
    if (this.props.canGuess) {
      if (guessedNote === this.props.currentNote[0]) {
        this.props.setMessageTo("Brawo!");
        this.props.incrementScore();
        this.props.blockGuessing();
        setTimeout(() => {
          this.generateNewNote();
          this.props.unblockGuessing();
          this.props.setMessageTo("Jaka to nutka?");
        }, 3000);
      } else {
        this.props.setMessageTo("Spróbuj ponownie");
      }
    }
  };

  render() {
    let staveDiv = {
      width: "500px",
      height: "500px",
      position: "fixed",
      top: "120px",
      left: "37vw"
    };

    let messageStyle = {
      fontFamily: '"Great Vibes", cursive',
      fontSize: "70px",
      margin: "auto",
      verticalAlign: "middle",
      marginTop: "40px",
      marginBottom: "40px"
    };

    let scoreStyle = {
      position: "fixed",
      fontFamily: '"Great Vibes", cursive',
      fontSize: "40px",
      marginTop: "40px"
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 style={messageStyle}>{this.props.message}</h1>
            <h1 style={scoreStyle}>Twój wynik: {this.props.score}</h1>
          </div>
          <div className="row" style={staveDiv}>
            <Stave
              currentNote={this.props.currentNote}
              currentNoteNo={this.props.currentNoteNumber}
            />
          </div>
          <div className="row">
            <Controls handleSelection={this.handleSelection} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    pitches: state.pitches,
    score: state.score,
    canGuess: state.canGuess,
    currentNote: state.currentNote,
    currentNoteNumber: state.currentNoteNumber
  };
};

const mapDispachToProps = dispach => {
  return {
    setMessageTo: message => {
      dispach({
        type: "CHANGE_MESSAGE",
        value: message
      });
    },
    incrementScore: () => {
      dispach({
        type: "SCORE_UP"
      });
    },
    blockGuessing: () => {
      dispach({
        type: "BLOCK_GUESSING"
      });
    },
    unblockGuessing: () => {
      dispach({
        type: "UNBLOCK_GUESSING"
      });
    },
    setNewNote: newNoteNumber => {
      dispach({
        type: "SET_NEW_NOTE",
        value: newNoteNumber
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
