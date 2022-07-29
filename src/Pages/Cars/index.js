import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";

const Cars = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSearch = () => {
    const newArr = data.filter((item) => item.name === name);
    setData(newArr);
  };

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const props = {
    handleSearch,
    handleChangeName,
  };
  console.log("data ini adalah", data);
  console.log("data ini adalah nama", name);
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchBar {...props} />
      {!!data.length &&
        data.map((item) => (
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
      <Footer />
    </div>
  );
};

export default Cars;
