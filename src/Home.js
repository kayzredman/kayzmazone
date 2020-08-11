import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        // src={require("./amazonepix.jpg")}
        alt=""
      />

      {/* Prodcut id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51ySbrzDyiL._AC_US240_FMwebp_QL65_.jpg"
        />
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/81ufrbnPx-L._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/91dwoBmSshL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31tjqEV7OHL._AC_US327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12121"
          title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/41+CXFgQwjL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
