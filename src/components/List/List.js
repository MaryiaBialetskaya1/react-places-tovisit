import { useState } from "react";
import { data } from "../../data/data";
import s from "./List.module.css";

export function List() {
  const [places, setPlases] = useState(data);

  const [showText, setShowMore] = useState(false);
  const showMoreLessText = (element) => {
    element.showMore = !element.showMore;
    setShowMore(!showText);
  };

  const removeEachPlace = (id) => {
    let newPlaces = places.filter((item) => item.id !== id);
    setPlases(newPlaces);
  };

  return (
    <div className={s.page}>
      <div>
        <h1>List of {places.length} places to visit in INDIA</h1>
      </div>
      {places.map((item) => {
        const { id, place, img, imgDescription, placeDescription, showMore } =
          item;

        return (
          <div key={id} className={s.container}>
            <div className={s.gridItem}>
              <h2 className={s.placeHeader}>
                {id}. {place}
              </h2>
            </div>
            <div className={s.gridItem}>
              <div>
                <img className={s.placeImg} src={img} alt="place" />
              </div>
              <div>
                <p className={s.imgDescription}>{imgDescription}</p>
              </div>
            </div>
            <div className={s.gridItem}>
              <p>
                {showMore
                  ? placeDescription
                  : placeDescription.substring(0, 300) + "..."}
                <button
                  className={s.showMoreLessBtn}
                  onClick={() => showMoreLessText(item)}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
            <div className={s.gridItemButton}>
              <button
                className={s.removeEachButton}
                onClick={() => removeEachPlace(id)}
              >
                Remove this Place
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
          className={s.deleteAllButton}
          onClick={() => {
            setPlases([]);
          }}
        >
          Clean List
        </button>
      </div>
    </div>
  );
}
