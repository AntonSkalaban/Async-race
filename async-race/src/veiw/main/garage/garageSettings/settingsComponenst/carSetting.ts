import { createCar, updateCar } from './../../../../../modal/requests';
import createButton from "../../../../helpers/button";
import createElement from "../../../../helpers/element";
import createInput from "../../../../helpers/input";
import { renderGarage } from '../../../pageRenders';


const createCarSetting = (rowName: string) => {
  const row = createElement('div', 'car-maker__car-setting-row');
  const carName = createInput('text', `${ rowName }-car-name`);
  const carColor = createInput('color', `${ rowName }-car-color`);
  const confirmBtn = createButton(rowName, `${ rowName }-car-btn`);

  const confirmHandler = () => {
    const page = document.querySelector('.page-title');
    if (!page?.textContent) return;
    const pageNumber = +page.textContent.substring(5);

    if (rowName === 'create') {
      createCar({ name: carName.value, color: carColor.value});

    } else {
      const selectBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('.select-car-btn'));
      const selectBtn = selectBtns.find((btn) => btn.disabled);
      if (!selectBtn || !selectBtn.dataset.id) return;
      
      updateCar(selectBtn.dataset.id, { name: carName.value, color: carColor.value });
    }
    
    renderGarage('garage',pageNumber);
    carName.value = '';
  }
  

  confirmBtn.addEventListener('click', confirmHandler)

  row.style.display = 'flex';

  row.appendChild(carName);
  row.appendChild(carColor);
  row.appendChild(confirmBtn);
  return row;
}

export default createCarSetting;