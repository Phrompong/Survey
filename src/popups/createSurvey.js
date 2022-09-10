import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Popup = (props) => {
  const { open, close, detail } = props;
  const [inputList, setInputList] = useState([]);

  const { title } = detail || {};

  useEffect(() => {
    setInputList([]);
  }, [close]);

  const addInputList = () => {
    setInputList([
      ...inputList,
      <Form.Control
        style={{ marginBottom: "5%" }}
        type="email"
        placeholder="ตัวเลือก"
      />,
    ]);
  };

  return (
    <>
      <Modal show={open} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>หัวข้อ</Form.Label>
          <Form.Control type="email" placeholder="หัวข้อ" />
          <Form.Label style={{ paddingTop: "5%" }}>โพล์</Form.Label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {inputList}
            <Button onClick={addInputList} variant="outline-secondary">
              + เพิ่มตัวเลือก
            </Button>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
