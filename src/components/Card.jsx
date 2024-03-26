import "./card.scss";
import heart from "/heart.png";
// import car from "/car.png";
import gas from "/gas-station.png";
import gear from "/gear.png";
import ppl from "/profile-2user.png";
import { useNavigate } from "react-router-dom";

const Card = ({ car }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/details/${car.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="cardtext">
        <div className="cardname">
          <h3>{car.name}</h3>
          <span>{car.type}</span>
        </div>
        <div className="cardheart">
          <img src={heart} alt="" />
        </div>
      </div>
      <div className="cardimage">
        <img src={car.img} alt="" />
      </div>
      <div className="cardinfo">
        <div className="cardgas">
          <img src={gas} alt="" />
          <span>{car.gasoline}</span>
        </div>
        <div className="cardgear">
          <img src={gear} alt="" />
          <span>{car.gear}</span>
        </div>
        <div className="cardseats">
          <img src={ppl} alt="" />
          <span>{car.capacity}</span>
        </div>
      </div>
      <div className="cardbuy">
        <div className="cardprice">
          <p>${car.price}/</p>
          <span> day</span>
        </div>
        <div className="cardbutton">
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
