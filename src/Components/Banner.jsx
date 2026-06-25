const Banner = ({ image, alt, title, overlayOpacity = 0.6 }) => {
  return (
    <div className="banner">
      <div className="banner-clip">
        <img src={image} alt={alt} />
        <div
          className="banner-overlay"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        >
          {title && <h1>{title}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
