import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const jobs = [];

function addProducts(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      name: 'Application_Name_ ' + id,
      price: i % 2 === 0 ? true : false
    });
  }
}

addProducts(5);


const selectRowProp = {
  mode: 'checkbox'
};

class App extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default App;