import React ,{Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';

class App extends Component {
  render(){
  const user = {
    name: "Anna",
    hobbies:["sport","movie"]
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <Header/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <Home name={"Max"} age={"12"} user={user} >
          <p> I'm child. </p>
        </Home> 
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
