import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Controls extends Component {
  render() {
    let btnStyle = {
      margin: "10px"
    };

    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("C");
          }}
        >
          {this.props.solmi ? "DO" : "C"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("D");
          }}
        >
          {this.props.solmi ? "RE" : "D"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("E");
          }}
        >
          {this.props.solmi ? "MI" : "E"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("F");
          }}
        >
          {this.props.solmi ? "FA" : "F"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("G");
          }}
        >
          {this.props.solmi ? "SOL" : "G"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("A");
          }}
        >
          {this.props.solmi ? "LA" : "A"}
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("H");
          }}
        >
          {this.props.solmi ? "SI" : "H"}
        </button>
      </div>
    );
  }
}

export default Controls;
