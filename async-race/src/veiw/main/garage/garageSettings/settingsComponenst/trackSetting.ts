import { renderGarage } from './../../../pageRenders';
import { closeModal, showModal } from '../../modal/modaControllersl';
import { IFinishedCar } from "./../../../../../types";
import { carStart, returnCar, carStop } from "../../../../../modal/carAnimation";
import {
  carMarks,
  carTypes,
  createCarParams,
  getRandomColor,
  getRandomName,
} from "../../../../../modal/createRandomCar";
import {
  createCar,
  isDrive,
  startEngine,
  stopEngine,
} from "../../../../../modal/requests";

import createButton from "../../../../helpers/button";
import createElement from "../../../../helpers/element";
import { findWinner, updateRecords } from '../../../../../modal/records';


const createTrackSetting = () => {
  const row = createElement("div", "car-maker__garage-setting-row");
  const raseBtn = createButton("race", "rase-btn");
  const resetBtn = createButton("reset", "reset-btn");
  const generateBtn = createButton("generate 100 cars", "generate-btn");

  let isReset = false

  const startRace = async () => {
    const cars = Array.from(document.querySelectorAll<HTMLElement>(".car"));
    const aBtns = document.querySelectorAll<HTMLButtonElement>(".a-btn");
    const bBtns = document.querySelectorAll<HTMLButtonElement>(".b-btn");
    if (!bBtns.length || !aBtns.length) return;

    isReset = false; 

    raseBtn.disabled = true;
    aBtns.forEach((btn) => (btn.disabled = false));
    bBtns.forEach((btn) => (btn.disabled = true));

    const response = await Promise.all(
      cars.map((car) => {
        if (car.dataset.id) return startEngine(car.dataset.id);
      })
    );

    if (!response) return;

    const raceResults = await Promise.all(
      response.map(async (carTime, index) => {
        if (!carTime) return;
        const car = cars[index];
        const time = carTime * 2;

        const carId = car.dataset.id;
        if (!carId) return;

        carStart(car, time);


        if (!(await isDrive(carId))) {
          stopEngine(carId).then(() => carStop());
        } else {
          return { carId, time };
        }
      })
    );
  
    if (!isReset) {
      const finishedCars = raceResults.filter((el) => el) as Array<IFinishedCar>;
      const winner = findWinner(finishedCars);
      showModal(winner);
      setTimeout(closeModal, 4000);
      updateRecords(winner);
    }
  };

  const resetRace = () => {
    const cars = Array.from(document.querySelectorAll<HTMLElement>(".car"));
    const aBtns = document.querySelectorAll<HTMLButtonElement>(".a-btn");
    const bBtns = document.querySelectorAll<HTMLButtonElement>(".b-btn");
    if (!bBtns.length || !aBtns.length) return;

    isReset = true
    raseBtn.disabled = false;
    aBtns.forEach((btn) => (btn.disabled = true));
    bBtns.forEach((btn) => (btn.disabled = false));

    cars.forEach((car, index) => {
      const carId = cars[index].dataset.id;
      if (!carId) return;

      stopEngine(carId).then(() => carStop()).then(() => returnCar(car));
    });
  };

  const generateCars = async () => {
    const page = document.querySelector(".garage-page-title");
    if (!page?.textContent) return;
    const pageNumber = +page.textContent.substring(5);

    for (let i = 0; i < 100; i++) {
      const carParams = createCarParams(
        getRandomName(carMarks, carTypes),
        getRandomColor()
      );
      createCar(carParams);
    }

    renderGarage('garage', pageNumber);
  };

  raseBtn.addEventListener("click", startRace);
  resetBtn.addEventListener("click", resetRace);
  generateBtn.addEventListener("click", generateCars);

  row.style.display = "flex";

  row.appendChild(raseBtn);
  row.appendChild(resetBtn);
  row.appendChild(generateBtn);
  return row;
};

export default createTrackSetting;
