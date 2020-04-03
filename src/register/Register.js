import React from 'react';
import { connect } from "react-redux";
import register from "../actions/index"
import { withRouter } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  return {
    register: userValues => dispatch(register(userValues))
  };
}

class Register extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      userName : "",
      email: "",
      address: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  formValidation() {
    if (this.state.userName.length < 3 || this.state.userName.length > 30) {
      window.alert("Please enter a valid name")
      return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
      window.alert("Please enter a valid email")
      return false;
    }
    if (this.state.address.length < 10 || this.state.address.length > 300) {
      window.alert("Please enter a valid address")
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.formValidation()) {
      this.props.register(this.state);
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <>
      <h4>Register</h4>
      <form role="form" aria-label="Registration form" id="registration-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Name:</label>
          <input aria-label="name" aria-required="true" minLength="3" maxLength="30" required type="text" className="form-control" id="userName" placeholder="Please Enter Name" name="userName" value={this.state.userName} onChange={this.handleInputChange} />
          <div className="invalid-feedback">Please enter valid name</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input required type="email"  aria-label="email" aria-required="true" className="form-control" id="email" placeholder="Please Enter Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          <div className="invalid-feedback">Please enter valid email</div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea minLength="10" maxLength="300" required  aria-label="address" aria-required="true" rows="5" placeholder="Please Enter Address" name="address" id="address" className="form-control" value={this.state.address} onChange={this.handleInputChange} />
          <div className="invalid-feedback">Please enter valid address</div>
        </div>

        <input type="submit" role="button"  aria-label="Submit" className="btn btn-primary" value="Submit" />
      </form>
      </>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Register));
