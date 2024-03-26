import Card from "../../components/Card";
import bg from "/BG.png";
import bg2 from "/BG-2.png";
import mark from "/mark.png";
import mark2 from "/mark 2.png";
import swap from "/swap.png";
import "./home.scss";
import { Link } from "react-router-dom";
import cars from "../../cars.json";

const Home = () => {
  return (
    <div className="home">
      <div className="start">
        <div className="adds">
          <div className="first">
            <div className="textContainer">
              <h1>
                The best platform <br /> for car rental
              </h1>
              <p>
                Ease of doing a car rental safely and <br />
                reliably. Of course at a low price
              </p>
              <button>Rent a Car</button>
            </div>
            <img src={bg} alt="" />
          </div>
          <div className="second">
            <div className="textContainer">
              <h1>
                Easy way to rent a <br /> car at a low price
              </h1>
              <p>
                Providing cheap car rental services <br />
                and safe and comfortable facilities
              </p>
              <button>Rent a Car</button>
            </div>
            <img src={bg2} alt="" />
          </div>
        </div>

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

      <div className="popular">
        <div className="text">
          <p>Popular Cars</p>
          <a href="">View All</a>
        </div>
        <div className="cards">
          <Card car={cars.car1} />
          {/* {console.log("home: ", cars.car1)} */}
          <Card car={cars.car2} />
          <Card car={cars.car3} />
          <Card car={cars.car2} />
        </div>
      </div>

      <div className="recomend">
        <div className="text">
          <p>Recomendation Cars</p>
          {/* <a href="">View All</a> */}
        </div>
        <div className="cards">
          <Card car={cars.car4} />
          <Card car={cars.car5} />
          <Card car={cars.car6} />
          <Card car={cars.car4} />
          <Card car={cars.car7} />
          <Card car={cars.car8} />
          <Card car={cars.car9} />
          <Card car={cars.car8} />
        </div>
      </div>
      <div className="morebtn">
        <Link to="/browse">
          <button>Show more cars</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
