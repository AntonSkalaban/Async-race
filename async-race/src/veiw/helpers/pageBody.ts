import createElement from "./element"

const createPageBody = (name: string) => {
  const body = createElement('div', `${ name }-body`);
 
  return body;
}

export default createPageBody;

