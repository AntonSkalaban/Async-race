import createElement from "../../../helpers/element";

const createModal = () => {
  const modal = createElement("div", "modal");
  const modalHeader = createElement("h2", "modal__header");
  const modalText = createElement("p", "modal__text");

  modalHeader.textContent = "Winner";

  modal.style.position = "absolute";
  modal.style.top = "50%";
  modal.style.left = "50%";

  modal.style.width = "300px";
  modal.style.backgroundColor = "black";

  modal.style.display = "none";
  modal.style.flexDirection = "column";
  modal.style.border = "3px solid white";

  modal.style.color = "white";
  modal.style.alignItems = "center";

  modal.style.marginLeft = "-150px";
  modal.style.marginTop = "-150px";

  modal.appendChild(modalHeader);
  modal.appendChild(modalText);

  return modal;
};

export default createModal;
