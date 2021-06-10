import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/Styles";
import Grid from "@material-ui/core/Grid";

export const RunButton = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Grid item>
      <Button className={classes.box} variant="contained" color="default">
        { children }
      </Button>
    </Grid>
  );
};
