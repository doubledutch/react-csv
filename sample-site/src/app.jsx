import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import Table from './Table.jsx';

const csvHeaders = [
"a", "b", "c"
]
const csvData =[
  ['Alfreds Futterkiste'	,'Maria Anders',	'Germany'] ,
  ['Software hourse', 'Soro' , 'Poland']
];

class App extends React.Component {

  state= {};
  getFileName() {
    if (!this.state.filename) return undefined;
    if (!this.state.filename.endsWith('.csv')) return this.state.filename + '.csv';
    return this.state.filename;
  }
  render() {
    return (
      <div>
          <div ><h1>Pretty Example "React-csv"</h1></div>
          <div>
              <Table headers={csvHeaders} data={csvData} />
          </div>
          <div className="row">
              <div className="large-6 columns"></div>
              <div className="large-4 columns">
                  <input
                    onKeyUp={(e) => this.setState({filename: e.target.value})}
                    type="text" placeholder="File name"/>
              </div>
              <div className="large-2 columns">
                  <CSVLink
                    target="_self"
                    headers={csvHeaders}
                    data={csvData}
                    filename={this.getFileName()}
                    className="btn"
                  >
                    Export to CSV ⬇
                  </CSVLink>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
