import { useEffect, useRef, useState } from "react";

export default function Carousel({
  images = [],
  isLoading = false,
  imageLimit = images.length,
  imgPerSlide = 1,
  customPrevButton,
  customNextButton,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(null);
  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);
  const gotoPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const gotoNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  console.log(currentIndex);
  console.log(imgRef?.current?.offsetWidth);
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className="carousel">
      <div className="image-container">
        {images
          .slice(
            0,
            imageLimit > images.length ? images.length : imageLimit.length
          )
          .map((img) => {
            return (
              <img
                ref={imgRef}
                key={img.id}
                src={img.url}
                alt={img.title}
                className="image"
              />
            );
          })}
      </div>
      <button onClick={gotoPrev}>Previos</button>
      <button onClick={gotoNext}>Next</button>
    </div>
  );
}
