import { getCar, getCars, getWinners } from "../../modal/requests";
import { ICar, IWinner } from "../../types";
import { renameMainTitle, renamePageTitle } from "../helpers/pageTitles";
import createTrack from "./garage/tracksContiner/carTrack/track";
import { createTableRow } from "./winners/table/tableBody";

const renderPage = (pageName: string, totalItems: number, pageCounter: number, limit: number) => {
  const mainTitle = document.querySelector<HTMLElement>(`.${ pageName }-title`);
  const pageTitle = document.querySelector<HTMLElement>(`.${ pageName }-page-title`);
  const prevBtn = document.querySelector<HTMLButtonElement>(`.${ pageName }-prev-btn`);
  const nextBtn = document.querySelector<HTMLButtonElement>(`.${ pageName }-next-btn`);
  if (!mainTitle || !pageTitle || !prevBtn || !nextBtn) return;
 
  renameMainTitle(mainTitle, pageName.replace(pageName[0], pageName[0].toUpperCase()), 'loading...' );

  nextBtn.disabled = (pageCounter * limit > totalItems) ? true : false;
  prevBtn.disabled = (pageCounter === 1 ) ? true : false;

  renameMainTitle(mainTitle, pageName.replace(pageName[0], pageName[0].toUpperCase()), String(totalItems));
  renamePageTitle(pageTitle, pageCounter);
}
  
export const fillGarage = (page: HTMLElement, cars: Array<ICar>) => {
  page.innerHTML = '';
  cars.forEach(car => {
    const tracsk = createTrack(String(car.id), car.name, car.color);
    page.appendChild(tracsk);
  });
}

const fillWinners = (page: HTMLElement, winners: Array<IWinner>) => {
  page.innerHTML = '';
  winners.forEach(async (winner, index) => {
    const winnerCar = await getCar(winner.id);
    const tableRow = createTableRow(winner, winnerCar, String(index + 1));
    page.appendChild(tableRow);
  });
}

export const renderGarage = async (pageName: string, pageCounter: number) => {
  const pageBody = document.querySelector<HTMLElement>(`.${ pageName }-body`);
  if (!pageBody) return;
  
  const res = await getCars(pageCounter);
  
  renderPage(pageName, res.totalCars, pageCounter, 7);
  
  fillGarage(pageBody, res.cars);
}

export const renderWinner = async (
  pageName: string, pageCounter: number, sort?: string, order?: string
) => {
  const pageBody = document.querySelector<HTMLElement>(`.table-body`);
  if (!pageBody) return;


  const res = await getWinners(pageCounter, sort, order);
  console.log(sort, order, res.winners)
  renderPage(pageName, res.totalWinners, pageCounter, 10);
  fillWinners(pageBody, res.winners);
};

