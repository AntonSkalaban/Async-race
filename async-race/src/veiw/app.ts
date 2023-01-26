import createHeader from "./header/header";
import createElement from "./helpers/element"
import createMain from "./main/main";

const createApp = () => {
  const app = createElement('div', 'app');
  const header = createHeader();
  const main = createMain();
  
  app.appendChild(header);
  app.appendChild(main);

  return app;
}

export default createApp;