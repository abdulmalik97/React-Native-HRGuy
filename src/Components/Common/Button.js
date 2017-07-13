import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const Button = ({text, onPress}) => {
const {buttonStyle, buttonFont}= styles;
  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style= {buttonFont}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles=StyleSheet.create({
  buttonStyle:{
    alignSelf: 'stretch',
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
    borderWidth : 0.5,
    borderColor: '#007aff',
    justifyContent:'center',
    alignItems:'center',
    margin: 10,
    width:100,
    height : 60,
    shadowColor: "#000",
    shadowOffset: {width:0 , height : 2},
    shadowOpacity: 0.2

  },
  buttonFont: {
    fontSize: 17,
    fontWeight: '600',
    alignSelf:'center',
    color: '#007aff',
    borderColor:'rgb(0, 4, 9)',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',


  }
});
export {Button} ;
