import React, { Component } from 'react';

import './App.css';
import Notification from "./components/Notification"
class App extends Component {
  render(){
  return (
    <div className="App">

     <Notification hasUnread={false}/>
    
    </div>
  );
}
}

export default App;
