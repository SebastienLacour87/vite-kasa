import bannerImage from "../Assets/images/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="photo d'une côte rocheuse" />
      <div className="banner-overlay"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
