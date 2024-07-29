import React from "react";
import Admin from "./Admin";
import { MdAddBox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const Womendashboard = () => {
  return (
    <div className="pannel">
      <Admin />
      <div className="table_section">
        <div className="add-more-item"><button
          type="button"
          className="button text-capitalize add-item-button mb-3 shine-effect"
        >
          <Link className="text-decoration-none text-white" to="/admin/editdashboard"><MdAddBox /> add item </Link>
         
        </button></div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-capitalize">Image</th>
              <th className="text-capitalize">title</th>
              <th className="text-capitalize">price</th>
              <th className="text-capitalize">edit</th>
              <th className="text-capitalize">delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">title</th>
              <th>Pink Full Sleeves </th>
              <th>150</th>
              <th>
                <button
                  type="button"
                  className="button text-capitalize edit-button shine-effect"
                >
                  <MdEdit/> edit 
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="button text-capitalize delete-button shine-effect"
                >
                 <MdDeleteForever/> delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Womendashboard;
