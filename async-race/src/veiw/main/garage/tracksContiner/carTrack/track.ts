import createElement from "../../../../helpers/element";
import createMiddleRow from "./trackComponents/trackMiddleRow";
import createTopRow from "./trackComponents/trackTopRow";

const createTrack = (id: string, name:string, color: string) => {
  const track = createElement('div', 'track');
  const carTopRow = createTopRow(id, name);
  const middleRow = createMiddleRow(id, color);

  track.appendChild(carTopRow);
  track.appendChild(middleRow);

  track.style.display = 'flex'
  track.style.flexDirection = 'column'
  return track;
}

export default createTrack;

