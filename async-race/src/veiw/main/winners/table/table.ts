import createElement from "../../../helpers/element";
import { createTableBody } from "./tableBody";
import { createTableHeader } from "./tableHeader";

export const createTable = () => {
  const table = createElement("div", "table");
  const tHeader = createTableHeader();
  const tBody = createTableBody();

  table.appendChild(tHeader);
  table.appendChild(tBody);
  return table;
};


