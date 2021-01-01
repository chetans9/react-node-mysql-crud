import React from 'react';
import Form from './Form';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class AddCustomerComponent extends React.Component {

  constructor(props) {
    super(props);



    this.state = {
      loading: true,

    };
  }

  componentDidMount() {

  }

  handleForm(values) {

    axios.post(`${process.env.REACT_APP_BASE_URL}/customers`, values)
      .then((result) => {

        this.setState({
          redirect: '/customers'
        });
      });
  }


  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} push />
    }



    return (
      <div>

        <h2>Add Customer</h2>
        <hr></hr>
        <Form addMode="true" handleForm={this.handleForm.bind(this)} customer={{}}></Form>
      </div>
    );
  }


}

export default AddCustomerComponent;