import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
      {props.children}
    </Button>
  );
}