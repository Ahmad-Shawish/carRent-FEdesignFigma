import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import "./browse.scss";
import mark from "/mark.png";
import mark2 from "/mark 2.png";
import swap from "/swap.png";
import cars from "../../cars.json";
import { useEffect } from "react";

const Browse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="browse">
      <div className="side">
        <Sidebar />
      </div>

      <div className="content">
        <div className="input">
          <div className="select">
            <div className="pickup">
              <div className="top">
                <img src={mark} alt="" width={16} />
                <p>Pick-Up</p>
              </div>
              <div className="bottom">
                <div className="location">
                  <p>Locations</p>
                  <select name="locations" id="">
                    <option selected disabled>
                      Select your city
                    </option>
                    <option>London</option>
                    <option>Manchester</option>
                  </select>
                </div>
                <hr />
                <div className="Date">
                  <p>Date</p>
                  <input type="date" placeholder="Select your date" />
                </div>
                <hr />
                <div className="Time">
                  <p>Time</p>
                  <input type="time" placeholder="Select your time" />
                </div>
              </div>
            </div>

            <button>
              <img src={swap} alt="" />
            </button>

            <div className="dropoff">
              <div className="top">
                <img src={mark2} alt="" width={16} />
                <p>Drop-Off</p>
              </div>
              <div className="bottom">
                <div className="location">
                  <p>Locations</p>
                  <select name="locations" id="">
                    <option selected disabled>
                      Select your city
                    </option>
                    <option>London</option>
                    <option>Manchester</option>
                  </select>
                </div>
                <hr />
                <div className="Date">
                  <p>Date</p>
                  <input type="date" placeholder="Select your date" />
                </div>
                <hr />
                <div className="Time">
                  <p>Time</p>
                  <input type="time" placeholder="Select your time" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <Card car={cars.car1} />
          <Card car={cars.car2} />
          <Card car={cars.car3} />
          <Card car={cars.car4} />
          <Card car={cars.car5} />
          <Card car={cars.car6} />
          <Card car={cars.car7} />
          <Card car={cars.car8} />
          <Card car={cars.car9} />
          <Card car={cars.car1} />
          <Card car={cars.car5} />
          <Card car={cars.car7} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
