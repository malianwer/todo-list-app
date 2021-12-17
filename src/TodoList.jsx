import React, { useState } from "react";
import Background from "./back.jpg";
import "./style.css";
import {
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  List,
} from "reactstrap";
import { BsTrash } from "react-icons/bs";
const TodoList = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [records, setRecords] = useState([]);
  const inputHandler = (e) => {
    const { value, name } = e.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setData({ name: "", email: "", address: "" });
  };

  const deleteCard = (id) => {
    console.log({ id });
    setRecords((prevState) => {
      return prevState.filter((arrData) => arrData.id !== id);
    });
  };

  return (
    <>
      <div
        className="main-div"
        style={{
          backgroundImage: "url(" + Background + ")",
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <h1 style={{ color: "#98add8", padding: "30px" }}>
          WELCOME TO THE TODO APP
        </h1>
        <h1> </h1>
        <Form className="main-form">
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={inputHandler}
                  value={data.name}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  className="form-control"
                  placeholder="Enter Your Email "
                  type="text"
                  name="email"
                  onChange={inputHandler}
                  value={data.email}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  placeholder="Enter Your Address "
                  type="text"
                  className="form-control"
                  name="address"
                  onChange={inputHandler}
                  value={data.address}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Button onClick={dataSubmit}>Submit</Button>
              </FormGroup>
            </Col>
          </Row>
          {records.map((record) => {
            return (
              <Card>
                <CardBody key={record.id}>
                  <BsTrash
                    onClick={() => deleteCard(record.id)}
                    color="red"
                    size="20px"
                    cursor="pointer"
                  />
                  <List type="unstyled">
                    <lable style={{ fontWeight: "bold" }}>Name :</lable>
                    <li>{record.name}</li>
                    <lable style={{ fontWeight: "bold" }}>Email :</lable>
                    <li>{record.email}</li>
                    <lable style={{ fontWeight: "bold" }}>Address :</lable>
                    <li>{record.address}</li>
                  </List>
                </CardBody>
              </Card>
            );
          })}
        </Form>
      </div>
    </>
  );
};
export default TodoList;
