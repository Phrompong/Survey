import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./content.css";
import Popup from "../popups/createSurvey";

const Content = () => {
  const [isShow, setIsShow] = useState(false);
  const [detail, setDetail] = useState(null);

  const data = [
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title1",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title2",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: "title",
      detail: "detail",
    },
  ];

  const contents = [];

  const handleOpenPopup = (detail) => {
    setIsShow(true);
    setDetail(detail);
  };

  for (const obj of data) {
    const { image, title, detail } = obj;

    contents.push(
      <Card
        style={{ margin: "3%", width: "15rem", height: "15rem" }}
        onClick={() => handleOpenPopup({ title })}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "3%" }}>
      <div className="contentButtonCreate">
        <Button
          variant="outline-primary"
          onClick={() => handleOpenPopup({ title: "สร้างแบบสำรวจ" })}
        >
          + สร้างแบบสำรวจ
        </Button>
      </div>
      <div className="contentStyle">{contents}</div>

      <Popup
        open={isShow}
        close={() => {
          setIsShow(false);
        }}
        detail={detail}
      ></Popup>
    </div>
  );
};

export default Content;
