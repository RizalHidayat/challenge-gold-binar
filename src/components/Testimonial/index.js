import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import data from "./data";
import { useState } from "react";

const Testimonial = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    // dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Testimonial">
      <div className="container-fluid text-center">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div>
        <Slider ref={setSliderRef} {...settings}>
          {!!data.length &&
            data.map((item, index) => (
              <div
                className="card testimonial p-3"
                style={{ width: "50rem" }}
                key={index}
              >
                <div className="row">
                  <div className="col-2">
                    <img src={item.img} width={50} />
                  </div>
                  <div className="col-10">
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
        </Slider>
        <div className=" mt-3 text-center ">
          <ArrowLeftCircleFill
            size={30}
            className=" btn-arrow mx-1"
            onClick={sliderRef?.slickPrev}
          />
          <ArrowRightCircleFill
            size={30}
            color={"#5CB85F"}
            className=" btn-arrow mx-1"
            onClick={sliderRef?.slickNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
