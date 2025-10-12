import "./AllTask.css";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/confige";

// import Moment from "react-moment";
const AllTask = ({ user }) => {
  const [value, loading, error] = useCollection(collection(db, user.uid));
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


  if (value) {
    return (
      <section className="all-task  mtt">
        {value.docs.map((item , index) => (
          <article key={index} dir="auto" className="one-task">
            <Link to={`/edit-task/${item.data().id}`}>
              <h2>{item.data().title}</h2>
              <ul>
                {item.data().details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className="time">
                a day ago
                {/* <Moment className="pro" fromNow date={item.data().id} /> */}
              </p>
            </Link>
          </article>
        ))}
      </section>
    );
  }
};

export default AllTask;
