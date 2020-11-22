import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomerListComponent from './components/customers/CustomerListComponent';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading</div>
  </div>
)

function App() {
  return (

    <div className="App">
    
        <Router>
          <Layout></Layout>
        </Router>
     

    </div>



  );
}

export default App;
