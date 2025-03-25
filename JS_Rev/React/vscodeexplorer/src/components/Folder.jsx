import React, { useState } from "react";
import File from "./File";
import "./Folder.css";
import Input from "./Input";

const Folder = ({ children, name }) => {
  let [showChildren, setShowChildren] = useState(false);
  let [icon, setIcon] = useState("+");
  let [showInput, setShowInput] = useState(false);
  let [inputData, setInputData] = useState({
    id: 0,
    name: "",
    type: "",
  });

  function setChildrenDisplayHandler() {
    setShowChildren(!showChildren);
    setIcon(showChildren ? "+" : "-");
  }

  return (
    <>
      <h3 className="folder_name" onClick={setChildrenDisplayHandler}>
        {name}
        <span>
          <button
            onClick={() => {
              setShowInput(!showInput);
              setInputData({
                id: Math.floor(Math.random() * 1000),
                name: "",
                type: "folder",
                children: [],
              });
            }}
          >
            📂
          </button>
          <button
            onClick={() => {
              setShowInput(!showInput);
              setInputData({
                id: Math.floor(Math.random() * 1000),
                name: "",
                type: "file",
              });
            }}
            style={{ marginRight: "10px" }}
          >
            📄
          </button>
          {icon}
        </span>
      </h3>
      <div style={{ display: showInput ? "block" : "none" }}>
        <Input
          setShowInput={setShowInput}
          showInput={showInput}
          setInputData={setInputData}
          inputData={inputData}
          children={children}
        />
      </div>

      <div style={{ display: showChildren ? "block" : "none" }}>
        {children &&
          children.map((file) => {
            return (
              <div key={file.id} style={{ marginLeft: "20px" }}>
                {file.type === "folder" ? (
                  <Folder children={file.children} name={file.name} />
                ) : (
                  <File name={file.name} />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Folder;