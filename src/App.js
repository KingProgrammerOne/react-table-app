import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
var products = [{
  id: 1,
  name: "Product1",
  price: 120
}, {
  id: 2,
  name: "Product2",
  price: 80
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapTable data={products} version='4'>
          <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
