import React, { Component } from 'react';

class Todolist extends Component {

    constructor(props){
        super(props);

          this.state = {
              arr:['Morning Walk','Going to Gym','Client Meeting'],
              textVal:''
          }
    }
        
    


  render() {
    return (
      <div className="App2">

        <header className="App-header">
          <div className="App-title">ToDo List...
            <button type="button" className="btn">
                <i className="fas fa-plus-square"></i>
            </button>
          </div>
        </header>
        
        <div className="MainContent">

            <div className="MainList">
            {
                this.state.arr.map((item,i)=>{
                    return (

                    <div>
                        <i className="fas fa-dot-circle"></i>{}{" "}{item}
                    <hr></hr>
                    </div>
                    
                )
                })
            }
                
            </div>


        </div>

      </div>
    );
  }
}

export default Todolist;