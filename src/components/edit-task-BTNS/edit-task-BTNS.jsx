import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../../firebase/confige";

const EditTaskBTNS = ({ user, stringId }) => {
  const [value, loading, error] = useCollection(collection(db, user.uid));
  return (
    <div className="EditTaskBTNS">
      <section className="center btns mtt">
        <button className="add-more-btn">
          Add more <i className="fa-solid fa-plus"></i>
        </button>

        <div>
          <button className="delete mtt">Delete task</button>
        </div>
      </section>
    </div>
  );
};

export default EditTaskBTNS;
