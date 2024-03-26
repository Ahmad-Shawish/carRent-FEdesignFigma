import "./checkout.scss";
import car from "/image 8.png";
import star from "/ic-actions-star.png";
import mark from "/mark.png";
import mark2 from "/mark 2.png";
import visa from "/Visa.png";
import paypal from "/PayPal.png";
import bitcoin from "/Bitcoin.png";
import safe from "/ic-security-safety.png";
import { useState } from "react";

import cars from "../../cars.json";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const [selectedPayment, selectSelectedPayment] = useState("creditc");

  const handlePaymentChange = (e) => {
    selectSelectedPayment(e.target.value);
  };

  const id = useParams().id;
  const car = cars[`car${id}`];

  return (
    <div className="checkout">
      <div className="formcards">
        <div className="billing">
          <div className="biltxt">
            <div className="left">
              <p>Billing Info</p>
              <span>Please enter your billing info</span>
            </div>
            <div className="right">
              <span>Step 1 of 4</span>
            </div>
          </div>
          <div className="bildata">
            <div className="name">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="phone">
              <label>Phone Number</label>
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="address">
              <label>Adress</label>
              <input type="text" placeholder="Adress" />
            </div>
            <div className="city">
              <label>Town / City</label>
              <input type="text" placeholder="Town or city" />
            </div>
          </div>
        </div>
        <div className="rental">
          <div className="renttxt">
            <div className="left">
              <p>Rental Info</p>
              <span>Please select your rental date</span>
            </div>
            <div className="right">
              <span>Step 2 of 4</span>
            </div>
          </div>
          <div className="rentdata">
            <div className="pickup">
              <div className="pickuplabel">
                <img src={mark} alt="" />
                <p>Pick-Up</p>
              </div>
              <div className="location">
                <label>Location</label>
                <select>
                  <option disabled selected>
                    Select your city
                  </option>
                </select>
              </div>
              <div className="date">
                <label>Date</label>
                <select>
                  <option disabled selected>
                    Select your date
                  </option>
                </select>
              </div>
              <div className="time">
                <label>Time</label>
                <select>
                  <option disabled selected>
                    Select your time
                  </option>
                </select>
              </div>
            </div>
            <div className="dropoff">
              <div className="dropofflabel">
                <img src={mark2} alt="" />
                <p>Drop-Off</p>
              </div>
              <div className="location">
                <label>Location</label>
                <select>
                  <option disabled selected>
                    Select your city
                  </option>
                </select>
              </div>
              <div className="date">
                <label>Date</label>
                <select>
                  <option disabled selected>
                    Select your date
                  </option>
                </select>
              </div>
              <div className="time">
                <label>Time</label>
                <select>
                  <option disabled selected>
                    Select your time
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="paytxt">
            <div className="left">
              <p>Payment Method</p>
              <span>Please enter your payment method</span>
            </div>
            <div className="right">
              <span>Step 3 of 4</span>
            </div>
          </div>
          <div className="paydata">
            <div className="credit">
              <div className="top">
                <div className="wrap">
                  <input
                    type="radio"
                    id="creditc"
                    name="payment"
                    checked={selectedPayment == "creditc"}
                    onChange={handlePaymentChange}
                    value="creditc"
                  />
                  <label htmlFor="creditc">Credit Card</label>
                </div>
                <img src={visa} alt="" />
              </div>
              <div className="bottom">
                <div className="cardnum">
                  <label>Card Number</label>
                  <input type="text" placeholder="Card number" />
                </div>
                <div className="expire">
                  <label>Expiration Date</label>
                  <input type="text" placeholder="DD / MM / YY" />
                </div>
                <div className="cardholder">
                  <label>Card Holder</label>
                  <input type="text" placeholder="Card holder" />
                </div>
                <div className="cvc">
                  <label>CVC</label>
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
            </div>
            <div className="paypal">
              <div className="wrap">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  checked={selectedPayment == "paypal"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
              <img src={paypal} alt="" />
            </div>
            <div className="bitcoin">
              <div className="wrap">
                <input
                  type="radio"
                  id="bitcoin"
                  name="payment"
                  value="bitcoin"
                  checked={selectedPayment == "bitcoin"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="bitcoin">Bitcoin</label>
              </div>
              <img src={bitcoin} alt="" />
            </div>
          </div>
        </div>
        <div className="confirm">
          <div className="contxt">
            <div className="left">
              <p>Confirmation</p>
              <span>
                We are getting to the end. Just few clicks and your rental is
                ready!
              </span>
            </div>
            <div className="right">
              <span>Step 4 of 4</span>
            </div>
          </div>
          <div className="condata">
            <div className="market">
              <input type="checkbox" id="market" />
              <label htmlFor="market">
                I agree with sending a marketing and newsletter emails. No spam,
                promissed!
              </label>
            </div>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree with our terms and conditions and privacy policy
              </label>
            </div>
            <button>Rent Now</button>
            <div className="secure">
              <img src={safe} alt="" />
              <p>All your data are safe</p>
              <span>
                We are using the most advanced security to provide you the best
                experience ever.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="infocard">
        <div className="summary">
          <p>Rental Summary</p>
          <span>
            Prices may change depending on the length of the rental and the
            price of your rental car
          </span>
        </div>
        <div className="img">
          <div className="imgcont">
            <img src={car.img} alt="" />
          </div>
          <div className="type">
            <h4>{car.name}</h4>
            <div className="rating">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <span>440+ Reviewers</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="prices">
          <div className="sub">
            <span>Subtotal</span>
            <p>${car.price}</p>
          </div>
          <div className="tax">
            <span>Tax</span>
            <p>$0</p>
          </div>
        </div>
        <div className="promo">
          <input type="text" placeholder="Apply promo code" />
          <span>Apply Now</span>
        </div>
        <div className="total">
          <div className="txt">
            <p>Total Rental Price</p>
            <span>Overall price and includes rental discount</span>
          </div>
          <div className="ammount">
            <p>${car.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
