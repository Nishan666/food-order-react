import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {
  let cssClases = textOnly ? "text-button" : "button";
  cssClases += " " + className;

  return (
    <button {...props} className={cssClases}>
      {children}
    </button>
  );
};

export default Button;
