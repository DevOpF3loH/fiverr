import React from "react";
import "./Slide.scss";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";
import { Carousel } from "antd";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Carousel arrows infinite={true} autoplay={true} className="slider">
          {cards.map((card) => (
            <CatCard key={card.id} item={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
