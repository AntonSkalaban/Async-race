import { IFinishedCar } from "../types";
import { createWinner, getWinners, updateWinner } from "./requests";

export const findWinner = (arr: Array<IFinishedCar>) => {
  return arr.sort((a, b) => a.time - b.time)[0];
}

export const updateRecords = async (newWinner: IFinishedCar) => {
  const winners = (await getWinners()).winners;
  const prevResult = winners.find((winner) => winner.id === +newWinner.carId);
  if (prevResult) {
    updateWinner(newWinner.carId, { wins: prevResult.wins + 1, time: Math.min(prevResult.time, newWinner.time) });
  } else {
    createWinner({ id: +newWinner.carId, wins: 1, time: newWinner.time })
  }
}