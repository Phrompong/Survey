import React, { useState, useEffect } from "react";
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
  const [isloadMore, setIsLoadMore] = useState(false);
  const [data, setData] = useState([
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 1,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 2,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 3,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 4,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 5,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 6,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 7,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 8,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 9,
      detail: "detail",
    },
    {
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: 10,
      detail: "detail",
    },
  ]);
  const [times, setTimes] = useState(0);

  //const data = [];

  useEffect(() => {}, [isloadMore, data]);

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

  function handleScroll(e) {
    const scrollHeight = e.currentTarget.scrollHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const offsetHeight = e.currentTarget.offsetHeight;

    const result = Math.floor(scrollHeight - scrollTop);

    console.log(result);

    if (result >= offsetHeight - 1 && result <= offsetHeight + 1) {
      setIsLoadMore(true);
      console.log("load more");
      setTimeout(() => {
        setData([
          ...data,
          {
            image:
              "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
            title: -1,
            detail: "detail",
          },
          {
            image:
              "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
            title: -1,
            detail: "detail",
          },
          {
            image:
              "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
            title: -1,
            detail: "detail",
          },
          {
            image:
              "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
            title: -1,
            detail: "detail",
          },
          {
            image:
              "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
            title: -1,
            detail: "detail",
          },
        ]);
        setTimes(times + 1);
        setIsLoadMore(false);
      }, 2000);
    }
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
      {isloadMore.toString()} โหลดครั้งที่ : {times.toString()}
      <div
        style={{
          margin: "3%",
          padding: "3%",
          height: "500px",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        <div className="contentStyle">{contents}</div>

        {isloadMore && "Loadmore...."}
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
