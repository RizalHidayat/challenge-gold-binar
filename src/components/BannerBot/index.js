import { Link } from "react-router-dom";

const BannerBot = () => {
  return (
    <div
      className="container p-5 my-5 text-center"
      style={{
        backgroundColor: "#0D28A6",
        color: "white",
        borderRadius: "8px",
      }}
    >
      <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
      <p className="text-wrap mx-auto" style={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <Link to={"/carimobil"}>
        <button type="button" class="btn btn-success">
          Mulai Sewa Mobil
        </button>
      </Link>
    </div>
  );
};

export default BannerBot;
