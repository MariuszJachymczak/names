import React from "react";
import "./Button.css";
function Button({ onClick, type, className, children }) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
