import { Helmet } from "react-helmet-async";
import "./Home.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/confige";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Model from "../Model/Model";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const [showModel, setShowModel] = useState("");

  const closeModel = () => {
    setShowModel("");
  };

  // ======== On Loading ========
  if (loading) {
    return (
      <div className="home">
        <div className="content">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  // ======== On Error ========
  if (error) {
    return (
      <div className="home">
        <div className="content">
          <h1>Error: {error.message}</h1>
        </div>
      </div>
    );
  }

  // ======== If No User  ========
  if (!user) {
    return (
      <div className="home">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="content">
          <h2>Welcome to our website</h2>
          <p>
            We offer the best services to meet your needs. Browse the different
            sections and learn more.
          </p>
          <Link to="/SignUp">
            <button className="cta-button">Start now</button>
          </Link>
        </div>
      </div>
    );
  }

  // ======== If User Yse  ========
  if (user) {
    return (
      <div className="home">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="content">
          <h1>
            Welcome{" "}
            <span style={{ textTransform: "capitalize" }}>
              {user.displayName}
            </span>
            ...
          </h1>
          <section className="parent-of-btns mtt flex ">
            <button>Oldest First</button>
            <button>Newest first</button>
            <select id="browers">
              <option value="aa">All tasks</option>
              <option value="aa">Completed</option>
              <option value="aa">Not Completed</option>
            </select>
          </section>
          {/* Show all task */}
          <section className="all-task flex mtt">
            <article dir="auto" className="one-task">
              <Link to="/edit-task">
                <h2>New Task</h2>
                <ul>
                  <li>Sub Task</li>
                  <li>Sub Task</li>
                </ul>
                <p className="time">a day ago</p>
              </Link>
            </article>
          </section>
          {/* Add new task */}
          <section className="mt add-task-btn">
            <button
              onClick={() => {
                setShowModel("show-box-model");
              }}
            >
              Add New Task <FaPlus />
            </button>
          </section>
        </div>
        {showModel && (
          <Model closeModel={closeModel}>
            <div className="task-modal">
              <div className="task-modal-inner">
                <input placeholder="Add title :" type="text" />

                <div className="details-row flex">
                  <input placeholder="details:" type="text" />
                  <button
                    onClick={(eo) => {
                      eo.preventDefault();
                    }}
                    className="add-btn"
                  >
                    add
                  </button>
                </div>

                <button>Submit</button>
              </div>
            </div>
          </Model>
        )}
      </div>
    );
  }
};

export default Home;
