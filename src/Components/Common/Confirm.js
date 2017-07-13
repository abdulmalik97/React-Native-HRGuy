import React from 'react';
import { Text, Modal, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) =>
  (<Modal visible={visible} transparent animationType="fade" onRequestClose={() => {}}>
    <View style={styles.ContainerStyle}>
      <CardSection style={styles.CardSectionStyle}>
        <Text style={styles.TextStyle}>
          {children}
        </Text>
      </CardSection>
      <CardSection style={styles.CardSectionStyle}>
        <Button text="Yes" onPress={onAccept} />
        <Button text="No" onPress={onDecline} />
      </CardSection>
    </View>
  </Modal>);

const styles = {
  ContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
    padding: 30,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '300',
    opacity: 0.7,
    flex: 1,
    lineHeight: 30,
    textAlign: 'center',
  },
  CardSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
};

export { Confirm };
