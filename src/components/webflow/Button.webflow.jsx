import React from "react";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

const Button = ({
  text = "Click Me",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${
    disabled ? "btn-disabled" : ""
  }`.trim();

  const styles = {
    primary: {
      backgroundColor: "#FF4444",
      color: "#ffffff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.3s ease",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "#000000",
      border: "2px solid #000000",
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.3s ease",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#FF4444",
      border: "2px solid #FF4444",
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.3s ease",
    },
  };

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      style={styles[variant] || styles.primary}
    >
      {text}
    </button>
  );
};

const ButtonComponent = declareComponent(Button, {
  name: "Button",
  description: "A customizable button component for Infinite Creations",
  props: {
    text: props.Text({ name: "Button Text", defaultValue: "Click Me" }),
    variant: props.Variant({
      name: "Variant",
      defaultValue: "primary",
      options: ["primary", "secondary", "outline"],
    }),
    disabled: props.Boolean({ name: "Disabled", defaultValue: false }),
    className: props.Text({ name: "Additional CSS Classes", defaultValue: "" }),
  },
});

export default ButtonComponent;
