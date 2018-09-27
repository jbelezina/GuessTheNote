import React, { Component } from "react";
import Stave from "./Stave";
import Controls from "./Controls";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      message: "Jaka to nutka?",
      currentNote: null,
      currentNoteNo: null,
      currentSelection: null,
      canGuessFurther: true,
      pitches: [
        "G",
        "A",
        "H",
        "C",
        "D",
        "E",
        "F",
        "G1",
        "A1",
        "H1",
        "C1",
        "D1",
        "E1",
        "F1",
        "G2",
        "A2",
        "H2"
      ]
    };

    this.generateNewNote = this.generateNewNote.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    this.generateNewNote();
  }

  generateNewNote() {
    let randomNo = Math.floor(Math.random() * 17);
    let newNote = this.state.pitches[randomNo];
    console.log("new note: " + newNote + " random no.: " + randomNo);
    this.setState({
      currentNote: newNote,
      currentNoteNo: randomNo,
      message: "Jaka to nutka?",
      currentSelection: null
    });
  }

  handleSelection(guessedNote) {
    if (guessedNote === this.state.currentNote[0]) {
      this.setState({ message: "Brawo!", score: this.state.score + 1, canGuessFurther: false });
      setTimeout(() => {
        this.generateNewNote();
        this.setState({canGuessFurther:true});
      }, 3000);
    } else if (guessedNote !== this.state.currentNote[0]) {
      this.setState({ message: "Spróbuj jeszcze raz" });
    }
  }

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
      fontSize: "30px",
      marginTop: "20px"
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 style={messageStyle}>{this.state.message}</h1>
            <h1 style={scoreStyle}>Twój wynik: {this.state.score}</h1>
          </div>
          <div className="row" style={staveDiv}>
            <Stave
              currentNote={this.state.currentNote}
              currentNoteNo={this.state.currentNoteNo}
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

export default App;
