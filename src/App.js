import React from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const Students = [];
const student_name_sel=[];

function addStudents(quantity) {
  const startId = Students.length;
  for (let i = 0; i < quantity; i++) {
    const no = startId + i;
    Students.push({
      no: no,
      name: 'Student_ ' + no,
      sex: i % 2 === 0 ? "female" : "male",
      birthday: no+"/"+1+"2/2001"
    });   
    student_name_sel[i]=''; 
  }
}

addStudents(4);

const options = {
  
};

// If you want to enable deleteRow, you must enable row selection also.
function onRowSelect(row, isSelected, e) {

  if(isSelected)
  {  
    student_name_sel[row.no]=row.name;
  }
  else{
    student_name_sel[row.no]='';
  }
  ///console.log(e);
  console.log(row.no, student_name_sel[row.no]);
}

function onSelectAll(isSelected, rows) {
  
  if (isSelected) for (let i = 0; i < rows.length; i++) student_name_sel[i]="here";  
  else for (let i = 0; i < rows.length; i++) student_name_sel[i]=""; 
       
}

const selectRowProp = {
  mode: 'checkbox',
  bgColor: '#ffeca0',
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

class App extends React.Component {

  constructor(props) {

        super(props);

        this.state = {

             text: ''
        };
  }

  handleClick = (rowKey) => {

        this.setState( {
          
          text: rowKey
          } );
  } 
  render() {
    return (  
      <div>
          <div className='form-inline'>
            { `New name: ` }
            <input placeholder='Input here'
                className='form-control'
                ref='rowKeyInput'
                onChange={ (e) => {
                  this.setState( {
                    text: e.target.value
                  } );
                } }
                value={ this.state.text } />
            { ' ' }
            <button
                className='btn btn-success'

                onClick={ () => {

                  if(this.refs.rowKeyInput.value!==undefined && this.refs.rowKeyInput.value!=='')
                  {
                    
                     for(let i=0; i<student_name_sel.length; i++) if(student_name_sel[i] !== '') Students[i].name=this.refs.rowKeyInput.value;
                  }
                  else alert("Input new name");
                  this.handleClick(this.refs.rowKeyInput.value);

                } }>
                  Change Name
            </button>
            
      </div>


      <div><br></br></div>


      <BootstrapTable 
      ref='table' 
      data={ Students } 
      options={ options }
      hover={true} 
      selectRow={ selectRowProp } >
          <TableHeaderColumn dataField='no' isKey>No</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='sex'>Sex</TableHeaderColumn>
          <TableHeaderColumn dataField='birthday'>Birthday</TableHeaderColumn>
      </BootstrapTable>

      </div>
    );
  }
}
export default App;