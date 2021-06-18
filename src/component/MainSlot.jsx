import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Slot } from "./Slot";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  container: {
    backgroundColor: "#ecf0f1",
    height: "45vh",
  },
})

export const MainSlot = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className={classes.container}>
          <Slot />
        </Typography>
      </Container>
    </React.Fragment>
  );
};
