import { renderWinner } from './../main/pageRenders';
import createButton from "../helpers/button";
import createElement from "../helpers/element"


const createHeader = () => {
  const header = createElement('header', 'header');
  const garageBtn = createButton('To garage', 'garage-btn');
  const winnerBtn = createButton('To winner', 'winner-btn');

  const toggleWindow = (e: Event) => {

    const winner = document.querySelector<HTMLElement>(".winner-page");
    const garage = document.querySelector<HTMLElement>(".garage");
    if (!winner || !garage) return;

    if ((<HTMLElement>e.target)?.classList.contains('garage-btn')) {
      winner.style.display = 'none';
      garage.style.display = 'flex';
    } else {
      winner.style.display = 'flex';
      garage.style.display = 'none';
      renderWinner('winner', 1)
    }
  } 

  garageBtn.addEventListener('click', toggleWindow);
  winnerBtn.addEventListener('click', toggleWindow);

  header.appendChild(garageBtn);
  header.appendChild(winnerBtn);
  return header;
}

export default createHeader;