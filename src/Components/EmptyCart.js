import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="splash">
      <div className="homeContainer">
        <img
          className="store-name"
          src="https://i.imgur.com/yEvjfK4.png"
          alt="store-name"
        />
        <section className="description">
          <h3>Your cart is empty!</h3>
          <p>
            In the world of endless options, saying "yes to the dress" is as
            easy as clicking a button. Your wedding dress is at the tips of your
            fingers!
          </p>
          <Link to={`/Catalog`}>
            <button className="button btn button-primary">Say yes! →</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default EmptyCart;
