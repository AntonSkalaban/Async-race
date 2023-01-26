import { getCar } from './../../../../../../modal/requests';

import { deleteCar, deleteWinner } from "../../../../../../modal/requests";
import createButton from "../../../../../helpers/button";
import createElement from "../../../../../helpers/element";
import { renderGarage } from "../../../../pageRenders";


const createTopRow = (id: string, name: string) => {
  const row = createElement('track__top-row')
  const selectBtn = createButton('select', 'select-car-btn');
  const removeBtn = createButton('remove', 'remove-car-btn');
  const carName = createElement('p', 'car-name')
  carName.textContent = name;
  carName.dataset.id = id;
  selectBtn.dataset.id = id;

  const selectCar = async () => {
    const selectBtns = document.querySelectorAll<HTMLButtonElement>('.select-car-btn');
    const cars = Array.from(document.querySelectorAll<HTMLElement>('.car'));
    const textInput = document.querySelector<HTMLInputElement>('.update-car-name');
    const colorInput = document.querySelector<HTMLInputElement>('.update-car-color');
    if (!textInput || !colorInput || !cars.length) return;

    selectBtns.forEach((btn) => btn.disabled = false);
    selectBtn.disabled = true;

    const color = (await getCar(+id)).color;

    colorInput.value = color;
    textInput.value = String(carName.textContent); 
  }

  const removeCar =() => {
    const page = document.querySelector('.page-title');
    if (!page?.textContent) return;
    const pageNumber = +page.textContent.substring(5);

    deleteCar(id);
    deleteWinner(id);
    renderGarage('garage', pageNumber);
  }

  selectBtn.addEventListener('click', selectCar);
  removeBtn.addEventListener('click', removeCar);

  row.appendChild(selectBtn)
  row.appendChild(removeBtn)
  row.appendChild(carName)


  row.style.height = '25px'
  row.style.display = 'flex'
  carName.style.color = 'white'
  carName.style.margin = '3px'

  return row;
}

export default createTopRow;