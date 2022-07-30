import Banner from "../../components/Banner";
import BannerBot from "../../components/BannerBot";
import FAQ from "../../components/FAQ";
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
      <BannerBot />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
