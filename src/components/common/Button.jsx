import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${
    disabled ? "btn-disabled" : ""
  }`.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
