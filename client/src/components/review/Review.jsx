/* eslint-disable react/prop-types */
import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviewUser", review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="user">
          <img className="pp" src={data.img} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, index) => (
            <ion-icon name="star" key={index}></ion-icon>
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <ion-icon name="thumbs-up"></ion-icon>
        <span>Yes</span>
        <ion-icon name="thumbs-down"></ion-icon>
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
