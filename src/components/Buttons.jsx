import React from "react";
import Grid from "@material-ui/core/Grid";
import { RunButton } from "./RunButton";



export const Buttons = () => {
  
  return (
    <Grid container justify="center" spacing={3}>
      <RunButton>Start</RunButton>
      <RunButton>Stop</RunButton>
      <RunButton>Reset</RunButton>
    </Grid>
  );
};
