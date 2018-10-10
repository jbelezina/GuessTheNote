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
        this.props.setMessageTo("     Brawo!");
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
    let scoreStyle = {
      position: "relative",
      fontFamily: '"Great Vibes", cursive',
      fontSize: "40px",
      float: "right",
      marginTop: "-15%",
      marginRight: "-30%"
    };

    let staveStyle = {
      position: "relative",
      zIndex: "-1",
      top: "-30px",
      left: "20%"
    };

    let messageStyle = {
      position: "relative",
      fontFamily: '"Great Vibes", cursive',
      fontSize: "70px",
      left: "25%",
      marginTop: "20%"
    };

    let controlsStyle = {
      position: "relative",
      marginTop: "5%",
      marginBottom: "10%",
      left: "20%"
    };

    let containerStyle = {
      position: "relative",
      zIndex: "3",
      marginTop: "10vh",
      marginLeft: "30vw",
      marginRight: "30vw"
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
          <i className="fas fa-undo-alt" />
        </button>
      );
    }

    return (
      <div style={containerStyle}>
        <h1 style={scoreStyle}>
          Twój wynik: {this.props.score} {resetButton}
        </h1>

        <h1 style={messageStyle}>{this.props.message}</h1>

        <div style={controlsStyle}>
          <Controls handleSelection={this.handleSelection} />
        </div>

        <div style={staveStyle}>
          <Stave
            currentNote={this.props.currentNote}
            currentNoteNo={this.props.currentNoteNumber}
          />
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
