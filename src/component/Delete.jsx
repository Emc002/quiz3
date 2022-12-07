import React, { useRef, useState } from "react";
import axios from "axios";
import { Input, Typography, Col, Row } from "antd";
const { TextArea } = Input;

function Delete() {
  const title = useRef(null);
  const [deletedata, setDeleteData] = useState({});

  function handleTaskinputChange(e) {
    setDeleteData({ ...deletedata, id: e.target.value });
  }

  function handleSubmit1(e) {
    e.preventDefault();
    console.log(deletedata.id);
    if (deletedata.id) {
      setDeleteData({ ...deletedata, title: "" });
      setDeleteData({ ...deletedata, description: "" });
      deleteApi();
    } else {
      console.log("kosong");
    }
  }

  const deleteApi = async () => {
    try {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${deletedata.id}`)
        .then(() => {
          alert("Post deleted!");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col className="boxGet" span={24}>
        <form onSubmit={handleSubmit1}>
          <Typography.Text className="judul1">PILIH</Typography.Text>
          <Input
            className="inpt"
            name="id"
            type="text"
            value={deletedata.id}
            onChange={handleTaskinputChange}
          />
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>
        </form>
      </Col>
    </Row>
  );
}

export default Delete;
