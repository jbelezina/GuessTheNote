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
    this.props.setMessageTo("Jaka to nutka?");
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
      position: "absolute",
      width: "500px",
      height: "500px",
      top: "25vh",
      left: "37vw"
    };

    let messageStyle = {
      position: "absolute",
      fontFamily: '"Great Vibes", cursive',
      fontSize: "70px",
      top: "0vh",
      left: "38vw"
    };

    let scoreStyle = {
      postion: "absolute",
      fontFamily: '"Great Vibes", cursive',
      fontSize: "60px",
      top: "0vh",
      left: "5vw"
    };

    let controlsStyle = {
      position: "absolute",
      top: "8vw",
      left: "35vw"
    };

    let containerStyle = {
      margin: "50px",
      position: "relative"
    };

    let resetButton;

    if (this.props.score > 0) {
      resetButton = (
        <button
          className="btn btn-danger"
          style={{
            paddingTop: "10px",
            marginBottom: "10px",
            marginLeft: "20px"
          }}
          onClick={this.props.resetScore}
        >
          <i class="fas fa-undo-alt" />
        </button>
      );
    }

    return (
      <div className="App">
        <div className="container" style={containerStyle}>
          <div className="row">
            <h1 style={messageStyle}>{this.props.message}</h1>
            <h1 style={scoreStyle}>
              Twój wynik: {this.props.score} {resetButton}
            </h1>
          </div>
          <div style={controlsStyle}>
            <Controls handleSelection={this.handleSelection} />
          </div>
          <div style={staveDiv}>
            <Stave
              currentNote={this.props.currentNote}
              currentNoteNo={this.props.currentNoteNumber}
            />
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
    },
    resetScore: () => {
      dispach({
        type: "RESET_SCORE"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
