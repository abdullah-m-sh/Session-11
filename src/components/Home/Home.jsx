import { Helmet } from "react-helmet-async";
import "./Home.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/confige";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Model from "../Model/Model";

import { doc, setDoc } from "firebase/firestore";
import { MdDone } from "react-icons/md";
import HomeModel from "../HomeModel/HomeModel";
import AllTask from "../AllTask/AllTask";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const [showModel, setShowModel] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [SaveMassage, setSaveMassage] = useState(false);
  const [array, setArray] = useState(["html", "css"]);
  const [modelInput, setModelInput] = useState({
    title: "",
    details: "",
  });

  const closeModel = () => {
    setShowModel(false);
  };
  const titleInput = (e) => {
    setModelInput({ ...modelInput, title: e.target.value });
  };
  const detailsInput = (e) => {
    setModelInput({ ...modelInput, details: e.target.value });
  };
  const addToArray = () => {
    if (!array.includes(modelInput.details)) {
      setArray([...array, modelInput.details]);
    }
    setModelInput({ ...modelInput, details: "" });
  };
  const submitBtn = async (e) => {
    e.preventDefault();
    console.log("wait");
    setShowLoading(true);
    let taskId = new Date().getTime();
    await setDoc(doc(db, user.uid, `${taskId}`), {
      title: modelInput.title,
      details: array,
      id: taskId,
    });
    console.log("done");
    setArray([]);
    setShowLoading(false);
    setShowModel(false);
    setSaveMassage(true);
    setTimeout(() => {
      setSaveMassage(false);
    }, 3000);
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
          <AllTask user={user} />
          {/* Add new task */}
          <section className="mt add-task-btn">
            <button
              onClick={() => {
                // @ts-ignore
                setShowModel("show-box-model");
              }}
            >
              Add New Task <FaPlus />
            </button>
          </section>
        </div>
        {showModel && (
          <HomeModel
            closeModel={closeModel}
            modelInput={modelInput}
            titleInput={titleInput}
            detailsInput={detailsInput}
            addToArray={addToArray}
            array={array}
            submitBtn={submitBtn}
            showLoading={showLoading}
          />
        )}

        <p className={`save-massage ${SaveMassage ? "active" : ""} `}>
          Task added successfully <MdDone />
        </p>
      </div>
    );
  }
};

export default Home;
