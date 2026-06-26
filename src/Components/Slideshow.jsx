import { useState } from "react";

const Slideshow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % pictures.length);
  const goToPrevius = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };
  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={title} />
      {pictures.length > 1 && (
        <span className="slideshow-counter">
          {currentIndex + 1} / {pictures.length}
        </span>
      )}
      {pictures.length > 1 && (
        <>
          <svg
            onClick={() => goToPrevius()}
            width="96"
            height="120"
            viewBox="0 0 96 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517682_94)">
              <path
                d="M70.04 15.4799L62.92 8.3999L23.36 47.9999L62.96 87.5999L70.04 80.5199L37.52 47.9999L70.04 15.4799Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_517682_94">
                <rect width="96" height="119.64" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => goToNext()}
            width="96"
            height="120"
            viewBox="0 0 96 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517682_99)">
              <path
                d="M25.96 80.5199L33.04 87.5999L72.64 47.9999L33.04 8.3999L25.96 15.4799L58.48 47.9999L25.96 80.5199Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_517682_99">
                <rect width="96" height="119.64" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </>
      )}
    </div>
  );
};

export default Slideshow;
