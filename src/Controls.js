import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Controls extends Component {
  constructor() {
    super();
  }

  render() {
    let style = {
      position: "absolute",
      top: "600px",
      left: "35vw"
    };

    let btnStyle = {
      margin: "10px"
    };

    return (
      <div style={style}>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("C");
          }}
        >
          C
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("D");
          }}
        >
          D
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("E");
          }}
        >
          E
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("F");
          }}
        >
          F
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("G");
          }}
        >
          G
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("A");
          }}
        >
          A
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={btnStyle}
          onClick={() => {
            this.props.handleSelection("H");
          }}
        >
          H
        </button>
      </div>
    );
  }
}

export default Controls;
