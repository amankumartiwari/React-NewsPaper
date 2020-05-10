import React, { Component } from "react";
import {  MDBRow, MDBCol } from "mdbreact";
import "./App.css";
import Display from "./component/Display";
import paper from "./images/paper.png";
class App extends Component {
  state = {
    id: [],
    data: [],
  };



  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/askstories.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(result[0]);
          this.setState({
            id: result,
          });
        },
        (error) => {
          console.log(error);
        }
      )
      .then(() => {
        for (var i = 0; i <= 8; i++) {
          // console.log(this.state);
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${this.state.id[i]}.json`,
            {
              method: "GET",
            }
          )
            .then((res) => res.json())
            .then((res) => {
              //console.log(res);
              this.setState((prevState) => ({
                data: [...prevState.data, res],
              }));
            });
        }
      });
  }



  
  render() {
    return (
      <div>
        <h1 className="my-header">
          Daily
          <img
            style={{ margin: "5px 15px" }}
            src={paper}
            height="60px"
            width="80px"
            alt=""
          />
          Worker
        </h1>
        <hr className="adj" />
        <div className="upper">
          <p> Published Daily </p>
          <p> NEW DELHI SUNDAY 10TH MAY </p>
          <p> Price Rs 10 </p>
        </div>
        <hr className="adj" />

        <div className="container-fluid">
          <MDBRow className="container-fluid">
            <MDBCol md="3">
              <div>
                <Display data={this.state.data[0]} />
                <Display data={this.state.data[4]} />
              </div>
            </MDBCol>
            <MDBCol
              style={{ borderRight: "groove", borderLeft: "groove" }}
              md="5"
            >
              <Display data={this.state.data[1]} />
              <MDBRow className="container-fluid">
                <MDBCol md="7" style={{ borderRight: "groove" }}>
                  <Display data={this.state.data[3]} />
                </MDBCol>
                <MDBCol md="5">
                  <Display data={this.state.data[6]} />
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4">
              <Display data={this.state.data[2]} />
              <Display data={this.state.data[5]} />
              <MDBRow className="container-fluid">
                <MDBCol md="6" style={{ borderRight: "groove" }}>
                  <Display data={this.state.data[7]} />
                </MDBCol>
                <MDBCol md="6">
                  <Display data={this.state.data[8]} />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}
export default App;
