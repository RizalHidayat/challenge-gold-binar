const Service = () => {
  return (
    <div className="container service">
      <div className="row justify-content-center align-item-center">
        <div className="col-6 left-service">
          <img src="./aset/img_service.png" alt="Service" />
        </div>
        <div className="col-6 my-5 ps-5">
          <h4 className="mb-3">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h4>
          <p className="mb-4 text-wrap" style={{ width: "30rem" }}>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className="row">
            <div className="col-1">
              <img src="./aset/check.png" alt="check" width={24} />
            </div>
            <div className="col-11">
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="col-1">
              <img src="./aset/check.png" alt="check" width={24} />
            </div>
            <div className="col-11">
              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="col-1">
              <img src="./aset/check.png" alt="check" width={24} />
            </div>
            <div className="col-11">
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="col-1">
              <img src="./aset/check.png" alt="check" width={24} />
            </div>
            <div className="col-11">
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="col-1">
              <img src="./aset/check.png" alt="check" width={24} />
            </div>
            <div className="col-11">
              <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
