import React, { Component } from 'react';

class divisions extends Component {
    render() {
      return (
        <div className="divisions">
          <header className="divisions-header">
            <form> Select a Division:
              <br></br>
              <select id='division' name='division' label='division'>
                <option value="Pacific">Pacific Division</option>
                <option value="NorthWest">NorthWest Division</option>
                <option value="SouthWest">SouthWest Division</option>
                <option value="Atlantic">Atlantic Division</option>
                <option value="SouthEast">SouthEast Division</option>
                <option value="Centeral">Central Division</option>              
              </select>
            </form>
          </header>
        </div>
      );
    }
  }
  
  export default divisions;