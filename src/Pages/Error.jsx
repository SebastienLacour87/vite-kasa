import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page">
      <Header />
      <div className="error-container">
        <h1>404</h1>
        <p>
          Oups! La page que
          <br className="mobile-break" /> vous demandez n'existe pas.
        </p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
