import React, { useRef, useState } from "react";
import axios from "axios";
import { Input, Typography, Col, Row } from "antd";
const { TextArea } = Input;

function PatchData() {
  const baseURLPost = "https://jsonplaceholder.typicode.com/posts/1";
  const title = useRef(null);
  const [patchdata, setputData] = useState({});

  function handleTaskinputChange(e) {
    setputData({ ...patchdata, title: e.target.value });
  }

  function handleTaskinputChangeDes(e) {
    setputData({ ...patchdata, description: e.target.value });
  }

  function handleSubmit1(e) {
    e.preventDefault();

    if (patchdata.title || patchdata.description) {
      setputData({ ...patchdata, description: "" });
      updatePut();
    } else {
      console.log("kosong");
    }
  }

  const updatePut = async () => {
    try {
      const responseUP = await axios.patch(baseURLPost, {
        ...patchdata,
      });
      console.log(responseUP);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col className="boxGet" span={24}>
        <form onSubmit={handleSubmit1}>
          <Typography.Text className="judul1">TITLE</Typography.Text>
          <Input
            className="inpt"
            name="title"
            type="text"
            value={patchdata.title}
            onChange={handleTaskinputChange}
          />
          <Typography.Text className="judul1">DESCRIPTION</Typography.Text>
          <TextArea
            className="inpt"
            name="description"
            type="text"
            value={patchdata.description}
            onChange={handleTaskinputChangeDes}
          />
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>
        </form>
      </Col>
    </Row>
  );
}

export default PatchData;
