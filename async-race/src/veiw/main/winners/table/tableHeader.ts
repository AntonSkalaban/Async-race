import { renderWinner } from './../../pageRenders';
import createElement from "../../../helpers/element";

const createTableHeaderCell = (text: string) => {
  const cell = createElement("p", "table-header__cell");
  cell.textContent = text;
  cell.style.width = "100px";
  cell.style.fontWeight = "500";
  return cell;
};

export const createTableHeader = () => {
  const tableHeader = createElement("div", "tableHeader");

  const number = createTableHeaderCell("number");
  const name = createTableHeaderCell("name");
  const img = createTableHeaderCell("img");
  const time = createTableHeaderCell("time (sec)");
  const wins = createTableHeaderCell("wins");

  const sortTable = (e: Event) => {
    const page = document.querySelector(".winner-page-title");
    const el = <HTMLElement>e.target;
    if ( !page?.textContent || !el?.textContent) return;
    const text = el.textContent;

    const pageNumber = +page.textContent.substring(5);

    if (text.includes(String.fromCharCode(8593))) {
      el.textContent = `${text.substring(0, text.length-1)} ${String.fromCharCode(8595)}`;
      renderWinner('winner', pageNumber, text.split(' ')[0], 'ACS');

    } else if (text.includes(String.fromCharCode(8595))){
      el.textContent = `${ text.substring(0, text.length-1)} ${String.fromCharCode(8593)}`;
      renderWinner('winner', pageNumber, text.split(' ')[0], 'DESC');

    } else {
      el.textContent += ` ${String.fromCharCode(8595)}`;
      renderWinner('winner', pageNumber, text.split(' ')[0], 'ACS');
    }
  }
 

  time.addEventListener('click', sortTable);
  wins.addEventListener('click', sortTable);

  tableHeader.appendChild(number);
  tableHeader.appendChild(name);
  tableHeader.appendChild(img);
  tableHeader.appendChild(time);
  tableHeader.appendChild(wins);

  tableHeader.style.display = "flex";

  return tableHeader;
};
