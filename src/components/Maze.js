import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Cell from "./Cell";
import rat from "../assets/images/rat.png";
import cheese from "../assets/images/cheese.png";
import ReactDOM from "react-dom";
import Path from "./Path";
import "../App.css";

class Maze extends Component {
  matrix = [2];
  paths = [];
  idx = 0;
  numPaths = 0;
  pathIdx = 0;

  index = () => {
    this.idx += 1;
    return this.matrix[this.idx];
  };

  findColor = (path) => {
    this.pathIdx += 1;
    let result = path[this.pathIdx];
    if (this.pathIdx === 14) {
      this.pathIdx = 0;
    }
    return result;
  };

  // generate random 16 length matrix with 0,2
  generateMatrix = () => {
    for (let i = 0; i < 14; i++) {
      let val = Math.floor(Math.random() * 4);
      if (val === 0) {
        this.matrix.push(0);
      } else {
        this.matrix.push(2);
      }
    }
    this.matrix.push(2);
  };

  inMaze = (x, y, visited) => {
    // if cell is valid then return true
    return (
      x >= 0 &&
      x < 4 &&
      y >= 0 &&
      y < 4 &&
      this.matrix[x * 4 + y] > 0 &&
      visited[x * 4 + y] === 0
    );
  };
  mazeUtil = (visited, x, y, currentPath) => {
    if (x === 3 && y === 3) {
      this.numPaths += 1;
      this.paths.push([...currentPath]);
      visited[15] = 0;
      return;
    }
    if (!this.inMaze(x, y, visited)) {
      return;
    }

    visited[4 * x + y] = 1;

    currentPath.push([x + 1, y]);
    this.mazeUtil(visited, x + 1, y, currentPath);
    currentPath.pop();

    currentPath.push([x, y + 1]);
    this.mazeUtil(visited, x, y + 1, currentPath);
    currentPath.pop();

    visited[4 * x + y] = 0;
    return;
  };

  calculatePaths = () => {
    let visited = [];
    for (let i = 0; i < 16; i++) {
      visited[i] = 0;
    }

    this.mazeUtil(visited, 0, 0, []);
    return this.paths;
  };

  getNumPaths = () => {
    return (
      <div style={{ color: "white" }}>
        <center>
          <b>Total Paths = {this.numPaths} </b>{" "}
        </center>
      </div>
    );
  };
  findPaths = () => {
    const displayNumPaths = <this.getNumPaths></this.getNumPaths>;
    ReactDOM.render(displayNumPaths, document.getElementById("count"));
    let grids = document.getElementById("routes");

    for (let i = 0; i < this.paths.length; i++) {
      const solutionPath = (
        <Path currentPath={this.paths[i]} maze={this.matrix}></Path>
      );
      const id = Math.random();
      const span = document.createElement("span");
      span.id = id;
      const space = document.createElement("br");
      grids.appendChild(span);
      grids.appendChild(space);
      ReactDOM.render(solutionPath, document.getElementById(id));
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  render() {
    this.matrix = [];
    this.matrix = [2];
    this.generateMatrix();
    this.calculatePaths();
    return (
      <div className="maze">
        <div className="grid">
          <Grid container spacing={2} justify="center" direction="column">
            <p>
              <Grid container spacing={1} justify="center" direction="row">
                <Grid item>
                  <Paper elevation={3}>
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
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
              </Grid>
            </p>
            <p>
              <Grid container spacing={1} justify="center" direction="row">
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
              </Grid>
            </p>
            <p>
              <Grid container spacing={1} justify="center" direction="row">
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
              </Grid>
            </p>

            <p>
              <Grid container spacing={1} justify="center" direction="row">
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Cell N={this.index()} />
                <Grid item>
                  <Paper elevation={3}>
                    <Box padding={2} height={50} width={50} className="cell">
                      <center>
                        <img
                          src={cheese}
                          height={75}
                          width={75}
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
        <center>
          <Button onClick={this.handleClick}>
            <b>Generate new maze</b>
          </Button>
          <Button onClick={this.findPaths}>
            <b>Search paths</b>
          </Button>
        </center>
      </div>
    );
  }
}

export default Maze;
