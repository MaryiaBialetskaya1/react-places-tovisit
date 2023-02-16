import { useState } from "react";
import { data } from "../../data/data";
import s from "./Carousel.module.css";

export function Carousel() {
  const [images, setImages] = useState(0);
  const { img, imgDescription } = data[images];

  const showPreviousImage = () => {
    setImages((images) => {
      images--;
      if (images < 0) {
        return data.length - 1;
      }
      return images;
    });
  };

  const showNextImage = () => {
    setImages((images) => {
      images++;
      if (images > data.length - 1) {
        images = 0;
      }
      return images;
    });
  };
  return (
    <div className={s.container}>
      <div className={s.previous}>
        <button onClick={showPreviousImage}>&lArr;</button>
      </div>
      <div>
        <div>
          <img className={s.image} src={img} alt="places" />
        </div>
        <div>
          <p>{imgDescription}</p>
        </div>
      </div>
      <div className={s.previous}>
        <button onClick={showNextImage}>&rArr;</button>
      </div>
    </div>
  );
}
