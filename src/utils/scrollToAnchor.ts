import React from "react";

export default (ev: React.MouseEvent, selector: string) => {
  if (ev) {
    ev.preventDefault();
  }  const { anchor, step = 30, interval = 20, paddingTop = 20, } = {
    anchor:  document.querySelector(selector),
    step: 45,
    interval: 1000 / 60,
    paddingTop: 50
  };

  let topCoor = anchor ? anchor.getBoundingClientRect().top - paddingTop : 0;

  const scrollInterval = setInterval(() => {
    let currentStep = topCoor > 0 ? step : -step;
    const finish = topCoor === 0;
    const smallStep =
      topCoor > 0 ? topCoor < currentStep : topCoor > currentStep;

    if (finish) {

      clearInterval(scrollInterval);
      return;
    }

    if (smallStep) {
      currentStep = topCoor;
    }

    topCoor -= currentStep;
    window.scrollBy(0, currentStep);
  }, interval);
};