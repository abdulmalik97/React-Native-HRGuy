import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './Common';

class ListItem extends Component{
  onRowPress() {
    Actions.employeeedit({ employee: this.props.emp });
    //Encountered an error here , had to pass this.props.emp.val instead of
    //just this.props.emp
  }

  render() {
    const name  = this.props.emp;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={{marginLeft: 5,marginRight:5,borderRadius:13}}>
            <Text style={styles.titleStyle}>

             {name.val.name}
            </Text>
          </CardSection>
        </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1,
    fontWeight: "300",
    paddingTop: 5,
  }
};

export default ListItem;
