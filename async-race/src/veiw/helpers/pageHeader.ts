import createElement from "./element"
import { createMainTitle, createPageTitle } from "./pageTitles";

const cratePageHeader = (name: string) => {
  const header = createElement('div', `${ name }-header`);
  const mainTitle = createMainTitle(`${ name }-title`);
  const pageTitle = createPageTitle(`${ name }-page-title`);

  header.appendChild(mainTitle);
  header.appendChild(pageTitle);
  return header;
}

export default cratePageHeader;

