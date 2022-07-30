import React from "react";
import { Link } from "react-router-dom";

const CarList = (props) => {
  return (
    <div>
      {!!props.data.length &&
        props.data.map((item) => (
          <div>
            <div>
              <img src={item.image} />
            </div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <Link to={`/detailmobil/${item.id}`}>
                <button>Pilih Mobil</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CarList;
