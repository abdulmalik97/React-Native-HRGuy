import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => {

  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles= StyleSheet.create({
  containerStyle: {
    borderColor : '#F9F9F9',
    borderWidth: 0,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width :0, height:3},
    shadowOpacity: 0.2,
    borderBottomWidth: 0,
    shadowRadius : 2,
    elevation : 1,
    marginLeft : 5,
    marginRight: 5,
    marginTop: 20,
    justifyContent:'center',




  }
});
export {Card};
