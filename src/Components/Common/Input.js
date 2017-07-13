import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ text, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const { textStyle, inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        {text}
      </Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: '300',
    paddingLeft: 5,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    fontSize: 15,
    lineHeight: 23,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});

export { Input };
