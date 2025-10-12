import React from 'react';
import { MdDelete } from 'react-icons/md';

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../../firebase/confige";
const EditTaskSubTasks = ({user , stringId}) => {

const [value, loading, error] = useCollection(collection(db, user.uid));
    return (
        <div className='EditTaskSubTasks'>
                 <section className="sub-task mtt">
                        <div className="parent-time">
                          <p className="time">Created: 6 days ago</p>
                          <div>
                            <input id="checkbox" type="checkbox" />
                            <label htmlFor="checkbox">Completed </label>
                          </div>
                        </div>
            
                        <ul>
                          <li className="card-task ">
                            <p> Sub taskk </p>
                            <span className="fa-trash">
                              <MdDelete />
                            </span>
                          </li>
            
                          <li className="card-task">
                            <p> Sub taskk </p>
                            <span className="fa-trash">
                              <MdDelete />
                            </span>
                          </li>
                        </ul>
                      </section>

        </div>
    );
}

export default EditTaskSubTasks;
