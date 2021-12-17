import React from "react";
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
  ListInlineItem,
  List,
} from "reactstrap";
const AddCard = (props) => {
  return (
    <Card>
      <CardBody key={props.id}>
        <List type="unstyled">
          <li>{props.text}</li>
          <li>{props.text}</li>
          <li>{props.text}</li>
        </List>
      </CardBody>
    </Card>
  );
};
export default AddCard;
