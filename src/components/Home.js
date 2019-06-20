import React ,{Component} from 'react';
import ProtoTypes  from "prop-types"

export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.state={
      age: props.initialAge,
      homeLink:props.initialName
    }
  }
  onMakeolder(){
    this.setState({
      age: this.state.age + 1
    })
  }
  handleGreet(){
    this.props.greet(this.state.age)
  }
  OnChangeLink(){
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event){
    this.setState({
      homeLink: event.target.value
    })
  }
  render(){
    //console.log(this.props);
  return (
  <div className="container">
    <div className="row">
      <div className="col-xs-1 col-xs-offset-11">
        <div>name is {this.props.name} , age is {this.state.age} </div>
          <button onClick={()=>{this.onMakeolder()}} className="btn btn-primary"> Make me old </button> 
          <hr />
            <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
            <hr />
            <input type=" " defaultValue={this.props.initialName} value={this.state.initialName} onChange={(event)=>this.onHandleChange(event)}/>
            <button onClick={this.OnChangeLink.bind(this)} className="btn btn-primary">change Header Link</button>
      </div>
    </div>
  </div>
  );
  }
}

Home.ProtoTypes={
name:ProtoTypes.string,
initialAge:ProtoTypes.number,
user:ProtoTypes.object,
children:ProtoTypes.element.isRequired
};