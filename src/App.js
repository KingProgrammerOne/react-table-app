import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const Students = [];

function addProducts(quantity) {
  const startId = Students.length;
  for (let i = 0; i < quantity; i++) {
    const no = startId + i;
    Students.push({
      no: no,
      name: 'Student_ ' + no,
      sex: i % 2 === 0 ? "female" : "male",
      birthday: no+"/"+1+"2/2001"
    });
  }
}

addProducts(4);

function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}

const options = {
 // afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
 // ,onSelectAll: this.handleSelectAll
};

// const cellEditProp = {
//   mode: 'click'
// };

class App extends React.Component {
  render() {
    return (  
      <BootstrapTable data={ Students } cellEdit={ {mode: 'click', blurToSave: true}} selectRow={ selectRowProp } options={ options }>
          <TableHeaderColumn dataField='no' isKey>No</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='sex'>Sex</TableHeaderColumn>
          <TableHeaderColumn dataField='birthday'>Birthday</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default App;