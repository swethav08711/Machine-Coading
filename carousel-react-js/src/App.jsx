import { useEffect, useState } from "react";

import "./App.css";
import Carousel from "../component/Carousel";

function App() {
  const [loading, setLoading] = useState(false);
  const [imgData, setImgData] = useState([]);
  const fetchImages = async (imageLimit) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imageLimit}`
      );
      const data = await res.json();
      setImgData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);
  console.log(imgData);
  return (
    <div className="carousel-container">
      <Carousel
        images={imgData}
        isLoading={loading}
        // imageLimit={}
        // imgPerSlide={}
        // customPrevButton = {}
        // customNextButton = {}
      />
    </div>
  );
}

export default App;
