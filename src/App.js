import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Person from './Person/Person';
import TwoWayBinding from './TwoWayBinding/TwoWayBinding';

class App extends Component {

  constructor(){
    super();
    this.state = {
      persons : [
        {name : "Angad", title : "Web Developer"},
        {name : "Sandhu", title : "Left Winger"},
        {name : "Dilpreet", title: "Tester" }
      ],
      otherPerson : { name : "Real Madrid" },
      showPersons : false
    }
  }

  changeName = () =>{
    // console.log("CHANGE NAME called");
    // alert("CHANGE NAME called");
    this.setState({
      persons : [
        {name : "Angad Bir Singh Sandhu", title : "Full Stack Developer"},
        {name : "Sandhu", title : "Left Winger at Real Madrid"},
        {name : "Dilpreet", title: "AT&T Testerz" },
        { name: '' , title: ''}
      ]
    })
  }

  clickChangeName = ()=>{
    this.setState ({
      persons : [
        {name : "Angad", title : "Web Developer"},
        {name : "Sandhu", title : "Left Winger"},
        {name : "Dilpreet Sekhon", title: "AT&T Tester" },
        { name:"Cristiano Ronaldo", title:"Best Player in the world" }
      ]
    });
  }


  //This function is triggered when the user types some input and the changes are reflected immediately
  // Two -Way - Binding
  onTyped=(event)=>{
    this.setState ({
      otherPerson:{name:event.target.value}
    });
  }


  toggleShowPersons = ()=>{
    this.setState({
      showPersons : !this.state.showPersons
    });
  }
 



  render() {

    // Define your styles here
   
  


    return ( 

       
      
      <div className="container">
        <div>
          <button className="btn btn-success" onClick={this.toggleShowPersons}>{this.state.showPersons===true?'Hide Persons': 'Show Persons'}</button>
        </div>
        <br />
        {
        this.state.showPersons?  
        <div className="row">
          <Person name={this.state.persons[0].name} title={this.state.persons[0].title}/>
          <Person name={this.state.persons[1].name} title={this.state.persons[1].title}> Jatt Sirra</Person>
          
          <Person name="Dilpreet" title="Tester">
              <h5>About Me</h5>
              <ul>
                <li>From Muktsar</li>
                <li>I love Fortuner</li>
              </ul>
          </Person>
          <Person click={this.clickChangeName} name={this.state.persons[2].name} title={this.state.persons[2].title} typed={this.onTyped}>
            Click here to change the name
          </Person>
          
        </div>:null
        }
        <button type="button" className="btn btn-primary" onClick={this.changeName}>Change Value</button>
        <hr />
        <div className="container">
          <div className="row">
            <TwoWayBinding name={this.state.otherPerson.name} change={this.onTyped}/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
