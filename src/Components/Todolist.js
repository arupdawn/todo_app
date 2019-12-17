import React, { Component } from 'react';

class Todolist extends Component {

    constructor(props){
        super(props);
        if(localStorage.getItem('toDO')){
            let a=JSON.parse(localStorage.getItem('toDO'));
            this.state = {
                arr:[...a],
                textVal:''
            }
          }
          else{
            this.state = {
                arr:['Morning Walk','Going to Gym','Client Meeting'],
                textVal:''
            }
          }
    }
        
    
    onChangeText(e){
        this.setState({
            textVal:e.target.value
        })
    }
  
    
  
    AddE(e){
      if(e.charCode === 13){
          e.preventDefault();
          let newarr = this.state.arr;
          if(this.state.textVal === ""){
              alert("The list item cannot be blank");
          }
          else{
              newarr.push(this.state.textVal);
          }
  
          this.setState({
              textVal:'',
              arr:[...newarr]
          })
  
          localStorage.setItem('toDO',JSON.stringify(newarr));
      }
    }

  render() {
    var a = localStorage.getItem('toDO');
    var aa= JSON.stringify(a);
    console.log('Data ='+a);
    if(! localStorage.getItem('toDO')){
        localStorage.setItem('toDO',JSON.stringify(this.state.arr));
    }

    return (
      <div className="App2">

        <header className="App-header">
          <div className="App-title">ToDo List...
            <button type="button" className="btn" data-toggle="collapse" 
                data-target={"#copp"}><i className="fas fa-plus-square"></i>
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
                <div id="copp" className="collapse">
                        <i className="fas fa-dot-circle"></i>{" "}{}
                        <input type="text" className="Textbox" value={this.state.textVal} placeholder="Enter your list items"
                        onChange={this.onChangeText.bind(this)} onKeyPress={this.AddE.bind(this)} required/>
                        
                        <hr></hr>
                </div>
            </div>


        </div>

      </div>
    );
  }
}

export default Todolist;