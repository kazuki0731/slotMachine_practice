import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { SlotContext } from "../context/SlotContext";

const useStyles = makeStyles({
  spinButton: {
    display: "block",
    width: "300px",
    height: "50px",
    fontSize: "30px",
    lineHeight: "30px",
    margin: "10px auto",
  },
});

export const SpinButton = () => {
  const classes = useStyles();
  const context = useContext(SlotContext);
  const { onClickStart, startBtnState } = context;
  return (
    <Button
      className={classes.spinButton}
      variant="contained"
      color="secondary"
      onClick={onClickStart}
      disabled={startBtnState}
    >
      SPIN
    </Button>
  );
};
