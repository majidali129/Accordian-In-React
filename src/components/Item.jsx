import { useState } from "react";
import "../custome.css";

const AccordianItem = ({ number, title, text, curOpen, onOpen }) => {
  let isOpen = number === curOpen;

  function handleToogle() {
    onOpen(number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleToogle}>
        {isOpen ? "-" : "+"}
      </p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordianItem;
