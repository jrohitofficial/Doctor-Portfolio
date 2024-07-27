import React from "react";
import classes from "./button.module.css";

const Button = ({ children, onClick, variant = "primary", className }) => {
  return (
    <button
      className={`${classes["btn"]} ${
        variant === "secondary" ? classes["btn-secondary"] : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
