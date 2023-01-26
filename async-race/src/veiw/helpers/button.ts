import createElement from "./element";

const createButton = (title: string, className?: string, id?: string) => {
  const btn = <HTMLButtonElement>createElement('button', 'button')
  if(className) btn.classList.add(className);
  if(id) btn.classList.add(id);
  btn.textContent = title;
  return btn;
}

export default createButton;