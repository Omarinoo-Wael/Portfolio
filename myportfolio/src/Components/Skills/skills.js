import Carousel from "react-multi-carousel";
import image from "../../assets/bg.avif";
import ProgressBar from "react-bootstrap/ProgressBar";
import RoundProgressBar from "../roundProgressBar/roundpb";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  large: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  medium: {
    breakpoint: { max: 1200, min: 600 },
    items: 2,
  },
  small: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

function carousel() {
  return (
    <section className="bg">
      <div className="skills-container" id="skills">
        <h1>Skills</h1>
        <h3>Some basic skills I have acquired over the years:</h3>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          <div className="pos">
            <RoundProgressBar percentage={80} skill={"Web Development"} />
          </div>

          <div className="pos">
            <RoundProgressBar percentage={100} skill={"Skill 2"} />
          </div>

          <div className="pos">
            <RoundProgressBar percentage={95} skill={"Skill 3"} />
          </div>

          <div className="pos">
            <RoundProgressBar percentage={72} skill={"Skill 4"} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default carousel;
