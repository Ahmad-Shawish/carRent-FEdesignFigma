import { useState } from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const [range, setRange] = useState(50);

  return (
    <div className="sidebar">
      <div className="type">
        <div className="text">
          <span>TYPE</span>
        </div>
        <div className="input">
          <div className="sport">
            <input type="checkbox" name="sport" id="sport" />
            <label htmlFor="sport">Sport</label>
            <span>(10)</span>
          </div>
          <div className="suv">
            <input type="checkbox" name="suv" id="suv" />
            <label htmlFor="suv">SUV</label>
            <span>(12)</span>
          </div>
          <div className="mpv">
            <input type="checkbox" name="mpv" id="mpv" />
            <label htmlFor="mpv">MPV</label>
            <span>(16)</span>
          </div>
          <div className="sedan">
            <input type="checkbox" name="sedan" id="sedan" />
            <label htmlFor="sedan">Sedan</label>
            <span>(20)</span>
          </div>
          <div className="coupe">
            <input type="checkbox" name="coupe" id="coupe" />
            <label htmlFor="coupe">Coupe</label>
            <span>(14)</span>
          </div>
          <div className="hatchback">
            <input type="checkbox" name="hatchback" id="hatchback" />
            <label htmlFor="hatchback">Hatchback</label>
            <span>(14)</span>
          </div>
        </div>
      </div>
      <div className="capacity">
        <div className="text">
          <span>CAPACITY</span>
        </div>
        <div className="input">
          <div className="person2">
            <input type="checkbox" name="person2" id="person2" />
            <label htmlFor="person2">2 Person</label>
            <span>(10)</span>
          </div>
          <div className="person4">
            <input type="checkbox" name="person4" id="person4" />
            <label htmlFor="person4">4 Person</label>
            <span>(14)</span>
          </div>
          <div className="person6">
            <input type="checkbox" name="person6" id="person6" />
            <label htmlFor="person6">6 Person</label>
            <span>(12)</span>
          </div>
          <div className="person8">
            <input type="checkbox" name="person8" id="person8" />
            <label htmlFor="person8">8 or More</label>
            <span>(16)</span>
          </div>
        </div>
      </div>
      <div className="price">
        <div className="text">
          <span>PRICE</span>
        </div>
        <div className="input">
          <div className="pricerange">
            <input
              type="range"
              max={200}
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
            <br />
            <span>Max: </span>
            <span>${range}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
