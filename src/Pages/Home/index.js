import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
