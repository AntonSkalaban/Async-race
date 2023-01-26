import { carStart, returnCar, carStop } from './../../../../../../modal/carAnimation';
import { isDrive, startEngine, stopEngine } from './../../../../../../modal/requests';
import changeCarColor from "../../../../../../assets/async-car";
import createButton from "../../../../../helpers/button";
import createElement from "../../../../../helpers/element";
import flag from '../../../../../../assets/flag';

const createMiddleRow = (id: string, color: string) => {
  const row = createElement('div', 'track__middle-row')
  const aBtn = createButton('A', 'b-btn');
  const bBtn = createButton('B', 'a-btn');
  const car = createElement('div','car');
  const finish = createElement('div', 'flag');
  bBtn.disabled = true;

  row.style.position = 'relative'
 
  row.style.borderBottom = 'dashed white'
  car.style.position = 'relative'
  car.style.left = '10px'
  car.style.top = '5px'

  finish.style.position = 'absolute'
  finish.style.right = '45px'
  finish.style.top = '-4px'


  finish.innerHTML = flag;
  car.innerHTML = changeCarColor(color);
  car.dataset.id = id;


  const startRace = async() => {
 
    aBtn.disabled = true;
    bBtn.disabled = false;

    const time = await startEngine(id) * 2;

    carStart(car, time);

    if (!await isDrive(id)) stopEngine(id).then(() => carStop());

  }

  const endRace = () => {
    aBtn.disabled = false;
    bBtn.disabled = true;

    stopEngine(id).then(() => carStop()).then(() => returnCar(car));
  }

  aBtn.addEventListener('click', startRace);
  bBtn.addEventListener('click', endRace);


  row.appendChild(aBtn)
  row.appendChild(bBtn)
  row.appendChild(car)
  row.appendChild(finish)
  
  row.style.display = 'flex';
  return row
}

export default createMiddleRow;