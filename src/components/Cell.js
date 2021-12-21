import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import "../App";

const styles1 = {
  paper: {
    background: "#E57373",
  },
};

const styles2 = {
  paper: {
    background: "#757575",
  },
};

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

function Cell(props) {
  if (props.N === 0) {
    return <PurpleCell />;
  } else if (props.N === 1) {
    return <OrangeCell />;
  } else {
    return <WhiteCell />;
  }
}

function WhiteCell() {
  return (
    <Grid item>
      <Paper elevation={3}>
        <Box padding={2} height={50} width={50}></Box>
      </Paper>
    </Grid>
  );
}

function OrangeCell() {
  const classes = useStyles2();
  return (
    <Grid item>
      <Paper className={classes.paper} elevation={3}>
        <Box padding={2} height={50} width={50}></Box>
      </Paper>
    </Grid>
  );
}

function PurpleCell() {
  const classes = useStyles1();
  return (
    <Grid item>
      <Paper className={classes.paper} elevation={3}>
        <Box padding={2} height={50} width={50}></Box>
      </Paper>
    </Grid>
  );
}

export default Cell;
