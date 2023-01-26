import createElement from "../../../helpers/element";
import createCarSetting from "./settingsComponenst/carSetting";
import createTrackSetting from "./settingsComponenst/trackSetting";


const createGarageSettings = () => {
  const block = createElement('div', 'car-maker-container');
  const createCar = createCarSetting('create');
  const updateCar = createCarSetting('update');
  const garageSetting = createTrackSetting()

  block.appendChild(createCar);
  block.appendChild(updateCar);
  block.appendChild(garageSetting);

  return block;
}

export default createGarageSettings;