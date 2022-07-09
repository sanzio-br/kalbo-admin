import img1 from "../../imgs/IMG_0142.jpg";
import img2 from "../../imgs/IMG_0146.jpg";
import img3 from "../../imgs/IMG_0173.jpg";
import { Carousel } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
