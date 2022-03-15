import React from "react";
import "./Modal.css";

export default function Modal({ children, style, setIsModalOpen }) {
  return (
    <div className="modal-wrapper">
      <div
        className="modal-background"
        onClick={() => {
          setIsModalOpen(false);
        }}
      ></div>
      <div className="modal" style={style}>
        {children}
      </div>
    </div>
  );
}
