import React from 'react';
//import { Route, IndexRoute, Switch } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import CustomerListComponent from './components/customers/CustomerListComponent';
import AddCustomerComponent from './components/customers/AddCustomerComponent';
import HomeComponent from './components/HomeComponent';
import EditCustomerComponent from './components/customers/EditCustomerComponent';

const Routes = function () {

  return (

    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/customers" component={CustomerListComponent} />
      <Route exact path="/customers/create" component={AddCustomerComponent} />
      <Route exact path="/customers/:id" component={EditCustomerComponent} />
    </Switch>


  );

}


export default Routes;