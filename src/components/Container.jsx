import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../styles/Styles";
import { Timer } from "./Timer";
import { Buttons } from "./Buttons";

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          className={classes.container}
        >
          <Timer />
          <Buttons />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
