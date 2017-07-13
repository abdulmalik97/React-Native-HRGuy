import React from 'react';
import {Text,Modal } from 'react-native';
import {CardSection }from './CardSection';
import {Button} from './Button';

const Confirm = ({children,visible,onAccept,onDecline}) => {
  return(
    <Modal
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={()=> {}}
      style={styles.ContainerStyle}
      >
      <CardSection style={styles.CardSectionStyle}>
        <Text style={styles.TextStyle}>
        {children}
        </Text>
      </CardSection>
      <CardSection style={styles.CardSectionStyle}>
        <Button text ="Yes" onPress={onAccept}/>
        <Button text="No" onPress={onDecline}/>
      </CardSection>
    </Modal>
  );
};

const styles={
  ContainerStyle:{
    backgroundColor: 'rgba(0, 0, 0, 1)',
    position: 'relative',
    justifyContent: 'center',
    flex:1,

  },
  TextStyle:{
    fontSize: 18,
    fontWeight: '300',
    opacity: 0.7,
    flex:1,
    lineHeight:30,


  },
  CardSectionStyle:{
    justifyContent:'center',
    flexDirection:'row',

  }
};

export {Confirm};
