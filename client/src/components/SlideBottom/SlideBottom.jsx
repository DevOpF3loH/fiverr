import React from "react";
import "./SlideBottom.scss";
import { projects } from "../../data";
import ProjectCard from "../projectCard/ProjectCard";
import { Carousel } from "antd";

const SlideBottom = () => {
  return (
    <div className="slide">
      <div className="container">
        <Carousel arrows infinite={true} autoplay={true} className="slider">
          {projects.map((card) => (
            <ProjectCard key={card.id} item={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SlideBottom;
