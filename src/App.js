import React from 'react';
import './App.css';
import HelloWord from './HelloWorld.js';
import RoomMateList from './RoomMateList';
import GitCardList from './GitCard.js';
import GitForm from './GitForm.js';



class App extends React.Component {

state ={

  cards : [
  {
    name: "Ada Nduka Oyom",
    avatar_url:"https://avatars0.githubusercontent.com/u/13289217?v=4",
    company:"FindWorka"
  },
  {
    name: "Israel Chukwuemeka",
    avatar_url:"https://avatars1.githubusercontent.com/u/16913244?v=4",
    company: "Hecc tech"
  },

]

};



  render() { 
      return (
          <div className="App">
         <RoomMateList/>
         <GitForm/>
         <GitCardList cards={this.state.cards}/>
          </div> 
         );
  }
}

export default App;