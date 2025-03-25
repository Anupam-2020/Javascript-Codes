import React, { useState } from "react";


const Input = ({showInput, setShowInput, setInputData, inputData, children}) => {
    let [input, setInput] = useState("");

    function setInputHandler() {
        console.log(input);
        setInput("");
        setShowInput(false);
        setInputData(input);

        children.push({
            id: inputData.id,
            name: input,
            type: inputData.type,
            children: inputData.children,
        });
    }

  return (
    <div onBlur={setInputHandler}>
      <input
        type="text"
        placeholder="Enter file/folder name"
        value={showInput ? input : ""}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
