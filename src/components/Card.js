import Katie from "../images/katie.jpg";
import Star from "../images/star.png";
import Photography from "../images/photography.jpg";
import Mountain from "../images/mountain.png";
export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={Katie} className="card__image" alt={props.name} />
      <div className="card__rating--area">
        <img src={Star} className="card__star--image" alt={props.name} />
        <span> {props.rating} </span>
        <span className="card__rating--count--location">
          {props.ratingCountLocation}
        </span>
      </div>
      <div className="card__info">
        <p className="card__description"> {props.description} </p>
        <p>
          <span className="card__price">From {props.price} </span> / person
        </p>
      </div>
    </div>
  );
}
