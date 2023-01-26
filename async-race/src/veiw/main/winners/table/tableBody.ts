import changeCarColor from "../../../../assets/async-car";
import { ICar, IWinner } from "../../../../types";
import createElement from "../../../helpers/element";

const createTableBodyCell = (text: string) => {
  const cell = createElement("p", "table-body-cell");
  cell.innerHTML = text;
  cell.style.width = "100px";

  return cell;
};

export const createTableRow = (
  winner: IWinner, winnerCar: ICar, index: string
) => {
  const tableRow = createElement("div", "table-row");

  const rowIndex = createTableBodyCell(index);
  const name = createTableBodyCell(winnerCar.name);
  const carImg = createTableBodyCell(changeCarColor(winnerCar.color));
  const time = createTableBodyCell(String((winner.time / 1000).toFixed(2)));
  const wins = createTableBodyCell(String(winner.wins));

  tableRow.appendChild(rowIndex);
  tableRow.appendChild(name);
  tableRow.appendChild(carImg);
  tableRow.appendChild(time);
  tableRow.appendChild(wins);

  tableRow.style.display = "flex";

  return tableRow;
};

export const createTableBody = () => {
  return createElement("div", "table-body");
};