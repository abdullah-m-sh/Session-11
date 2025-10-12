import React from "react";
import Model from "../Model/Model";

const HomeModel = ({
  closeModel,
  modelInput,
  titleInput,
  detailsInput,
  addToArray,
  array,
  submitBtn,
  showLoading,
}) => {
  return (
    <Model closeModel={` homeModel ${closeModel}`}>
      <div className="task-modal">
        <div className="task-modal-inner">
          <input
            placeholder="Add title :"
            type="text"
            value={modelInput.title}
            onChange={(e) => titleInput(e)}
          />

          <div className="details-row flex">
            <input
              placeholder="details:"
              type="text"
              value={modelInput.details}
              onChange={(e) => detailsInput(e)}
            />

            <button
              onClick={(eo) => {
                eo.preventDefault();
                if (modelInput.details !== "") {
                  addToArray();
                }
              }}
              className="add-btn"
            >
              add
            </button>
          </div>
          <ul className="list">
            {array.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button
            className="submit-btn"
            onClick={(e) => {
              submitBtn(e);
            }}
          >
            {showLoading ? <div className="my-spinner"></div> : "Submit"}
          </button>
        </div>
      </div>
    </Model>
  );
};

export default HomeModel;
