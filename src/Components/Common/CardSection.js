import React from 'react';
import {View,StyleSheet} from 'react-native';

const CardSection =(props) => {
  const {containerStyle} = styles;
  return(
    <View style={[containerStyle,props.style]}>
    {props.children}
    </View>
  );

}
const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#FFFCFC',
    justifyContent : 'center',
    flexDirection: 'row',
    alignItems:'center',
    borderColor: '#ddd',
    position:'relative',

  }
});
export {CardSection};
