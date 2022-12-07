import React, { useRef, useState } from "react";
import axios from "axios";
import { Input, Typography, Col, Row } from "antd";
const { TextArea } = Input;

function InputPostDataApi() {
  const baseURLPost = "https://jsonplaceholder.typicode.com/posts";
  const title = useRef(null);
  const [inputdata, setInputData] = useState({
    title: "",
    description: "",
  });

  function handleTaskinputChange(e) {
    setInputData({ ...inputdata, title: e.target.value });
  }

  function handleTaskinputChangeDes(e) {
    setInputData({ ...inputdata, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (inputdata.title.trim() && inputdata.description.trim()) {
      setInputData({ ...inputdata, title: "" });
      setInputData({ ...inputdata, description: "" });
      createPost();
    } else {
      console.log("kosong");
    }
  }

  const createPost = async () => {
    try {
      const response = await axios.post(baseURLPost, {
        ...inputdata,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col className="boxGet" span={24}>
        <form onSubmit={handleSubmit}>
          <Typography.Text className="judul1">TITLE</Typography.Text>
          <Input
            className="inpt"
            name="title"
            type="text"
            value={inputdata.title}
            onChange={handleTaskinputChange}
          />
          <Typography.Text className="judul1">DESCRIPTION</Typography.Text>
          <TextArea
            className="inpt"
            name="description"
            type="text"
            value={inputdata.description}
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

export default InputPostDataApi;
