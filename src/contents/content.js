import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./content.css";
import PopupCreateSurvey from "../popups/createSurvey";
import PopupDisplayResult from "../popups/displayResult";

const Content = () => {
  const [isShowPopupCreateSurvey, setIsShowPopupCreateSurvey] = useState(false);
  const [detail, setDetail] = useState(null);

  const [isShowPopupDisplayResult, setIsShowPopupDisplayResult] =
    useState(false);
  const [detailPopupDisplayResult, setPopupDisplayResult] = useState(null);

  const data = [];

  for (let index = 0; index < 1000; index++) {
    data.push({
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: index,
      detail: "detail",
    });
  }

  const contents = [];

  const handleOpenPopupCreateSurvey = (detail) => {
    setIsShowPopupCreateSurvey(true);
    setDetail(detail);
  };

  const handleOpenPopupShowResult = (detail) => {
    setIsShowPopupDisplayResult(true);
    setPopupDisplayResult(detail);
  };

  for (const obj of data) {
    const { image, title, detail } = obj;

    contents.push(
      <Card
        style={{ margin: "3%" }}
        onClick={() => handleOpenPopupShowResult({ title })}
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
    <>
      <div className="contentButtonCreate">
        <Button
          variant="outline-primary"
          onClick={() =>
            handleOpenPopupCreateSurvey({ title: "สร้างแบบสำรวจ" })
          }
        >
          + สร้างแบบสำรวจ
        </Button>
      </div>
      <div
        style={{
          margin: "3%",
          padding: "3%",
          height: "500px",
          overflow: "auto",
        }}
      >
        <div className="contentStyle">{contents}</div>
      </div>
      {/* Popup display result survey */}
      <PopupDisplayResult
        open={isShowPopupDisplayResult}
        detail={detailPopupDisplayResult}
        close={() => {
          setIsShowPopupDisplayResult(false);
        }}
      ></PopupDisplayResult>
      {/* Popup create survey */}
      <PopupCreateSurvey
        open={isShowPopupCreateSurvey}
        close={() => {
          setIsShowPopupCreateSurvey(false);
        }}
        detail={detail}
      ></PopupCreateSurvey>
    </>
  );
};

export default Content;
