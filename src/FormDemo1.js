import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };

  onChangeHandler = (event) => {
   // this.setState({ city: event.target.value });   //tek formda doğru ama çokluda aşağıdaki gibi olmalı.
   let name = event.target.name;
   let value = event.target.value;

   this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault(); //default davranış göstermez yani submit olunca sayfa yenilenmez.
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h2>User Form</h2>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h4>User name is {this.state.userName}</h4>

          <h2>City</h2>
          <input name="city" onChange={this.onChangeHandler} type="text"></input>
          <h4>City is {this.state.city}</h4>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
