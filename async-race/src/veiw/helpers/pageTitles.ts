import createElement from "./element"

export const createMainTitle = (className: string) => {
  const pageTitle = createElement('h2', 'main-title');
  pageTitle.classList.add(className);

  pageTitle.style.color = 'white';

  return pageTitle;
}

export const renameMainTitle = (pageTitle: HTMLElement, title: string, counter: string) => {
  pageTitle.textContent = `${ title }(${ counter })`;
}


export const createPageTitle = (className: string) => {
  const pageTitle = createElement('h3', 'page-title');
  pageTitle.classList.add(className);

  pageTitle.style.color = 'white';

  return pageTitle;
}

export const renamePageTitle = (pageTitle: HTMLElement, counter: number) => {
  pageTitle.textContent = `Page#${ counter }`;
}