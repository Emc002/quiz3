import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import "../../src/App.css";

function GetDataApi() {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Row gutter={[48, 24]}>
      {users?.map((users) => (
        <Col span={6}>
          <div className="boxContent">
            <p key={users.id}>{users.name}</p>
            <p key={users.id}>{users.email}</p>
            <p key={users.id}>{users.phone}</p>
            <p key={users.id}>{users.website}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default GetDataApi;
