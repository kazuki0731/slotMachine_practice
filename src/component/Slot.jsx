import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { SlotContext } from "../context/SlotContext";

const useStyles = makeStyles({
  slot: {
    marginTop: "30px",
    textAlign: "center",
  },
  images: {
    width: "150px",
    height: "190px",
  },
  stopButton: {
    width: "100px",
    height: "50px",
    fontSize: "18px",
  },
});

export const Slot = () => {
  const classes = useStyles();
  const context = useContext(SlotContext);
  const { slotImage, onClickStop, IMAGES } = context;
  return (
    <div>
      <Grid container justify="center" spacing={3}>
        {IMAGES.map((image, index) => (
          <Grid key={`${index}_img`} item className={classes.slot}>
            <div>
              <img
                className={classes.images}
                src={slotImage[index].imgSrc}
                alt="スロットの画像"
              />
            </div>
            <Button
              key={`${index}_button`}
              className={classes.stopButton}
              variant="contained"
              color="primary"
              onClick={() => onClickStop(index)}
              disabled={image.isBtn}
            >
              stop
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
