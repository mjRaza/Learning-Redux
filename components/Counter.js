import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import {connect} from 'react-redux';
import {increment,decrement} from './redux/ActionCreater';
export class Counter extends Component {
  render() {
    return (
      <View>
          <Button title='ADD' onPress={this.props.increment}></Button> 
          <Text></Text>
          <Button title='SUB' onPress={this.props.decrement}></Button>
          <Text style={{fontSize:30}} >Counter {this.props.counter} </Text>

      </View>
    )
  }
}

const mapStateToProps=(state)=>({
counter : state.counter
})


const mapDispatchToProps=(dispatch)=>
({
    increment:()=>{dispatch(increment())},
    decrement:()=>{dispatch(decrement())},
})


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
