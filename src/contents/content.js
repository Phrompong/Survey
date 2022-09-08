import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./content.css";

const Content = () => {
  const data = [
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
    { image: "image", title: "title", detail: "detail" },
  ];

  const contents = [];

  for (const obj of data) {
    const { image, title, detail } = obj;

    contents.push(
      <Card style={{ margin: "3%", width: "15rem", height: "15rem" }}>
        {image}
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return <div className="contentStyle">{contents}</div>;
};

export default Content;
