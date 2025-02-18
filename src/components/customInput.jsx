import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = ({ ref, ...props }) => {
  // react 19 remove forwardRef => ref can be passed as a prop
  // const CustomInput = forwardRef((props, ref) => {

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clear: () => (inputRef.current.value = ""),
    focus: () => inputRef.current.focus(),
  }));
  return <input type="text" ref={inputRef} {...props} />;
};

export default CustomInput;
