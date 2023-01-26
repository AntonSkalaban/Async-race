let requestId: number;

const startAmination = (car: HTMLElement, duration: number) =>{
  const track = document.querySelector<HTMLElement>('.track__middle-row');
  if (!track) return;
  const distance = (track.offsetWidth - 130);

  let startAmination: number;

  requestAnimationFrame(function draw(time) {
    if (!startAmination) startAmination = time;
    const progress = (time - startAmination) / duration;
    const translate = progress * distance;

    car.style.transform = `translateX(${ translate }px)`;

    if (progress < 1) requestId = requestAnimationFrame(draw);
  });
};

export const carStart = (car: HTMLElement, duration: number) => {
  requestId = requestAnimationFrame(() => startAmination(car, duration)); 
}

export const carStop = () => {
  cancelAnimationFrame(requestId);
}

export const returnCar = (car: HTMLElement) => {
  car.style.transform = `translateX(0px)`;
  console.log(car)
}
