import React from 'react';
import Form from './Form';
import axios from 'axios';

class EditCustomerComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,

    };
  }

  componentDidMount() {


    fetch(`${process.env.REACT_APP_BASE_URL}/customers/${this.props.match.params.id}`)

      .then(res => res.json())
      .then(json => this.setState({
        loading: false,
        customer: json,
      }));



    

    

    //http://localhost:3001/customers/3


    // fetch(`${process.env.REACT_APP_BASE_URL}/customers`)

    //   .then(res => res.json())
    //   .then(json => this.setState({
    //     loading: false,
    //     customer: json,
    //   }));






  }

  handleForm(values) {

   

    axios.patch(`${process.env.REACT_APP_BASE_URL}/customers/${this.props.match.params.id}`, values)
      .then((result) => {

        this.props.history.push('/customers');
      });
  }


  render() {


    return (
      <div>

        <h2>Edit Customer</h2>
        <hr></hr>
        {this.state.loading === true  ?  "Loading" :  <Form addMode="true" handleForm={this.handleForm.bind(this)} customer={this.state.customer}></Form>}
       


        {/* <form>

          <div className="row">

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" className="form-control" id="first_name" placeholder="John" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="email" className="form-control" id="last_name" placeholder="Doe" />
              </div>
            </div>


          </div>

          <div className="row">

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="johndoe@mail.com" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" className="form-control" id="mobile" placeholder="9999999999" />
              </div>
            </div>


          </div>

          <div className="row">


            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="date_of_birth">Date of Birth</label>
                <input type="date" className="form-control" id="date_of_birth" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="text" className="form-control" id="pincode" />
              </div>
            </div>





          </div>

          <div className="row">

            <div className="col-sm-6">
              <div className="form-group">
                <div>
                  <label>Gender</label>
                </div>

                <div className="form-check-inline">
                  <label className="form-check-label"><input type="radio" className="form-check-input" name="gender" />Male</label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label"><input type="radio" className="form-check-input" name="gender" />Female</label>
                </div>


              </div>


            </div>
          </div>


          <div className="row">

            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea className="form-control" id="address" rows={3} defaultValue={""} />
              </div>
            </div>


          </div>

          <div className="row">

          <div className="col-sm-12 text-center">
          <button type="submit" className="btn btn-success">Submit</button>

          </div>
         

          </div>

        </form>


 */}


      </div>
    );
  }


}

export default EditCustomerComponent;