import React from "react";
import Admin from "./Admin";
import { IoMdCloudUpload } from "react-icons/io";
import { FaBackspace } from "react-icons/fa";
const Editdashboard = () => {
  return (
    <div className="pannel">
      <Admin />
      <div className="form-control-section">
        <form className="editdashboard">
          <div className="form_title mb-3">
            <label className="text-capitalize" for="title">Title</label>
            <input
            className="text-capitalize"
              type="text"
              id="title"
              name="title"
              placeholder="add your title here"
            />
          </div>
          <div className="form_image mb-3">
          <label className="text-capitalize" for="image">Image url</label>
            <input
            className="text-capitalize"
              type="text"
              id="image"
              name="image"
              placeholder="add your Img url here"
            />
          </div>
          <div className="form_description mb-3">
          <label className="text-capitalize" for="image">Description</label>
            <textarea
            className="text-capitalize"
              id="title_description"
              placeholder="enter your description"
            ></textarea>
          </div>
          <div className="editable-buttons">
            <button id="back-button" className="text-capitalize back-button shine-effect" type="button"> <FaBackspace />back</button>
            <button id="upload" className="text-capitalize upload-button shine-effect" type="button"> <IoMdCloudUpload /> upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editdashboard;
