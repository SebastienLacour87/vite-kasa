import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Card from "../Components/Card";
import logements from "../logements.json";
import bannerImage from "../Assets/images/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <Banner
        image={bannerImage}
        alt="photo d'une côte rocheuse"
        title="Chez vous, partout et ailleurs"
      />
      <div className="logements-list">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
