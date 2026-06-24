import bannerImage from "../Assets/images/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-clip">
        <img src={bannerImage} alt="photo d'une côte rocheuse" />
        <div className="banner-overlay">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
