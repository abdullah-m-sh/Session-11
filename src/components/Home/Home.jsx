import { Helmet } from "react-helmet-async";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
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
};

export default Home;
