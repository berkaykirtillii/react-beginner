import React, { Component } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handlerSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to database!",2);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your e-mail address"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              name="city"
              id="city"
              type="select"
              placeholder="Enter your city"
              onChange={this.onChangeHandler}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Antalya</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              name="description"
              id="description"
              type="textarea"
              placeholder="Enter your description"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
