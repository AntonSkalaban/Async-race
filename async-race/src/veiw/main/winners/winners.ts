import { createTable } from './table/table';
import createElement from "../../helpers/element";
import createPageBody from "../../helpers/pageBody";
import createPageFooter from "../../helpers/pageFooter";
import cratePageHeader from "../../helpers/pageHeader";
import { renderWinner } from '../pageRenders';


const createWinnerPage = () => {
  const trackPage = createElement("div", "winner-page");
  const trackHeader = cratePageHeader("winner");
  const trackBody = createPageBody("winner");
  const trackFooter = createPageFooter("winner", renderWinner);

  const table = createTable();

  trackPage.appendChild(trackHeader);
  trackPage.appendChild(trackBody);
  trackBody.appendChild(table);
  trackPage.appendChild(trackFooter);

  trackPage.style.display = "none";
  trackPage.style.flexDirection = "column";
  trackPage.style.color = "white";

  return trackPage;
};

export default createWinnerPage;

