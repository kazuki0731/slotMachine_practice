import Image0 from "../img/bell.png";
import Image1 from "../img/cherry.png";
import Image2 from "../img/seven.png";
import { createContext, useState } from "react";
import React from "react";

const IMAGES = [
  {
    imgSrc: Image0,
    isBtn: true,
  },
  {
    imgSrc: Image1,
    isBtn: true,
  },
  {
    imgSrc: Image2,
    isBtn: true,
  },
];

let rest = IMAGES.length;

export const SlotContext = createContext();

export const SlotContextProvider = (props) => {
  const [slotImage, setSlotImage] = useState(IMAGES);
  const [startBtnState, setStartBtnState] = useState(false);
  const onClickStart = () => {
    if (setStartBtnState) {
      setStartBtnState(true);
      IMAGES.forEach((image) => {
        image.isBtn = false;
      });
      setInterval(() => {
        const newArr = IMAGES.map(() => {
          const result =
            IMAGES[Math.floor(Math.random() * IMAGES.length)].imgSrc;
          return {
            imgSrc: result,
            isBtn: false,
          };
        });
        setSlotImage(newArr);
      }, 100);
    }
  };
  const onClickStop = (index) => {
    IMAGES[index].isBtn = true;
    rest --;
    if(rest === 0) {
      setStartBtnState(false);
      rest = IMAGES.length;
    }
  };

  const provide = {
    IMAGES,
    slotImage,
    startBtnState,
    onClickStart,
    onClickStop,
  };

  const { children } = props;
  return (
    <SlotContext.Provider value={provide}>{children}</SlotContext.Provider>
  );
};
