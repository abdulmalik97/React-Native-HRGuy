import React   from 'react';
import {Text,View,StyleSheet} from 'react-native' ;

const Header =(props)=> {
  const {container,headerText} = styles;
  return(
    <View style={container}>
      <Text
      style={headerText}>{props.headerText}
      </Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    backgroundColor: "#F9F9F9",
    paddingTop: 10,
    height :60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width : 0 ,height:1},
    shadowOpacity : 0.2,
    shadowRadius : 6,
    shadowColor: '#212020',
    borderRadius : 6,
    elevation : 2,
    position: 'relative'
  },
  headerText: {
    fontSize:22,
    fontWeight : "400"
  },

});
export  {Header} ;
