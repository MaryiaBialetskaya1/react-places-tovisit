import { useState } from "react";
import { data } from "../../data/data";

export function List() {
  const [places, setPlases] = useState(data);

  const removeEachPlace = (id) => {
    let newPlaces = places.filter((item) => item.id !== id);

    setPlases(newPlaces);
  };

  return (
    <div>
      <div>
        <h1>List of {places.length} places to visit in INDIA</h1>
      </div>
      {places.map((item) => {
        const { id, place, img, imgDescription, placeDescription, sourceLink } =
          item;

        return (
          <div key={id}>
            <div>
              <h1>
                {id}. {place}
              </h1>
            </div>
            <div>
              <img src={img} alt="place" />
            </div>
            <div>
              <p>{imgDescription}</p>
            </div>
            <div>
              <p>{placeDescription}</p>
            </div>
            <div>
              <p>{sourceLink}</p>
            </div>
            <div>
              <button onClick={() => removeEachPlace(id)}>
                Remove this Place
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
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
