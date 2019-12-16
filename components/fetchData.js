import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class FetchData extends Component {
  render() {
    const styles = StyleSheet.create({
      btnBg: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 10,
      },
      btnMr: {
        marginBottom: 10,
        borderRadius: 10,
      },
    });
    return (
      <View style={styles.btnBg}>
        <View style={styles.btnMr}>
          <Button title="Add" onPress={this.props.onClick.bind(this, 1)} />
        </View>
        <View style={styles.btnMr}>
          <Button title="Sub" onPress={this.props.onClick.bind(this, -1)} />
        </View>
        <TouchableOpacity
          style={styles.btnBg}
          onPress={this.props.navigateTodo}>
          <Text>Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FetchData;
