import React ,{Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';

class App extends Component {
  constructor(){
    super();
    this.state={
      homelink:"home"
    }
  }
  onGreet(age) {
    alert(age);
  }
  onChangeLinkName(newName){
    this.setState({
      homelink: newName
    })
  }
  render(){
  const user = {
    name: "Anna",
    hobbies:["sport","movie"]
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <Header homelink={this.state.homelink}/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <Home name={"Max"} 
          initialAge={12} 
          user={user} 
          greet={this.onGreet} 
          changeLink={this.onChangeLinkName.bind(this)}
          initialName={this.state.homelink}/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <h1>hello!!</h1>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
