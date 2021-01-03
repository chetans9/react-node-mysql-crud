import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import querystring from 'query-string';
import Pagination from '../partials/Pagination';
class CustomerListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      example: "stateVlaue",
      searchFirstName: '',
      currentPage : 1,

      customers: []

    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.search = this.search.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    
  }
  
  componentDidMount() {

    this.index();

  }

  componentDidUpdate() {

    //this.index(this.props.location.search);
    // alert();


    // this.index(this.props.location.search);

  }
  /**
   * 
   * @param {*} page 
   */
  handlePageChange(page){

   this.setState({
    currentPage : page
   },function(){
    this.index();
   });



  }

  /**
   * 
   */
  index() {

    fetch(`${process.env.REACT_APP_BASE_URL}/customers?page=${this.state.currentPage}`)
      .then(res => res.json())
      .then(json => this.setState({
        loading: false,
        customers: json.data,
        totalItems : json.totalItems,
        totalPages : json.totalPages,
      }));


  }
  /**
   * 
   * @param {*} id 
   */
  delete(id) {

    if (window.confirm("Are you sure?")) {
      axios.delete(`${process.env.REACT_APP_BASE_URL}/customers/${id}`)
        .then((result) => {
          this.index();

          //this.props.history.push('/customers');
        });
    }
  }

  /**
   * 
   * @param {*} e 
   */
  search(e) {

    e.preventDefault();

    let search = {
      first_name: this.state.searchFirstName,
    }

    let searchStr = '?' + querystring.stringify(search);

    this.props.history.replace({
      pathname: '/customers',
      search: searchStr
    })
    this.index(searchStr);

  }
  /**
   * 
   * @param {*} event 
   */
  handleSearchChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }


  render() {

    return (
      <div>
        <h2>Customers </h2>
        <hr></hr>


        <div className="text-right">

          <Link to="/customers/create"><button className="btn btn-success">Add New</button></Link>


        </div>


        <div id="search-area">
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-5">
                <form method="get" onSubmit={this.search}>
                  <div className="input-group">
                    <input type="text" name="searchFirstName" id="searchFirstName" placeholder="Search customer first name" className="form-control"
                      value={this.state.searchFirstName}
                      onChange={this.handleSearchChange}

                    />
                    <span className="input-group-btn">

                      <button type="submit" name="commit" className="btn btn-primary">Search</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="data-list">
          {
            this.state.loading === true ? 'Loading' :
              <div className="data-items">
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



                <div className="pagination-wrapper">

                  <Pagination currentPage={this.state.currentPage}
                  totalItems = {this.state.totalItems}
                  totalPages = {this.state.totalPages}
                  handlePageChange = {this.handlePageChange}
                  ></Pagination>

                  {/* <ReactPaginate
                  pageCount ={this.state.customers.count}
                  pageRangeDisplayed = {3}
                  marginPagesDisplayed = {3}
                  ></ReactPaginate> */}
                </div>


              </div>









          }

        </div>

      </div>
    );
  }


}

export default CustomerListComponent;