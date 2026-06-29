import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Slideshow from "../Components/Slideshow";
import logements from "../logements.json";
import { useParams } from "react-router-dom";
const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  return (
    <div className="page">
      <Header />
      <div className="logement-container">
        <Slideshow pictures={logement.pictures} title={logement.title} />
        <h1>{logement.title}</h1>
        <p>{logement.host.name}</p>
        <p>{logement.location}</p>
      </div>

      <Footer />
    </div>
  );
};

export default Logement;
