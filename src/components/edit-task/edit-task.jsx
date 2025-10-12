import React from "react";
import "./edit-task.css";
import { Helmet } from "react-helmet-async";
import { auth } from "../../firebase/confige";
import { useAuthState } from "react-firebase-hooks/auth";
import EditTaskTitleSection from "../../components/edit-task-titleSection/edit-task-titleSection";
import EditTaskSubTasks from "../../components/edit-task-SubTasks/edit-task-SubTasks";
import EditTaskBTNS from "../../components/edit-task-BTNS/edit-task-BTNS";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const [user, loading, error] = useAuthState(auth);
  let { stringId } = useParams();

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

  // ======== On user ========
  if (user) {
    return (
      <div>
        <Helmet>
          <title>edit task page</title>
        </Helmet>

        <div className="edit-task">
          {/* Title */}
          <EditTaskTitleSection user={user} stringId={stringId} />

          {/* Sub-tasks section */}
          <EditTaskSubTasks user={user} stringId={stringId} />

          {/* Add-more BTN && Delete BTN */}
          <EditTaskBTNS user={user} stringId={stringId} />
        </div>
      </div>
    );
  }
};

export default EditTask;
