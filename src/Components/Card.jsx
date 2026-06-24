import { Link } from "react-router-dom";

const Cards = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} />
      <div className="card-overlay"></div>
      <h2>{logement.title}</h2>
    </Link>
  );
};

export default Cards;
