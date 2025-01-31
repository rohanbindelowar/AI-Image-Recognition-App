import React from "react";
import axios from "axios";
import "../styles/Input.css";

export const Input = () => {
  const handleChange = (e) => {
    if (e.target.value === "") return;

    const file = document.querySelector("input[type=file]").files[0];
    document.getElementById("label-id").innerHTML = file.name;
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = function () {
      const preview = document.getElementById("previewImg");
      preview.src = reader.result;
      document.getElementById("run").style.display = "block";
    };
  };

  const handleClick = () => {
    document.getElementById("run").innerHTML = "Running...";

    var config = {
      method: "post",
      url: "http://localhost:4001/upload",
      data: {
        image_base64: document.getElementById("previewImg").src,
      },
    };
    axios(config).then((response) => {
      const tagsData = [];
      for (var i = 0; i < response.data.result.tags.length; i++) {
        if (response.data.result.tags[i].confidence > 0.8) {
          tagsData.push(response.data.result.tags[i]);
        }
      }
      this.props.setTags(tagsData);
      document.getElementById("run").style.display = "none";
    }).catch((error) => {
        console.log(error);
    });
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
