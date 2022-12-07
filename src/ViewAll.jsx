import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Row, Col } from "antd";
import "./App.css";
import InputPostDataApi from "./component/InputPostDataApi";
import GetDataApi from "./component/GetDataApi";
import PutData from "./component/PutData";
import PatchData from "./component/PatchData";
import Delete from "./component/Delete";

function ViewAll() {
  return (
    <Row gutter={[48, 16]}>
      <Col className="boxGet" span={24}>
        <Typography.Text className="judul">GET DATA</Typography.Text>
        <GetDataApi />
      </Col>
      <Col className="box" span={5}>
        <Typography.Text className="judul">INPUT DATA</Typography.Text>
        <InputPostDataApi />
      </Col>
      <Col className="box" span={5}>
        <Typography.Text className="judul">PUT DATA</Typography.Text>
        <PutData />
      </Col>
      <Col className="box" span={5}>
        <Typography.Text className="judul">PATCH DATA</Typography.Text>
        <PatchData />
      </Col>
      <Col className="box" span={5}>
        <Typography.Text className="judul">PATCH DATA</Typography.Text>
        <Delete />
      </Col>
    </Row>
  );
}

export default ViewAll;
