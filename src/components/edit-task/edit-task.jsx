import React from "react";
import "./edit-task.css";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EditTask = () => {
  return (
    <div>
      <Helmet>
        <title>edit task page</title>
      </Helmet>

      <div className="edit-task">
        {/* Title */}
        <section className="title center">
          <h1>
            <input
              value={"Malak abu sharar"}
              className="title-input center"
              type="text"
            />
            <FaRegEdit />
          </h1>
        </section>

        {/* Sub-tasks section */}
        <section className="sub-task mtt">
          <div className="parent-time">
            <p className="time">Created: 6 days ago</p>
            <div>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Completed </label>
            </div>
          </div>

          <ul>
            <li className="card-task flex">
              <p> Sub taskk </p>
              <span className="fa-trash">
                <MdDelete />
              </span>
            </li>

            <li className="card-task flex">
              <p> Sub taskk </p>
              <span className="fa-trash">
                <MdDelete />
              </span>
            </li>
          </ul>
        </section>

        {/* Add-more BTN && Delete BTN */}

        <section className="center btns mtt">
          <button className="add-more-btn">
            Add more <i className="fa-solid fa-plus"></i>
          </button>

          <div>
            <button className="delete mtt">Delete task</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditTask;
