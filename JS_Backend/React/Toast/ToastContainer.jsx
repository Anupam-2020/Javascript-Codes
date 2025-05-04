import React, { useEffect, useRef, useState } from "react";
import "./ToastContainer.css";

const ToastContainer = () => {
  const [isVisible, setIsVisible] = useState("hidden");
  const timeoutRef = useRef(null);
  // const [shouldRender, setShouldRender] = useState(false);


  const showToast = () => {
    setIsVisible("show");

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsVisible("hide")
    }, 5000)
  }


  const hideToast = () => {
    setIsVisible("hidden");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }

  useEffect(() => {
    if(isVisible === "hide") {
      let id = setTimeout(() => {
        setIsVisible("hidden")
      }, 990)

      return () => clearTimeout(id)
    }
  },[isVisible])

  return (
    <div>
      {isVisible !==  "hidden" && (
        <div
          className={ `toast_text ${isVisible === "hide" ? 'toast_text_disappear' : 'toast_text_appear'}` }
        >
          <h3 style={{ padding: "0px", margin: "0px" }}>Success</h3>
          <p
            onClick={hideToast}
            style={{ padding: "0px", margin: "0px", cursor: "pointer" }}
          >
            ❌
          </p>
        </div>
      )}
      <button onClick={showToast}>Success Toast</button>
      <button>Error Toast</button>
      <button>Warning Toast</button>
    </div>
  );
};

export default ToastContainer;
