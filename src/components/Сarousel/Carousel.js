import { useState } from "react";
import { data } from "../../data/data";
import s from "./Carousel.module.css";

export function Carousel() {
  const [images, setImages] = useState(0);
  const { img, imgDescription } = data[images];

  return (
    <div className={s.container}>
      <div>
        <button>&larr;</button>
      </div>
      <div>
        <div>
          <img className={s.image} src={img} alt="places" />
        </div>
        <div>
          <p>{imgDescription}</p>
        </div>
      </div>
      <div>
        <button>&rarr;</button>
      </div>
    </div>
  );
}
