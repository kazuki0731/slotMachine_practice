import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "../styles/Styles";

export const Timer = () => {
  const classes = useStyles();

  return (
    <Box component="div" justfy="center" className={classes.timer}>
      <p className={classes.time}>00:00:000</p>
    </Box>
  );
};
