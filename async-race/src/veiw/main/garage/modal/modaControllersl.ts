import { getCar } from '../../../../modal/requests';
import { IFinishedCar } from '../../../../types';

export const showModal = async (winner: IFinishedCar ) => {
  const modal = document.querySelector<HTMLElement>(".modal");
  const text = document.querySelector<HTMLElement>(".modal__text");
  if (!modal || !text) return;

  const name = (await getCar( +winner.carId)).name;
  modal.style.display = "flex";
  text.textContent = `Name: ${ name }. Time:${ (winner.time / 1000).toFixed(2) } sec`;
};

export const closeModal = () => {
  const modal = document.querySelector<HTMLElement>(".modal");
  if (modal) modal.style.display = "none";
};
