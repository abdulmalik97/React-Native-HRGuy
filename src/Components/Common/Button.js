import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ text, onPress, style, font }) => {
  const { buttonStyle, buttonFont } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[buttonFont, font]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 122, 255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 100,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonFont: {
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'rgba(0, 122, 255, 0.8)',
    borderColor: 'rgba(0, 4, 9,0.8)',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
export { Button };
