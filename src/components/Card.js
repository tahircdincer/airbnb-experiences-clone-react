import Katie from "../images/katie.jpg";
import Star from "../images/star.png";
import Photography from "../images/photography.jpg";
import Mountain from "../images/mountain.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={Katie} className="card__image" alt=" Katie " />
      <div className="card__rating--area">
        <img src={Star} className="card__star--image" alt=" Star " />
        <span>5.0</span>
        <span>(6) • USA</span>
      </div>
      <div className="card__info">
        <p className="card__description">Life lessons with Katie Zaferes</p>
        <p>
          <span className="card__price">From $136 </span> /person
        </p>
      </div>
    </div>
  );
}
