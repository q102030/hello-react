import React ,{Component} from 'react';
import ProtoTypes  from "prop-types"

export default class Home extends Component {
  render(){
    //console.log(this.props);
  return (
  <div className="container">
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <h1>name is {this.props.name} , age is {this.props.age} </h1>
        <h4> hobbies </h4>
        <ul>
          {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby} </li>)}
        </ul>
        <div>{this.props.children}</div>
      </div>
    </div>
  </div>
  );
  }
}

Home.ProtoTypes={
name:ProtoTypes.string,
age:ProtoTypes.number,
user:ProtoTypes.object,
children:ProtoTypes.element.isRequired
};