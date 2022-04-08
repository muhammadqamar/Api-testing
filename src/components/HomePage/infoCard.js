import React from "react";
import { Card } from "react-bootstrap";

const InfoCard = ({ data }) => {
  return (
    <div className="main-container">
      <a href={data.issue.webUrl} className="user-link" target="_blank">
        <p className="username-para">
          {data.user.username.slice(0, 2).toUpperCase()}
        </p>
      </a>
      <div className="info-container">
        <p className="name-para">{data.user.name}</p>
        <Card>
          <Card.Body>
            <Card.Title className="title">{data.issue.title}</Card.Title>
            <Card.Subtitle className="description">
              {data.issue.description}
            </Card.Subtitle>
            <Card.Title className="date">{data.spentAt}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InfoCard;
