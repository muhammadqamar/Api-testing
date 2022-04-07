import React from "react";
import { Card } from "react-bootstrap";

const InfoCard = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div className="info-container">
        <p className="username-para">{data.user.username.slice(0,2).toUpperCase()}</p>
        <p className="name-para">{data.user.name}</p>
      </div>
      <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="title">{data.issue.title}</Card.Title>
          <Card.Subtitle className="description">
            {data.issue.description}
          </Card.Subtitle>
          <Card.Text className="description">{data.issue.title}</Card.Text>
          <Card.Title className="description">{data.spentAt}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;
