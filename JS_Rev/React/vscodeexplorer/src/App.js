import "./App.css";
import React from "react";
import { explorer } from "./json/files";
import Folder from "./components/Folder";
import File from "./components/File";

function App() {
  return (
    <>
      <h1>File Explorer</h1>
      {explorer.map((file) => {
        return (
          <div key={file.id}>
            {file.type === "folder" ? (
            <Folder children={file.children} name={file.name} />
            ) : (
            <File name={file.name} />
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;
