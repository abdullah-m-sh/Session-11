import React from "react";
import { FaRegEdit } from "react-icons/fa";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../../firebase/confige";
import { useParams } from "react-router-dom";
const EditTaskTitleSection = ({ user , stringId  }) => {
  const [value, loading, error] = useCollection(collection(db, user.uid));
  let {userId } = useParams();
  
  return (
    <div className="EditTaskTitleSection">
      <section className="title center">
        <h1>
          <input
            defaultValue={"Malak abu sharar"}
            className="title-input center"
            type="text"
          />
          <FaRegEdit />
        </h1>
      </section>
    </div>
  );
};

export default EditTaskTitleSection;
