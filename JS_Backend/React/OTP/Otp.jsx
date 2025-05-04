import React from "react";
import { useState } from "react";
import "./Otp.css";
import { useRef } from "react";
import { useEffect } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpInput, setOptInput] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const inputHandler = (e, index) => {
    let key = e.key;
    // setOptInput(e.key);
    if(key === 'ArrowLeft') {
        if(index > 0) ref.current[index - 1].focus();
        return; 
    }

    if(key === 'ArrowRight') {
        if(index < otpLength - 1) ref.current[index + 1].focus();
        return;
    }

    if(key === 'Backspace') {
        let updatedOtp = [...otpInput];
        updatedOtp[index] = "";
        setOptInput(updatedOtp);
        if(index > 0) ref.current[index - 1].focus();
    }

    if(!isNaN(key)) {
        let updatedOtp = [...otpInput];
        updatedOtp[index] = key;
        setOptInput(updatedOtp);
        if(index < otpLength - 1) ref.current[index+1].focus();
        return;
    }
  }

  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <>
      {otpInput.map((value, index) => {
        console.log(value)
        return (
          <input
            key={index}
            value={value}
            type="text"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onKeyDown={(e) => inputHandler(e, index)}
          />
        );
      })}
    </>
  );
};

export default Otp;
