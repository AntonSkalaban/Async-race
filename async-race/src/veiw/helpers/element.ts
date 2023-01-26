const createElement = (type: string, className?: string, id?: string) => {
  const el = document.createElement(type);
  if (className) el.classList.add(className);
  if (id) el.id = id;
  return el;
}

export default createElement;