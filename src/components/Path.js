import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Cell from "./Cell";
import rat from "../assets/images/rat.png";
import cheese from "../assets/images/cheese.png";
import "../App.css";

class Path extends Component {
  pathIdx = 0;
  foundPath = [];

  findPath = () => {
    for (let i = 0; i < 16; i++) {
      this.foundPath.push(0);
    }

    for (let j = 0; j < 16; j++) {
      if (this.props.maze[j] === 0) {
        this.foundPath[j] = 2;
      }
    }

    for (let m = 0; m < this.props.currentPath.length; m++) {
      let x = this.props.currentPath[m][0];
      let y = this.props.currentPath[m][1];
      this.foundPath[4 * x + y] = 1;
    }
  };

  findColor = () => {
    this.pathIdx += 1;
    let result = this.foundPath[this.pathIdx];
    if (result === 2) {
      result = 0;
    } else if (result === 0) {
      result = 2;
    }

    if (this.pathIdx === 14) {
      this.pathIdx = 0;
    }
    return result;
  };

  consolePrint = () => {
    for (let i = 0; i < 16; i++) {
      console.log(i + " " + this.props.currentPath[i]);
    }
  };

  render() {
    this.findPath();
    this.consolePrint();
    return (
      <div className="path">
        <br></br>
        <Grid container spacing={2} justify="center" direction="column">
          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Grid item>
                <Paper style={{ background: "#757575c" }} elevation={3}>
                  <Box padding={2} height={50} width={50} className="cell">
                    <center>
                      <img
                        src={rat}
                        height={75}
                        width={75}
                        vertical-align="middle"
                        alt="rat"
                      />
                    </center>
                  </Box>
                </Paper>
              </Grid>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Grid item>
                <Paper style={{ background: "#757575" }} elevation={3}>
                  <Box padding={2} height={50} width={50} className="cell">
                    <center>
                      <img
                        src={cheese}
                        height={70}
                        width={70}
                        vertical-align="middle"
                        alt="cheese"
                      />
                    </center>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </div>
    );
  }
}

export default Path;
