import React, {Component} from 'react';

import './App.css';
import {ButtonToggle, Form, FormGroup, Input, Label} from "reactstrap";
import {postDecoded, postEncoded} from "./store/actions/actions";
import {connect} from "react-redux";

class App extends Component{
  state={
    encode:'',
    decode:'',
    password:'',
  };
  onChangeHandler = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  };
postEncode = async ()=>{
  await this.props.postEncoded({password:this.state.password,message:this.state.encode});
  this.setState({decode:this.props.encoded,encode:''})
};
postDecode = async ()=>{
  await this.props.postDecoded({password:this.state.password,message:this.state.decode});
  this.setState({encode:this.props.decoded,decode:''})
};
  render() {
    return (
        <div className="App">
          {this.props.loading && <div>Loading...</div>}
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Encoded</Label>
              <Input  value={this.state.encode} onChange={this.onChangeHandler} type="textarea" name="encode" id="exampleEmail" placeholder="Encoded" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input vlue={this.state.password} onChange={this.onChangeHandler}  type="password" name="password" id="examplePassword" placeholder="password " />
              <ButtonToggle disabled={ this.state.password.length < 1} onClick={this.postEncode} color="primary">Encoded</ButtonToggle>{' '}
              <ButtonToggle disabled={ this.state.password.length < 1} onClick={this.postDecode} color="secondary">Decoded</ButtonToggle>{' '}
            </FormGroup>
            <FormGroup>
              <Label for="example">Decode</Label>
              <Input   value={this.state.decode} onChange={this.onChangeHandler}  type="textarea" name="decode" id="example" placeholder="decode" />
            </FormGroup>
          </Form>
        </div>
    );

  }
}
const mapStateToProps =(state)=>{
  return{
    encoded:state.encoded,
    decoded:state.decoded,
    loading: state.loading
  }
};
const mapDispatchToProps = (dispatch)=>{
  return{
    postEncoded: (data)=>dispatch(postEncoded(data)),
    postDecoded: (data)=>dispatch(postDecoded(data))
  }

};
export default connect(mapStateToProps,mapDispatchToProps)  (App);
