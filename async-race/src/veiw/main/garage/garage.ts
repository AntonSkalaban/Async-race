import createElement from "../../helpers/element";
import createGarageSettings from "./garageSettings/gargeSettings";
import createModal from "./modal/modal";
import createTracksContainer from "./tracksContiner/trackPage";

const createGarage = () => {
  const garage = createElement('div', 'garage');

  const carSettings = createGarageSettings();
  const tracksContainer = createTracksContainer();
  const modal = createModal();

  garage.appendChild(carSettings);
  garage.appendChild(tracksContainer);
  garage.appendChild(modal);

  garage.style.display = 'flex';
  garage.style.flexDirection = 'column';

  return garage;
}

export default createGarage;


