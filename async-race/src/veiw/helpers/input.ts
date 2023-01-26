import createElement from "./element";

const createInput = (type: string, className?: string) => {
  const input = <HTMLInputElement>createElement('input', 'input');
  input.type = type;
  if (className) input.classList.add(className);
  return input;
}

export default createInput;