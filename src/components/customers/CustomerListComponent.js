import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CustomerListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      example: "stateVlaue"

    };
  }

  componentDidMount() {

    this.loadListData();

    



  }


  loadListData(){

    fetch(`${process.env.REACT_APP_BASE_URL}/customers`)

      .then(res => res.json())
      .then(json => this.setState({
        loading: false,
        customers: json,
      }));


  }

  delete(id) {
    let ans = window.confirm("Are you sure?");
    if (ans) {
      axios.delete(`${process.env.REACT_APP_BASE_URL}/customers/${id}`)
        .then((result) => {
          this.loadListData();

          //this.props.history.push('/customers');
        });
    }




  }


  render() {


    return (
      <div>
        <h2>Customers</h2>
        <hr></hr>

      
          <div className="text-right">
           
            <Link to="/customers/create"><button className="btn btn-primary">Add New</button></Link>

           
          </div>
          







        <div className="data-list">
          {
            this.state.loading == true ? 'Loading' :

              <table className="table">

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {

                    this.state.customers.map((customer, index) => (

                      <tr key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.first_name}</td>
                        <td>{customer.last_name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.mobile}</td>
                        <td>{customer.createdAt}</td>


                        <td>

                          <Link to={"/customers/" + customer.id} >
                            <button className="btn btn-primary action-btn">Edit</button>
                          </Link>

                          <button className="btn btn-danger" onClick={() => this.delete(customer.id)}>Delete</button>


                        </td>
                      </tr>

                    ))
                  }
                </tbody>
              </table>

          }


        </div>

      </div>
    );
  }


}

export default CustomerListComponent;