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
      <Slideshow pictures={logement.pictures} title={logement.title} />
      <Footer />
    </div>
  );
};

export default Logement;
