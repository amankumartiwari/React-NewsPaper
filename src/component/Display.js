import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class Display extends Component {
  render() {
    let BaseFontSize = 15;
    if (this.props.data && this.props.data.score) {
      BaseFontSize += this.props.data.score;
    }
    return (
      <div style={{ borderBlockEnd: "groove" }}>
        <h4
          style={{
            fontSize: `${BaseFontSize.toString(10)}px`,
            fontWeight: "500",
            wordWrap: "break-word"
          }}
        >
          {" "}
          {this.props.data && this.props.data.title
            ? this.props.data.title
            : "Loading..."}{" "}
        </h4>
        <p>
          {this.props.data && this.props.data.text ? (
            <p style={{ fontFamily: "sans-serif", wordWrap: "break-word" }}>
              {ReactHtmlParser(this.props.data.text)}
            </p>
          ) : (
            " "
          )}{" "}
        </p>
      </div>
    );
  }
}

export default Display;
