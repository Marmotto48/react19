import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}> {pending ? "Logging ..." : "Login"} </button>
  );
};

export default Button;
