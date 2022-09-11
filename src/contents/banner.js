import Carousel from "react-bootstrap/Carousel";
import "./content.css";
const Banner = () => {
  return (
    <Carousel style={{ marginBottom: "6%" }}>
      <Carousel.Item interval={10000000}>
        <img
          //   className="d-block w-50"
          src="https://grp-bpswb-t01.pttgrp.com/UploadFile/Banner/0909202210374520980.jpg"
          alt="First slide"
          width={"100%"}
          height={"400px"}
          style={{ borderRadius: "10px" }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
