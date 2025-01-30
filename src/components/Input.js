import React from "react";
import "../styles/Input.css";

export const Input = () => {
  const handleClick = (e) => {
    
  };
  const handleChange = (e) => {
    if (e.target.value === "") return;

    const file = document.querySelector("input[type=file]").files[0];
    document.getElementById("label-id").innerHTML = file.name;
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload=function(){
      const preview = document.getElementById("previewImg");
      preview.src = reader.result;
      document.getElementById("run").style.display = "block";
      
    };
  };
  return (
    <div className="">
      <div className="input-box">
        <h3 className="">Choose any image: </h3>
        <label htmlFor="file-input" className="input-button" id="label-id">
          Select an Image
        </label>
        <input
          className="fileInput"
          type="file"
          id="file-input"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      <img className="previewImg" id="previewImg" />
      <br />
      <div className="runBox">
        <button
          className="run"
          id="run"
          style={{ display: "none" }}
          onClick={handleClick}
        >
          Run Recognition!
        </button>
      </div>
    </div>
  );
};
