import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

const Detailcar = () => {
  const [car, setCar] = useState({});

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {!!Object.keys(car).length ? (
        <div>
          <img src={car.image} />
          <h1>{car.name}</h1>
          <p>{car.price}</p>
        </div>
      ) : (
        <p>loading</p>
      )}
      <Footer />
    </div>
  );
};

export default Detailcar;
