import createElement from "../helpers/element"
import createGarage from "./garage/garage";
import createWinnerPage from "./winners/winners";

const createMain = () => {
  const main = createElement('div', 'main');
  const garage = createGarage();
  const winners = createWinnerPage()

  main.appendChild(garage);
  main.appendChild(winners);
 
  return main;
}

export default createMain;