import { Col } from "react-bootstrap";
import "./card.css";
function Card({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4} className="proj-card">
      <div className="proj-img">
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default Card;
