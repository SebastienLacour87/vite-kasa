import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import logements from "../logements.json";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="logements-list">
        {logements.map((logement) => (
          <Cards key={logement.id} logement={logement} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
