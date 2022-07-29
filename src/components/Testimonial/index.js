import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import data from "./data";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div id="Testimonial">
      <div className="container text-center">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="container">
        <div>
          <Slider {...settings}>
            <div>
              {!!data.length &&
                data.map((item, index) => (
                  <div className="d-flex">
                    <div className="row border-3 p-2" key={index}>
                      <div className="col-4">
                        <img src={item.img} width={80} />
                      </div>

                      <div className="col-8">
                        <div className="d-flex p-2">
                          <img src={item.star} />
                          <img src={item.star} />
                          <img src={item.star} />
                          <img src={item.star} />
                          <img src={item.star} />
                        </div>
                        <p>{item.text}</p>
                        <p>{item.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Slider>
          <div className="btn-arrow mt-3 text-center ">
            <ArrowLeftCircleFill size={30} className="mx-3" />

            <ArrowRightCircleFill size={30} color={"#5CB85F"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
