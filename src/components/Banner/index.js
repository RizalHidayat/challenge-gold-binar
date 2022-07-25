const Banner = () => {
  return (
    <div className="container-fluid bg-light-green">
      <div className="row landing">
        <div className="col-6 mt-5 left-landing">
          <h2 className="my-5">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h2>
          <p className="mb-4 text-wrap" style={{ width: "32rem" }}>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button type="button" class="btn btn-success">
            Mulai Sewa Mobil
          </button>
        </div>
        <div className="col-6 d-flex align-items-end right-landing">
          <img src="./aset/img_car.png" alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
