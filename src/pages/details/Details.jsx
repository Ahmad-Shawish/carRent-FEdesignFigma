import Sidebar from "../../components/Sidebar";
import "./details.scss";
import usersvg from "/user.svg";
import view1 from "/View 1.png";
import view2 from "/View 2.png";
import view3 from "/View 3.png";
import car from "/image 8.png";
import heart from "/heart.png";
import star from "/ic-actions-star.png";

import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card";

import cars from "../../cars.json";
import { useEffect } from "react";

const Details = () => {
  const id = useParams().id;
  // console.log(cars[`car${id}`]);
  const car = cars[`car${id}`];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="details">
      <div className="side">
        <Sidebar />
      </div>

      <div className="content">
        <div className="info">
          <div className="images">
            <div className="primary">
              <p>
                Sports car with the best <br />
                design and acceleration
              </p>
              <span>
                Safety and comfort while driving a <br />
                futuristic and elegant sports car
              </span>
              <img src={car.img} alt="" />
            </div>
            <div className="secondary">
              <img src={view1} alt="" />
              <img src={view2} alt="" />
              <img src={view3} alt="" />
            </div>
          </div>
          <div className="desc">
            <div className="container">
              <div className="title">
                <div className="name">
                  <div className="top">
                    <h3>{car.name}</h3>
                  </div>
                  <div className="ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <span>440+ Reviewer</span>
                  </div>
                </div>
                <div className="heart">
                  <img src={heart} alt="" />
                </div>
              </div>
              <div className="desctext">
                <p>{car.desc}</p>
              </div>
              <div className="spec">
                <div className="type">
                  <p>Car Type: </p>
                  <span>{car.type}</span>
                </div>
                <div className="cap">
                  <p>Capacity: </p>
                  <span>{car.capacity}</span>
                </div>
                <div className="gear">
                  <p>Gear: </p>
                  <span>{car.gear}</span>
                </div>
                <div className="gas">
                  <p>Gasoline: </p>
                  <span>{car.gasoline}</span>
                </div>
              </div>
              <div className="price">
                <div className="text">
                  <p>${car.price}/</p>
                  <span>days</span>
                </div>
                <div className="btn">
                  <Link to={`/checkout/${car.id}`}>
                    <button>Rent Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="review">
          <div className="start">
            <p>Reviews</p>
            <div className="cont">
              <span>13</span>
            </div>
          </div>
          <div className="mid">
            <div className="review">
              <div className="img">
                <img src={usersvg} alt="" />
              </div>
              <div className="txt">
                <div className="top">
                  <div className="uinfo">
                    <p>Alex Stanton</p>
                    <span>CEO at Lorem</span>
                  </div>
                  <div className="starinfo">
                    <span>21 July 2022</span>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="img">
                <img src={usersvg} alt="" />
              </div>
              <div className="txt">
                <div className="top">
                  <div className="uinfo">
                    <p>Skylar Dias</p>
                    <span>CEO at Lorem</span>
                  </div>
                  <div className="starinfo">
                    <span>20 July 2022</span>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    We are greatly helped by the services of the MORENT
                    Application. Morent has low prices and also a wide variety
                    of cars with good and comfortable facilities. In addition,
                    the service provided by the officers is also very friendly
                    and very polite.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="end">
            <p>
              Show All <span>^</span>
            </p>
          </div>
        </div>

        <div className="recent">
          <div className="text">
            <p>Recent Cars</p>
            <a href="">View All</a>
          </div>
          <div className="cards">
            <Card car={cars.car1} />
            <Card car={cars.car2} />
            <Card car={cars.car3} />
            <Card car={cars.car4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
