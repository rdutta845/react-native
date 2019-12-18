import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import CheckBox from 'react-native-checkbox';
import {uuid} from 'uuidv4';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ['task1', 'task2', 'task3', 'task4'],
      doneList: [],
      inputData: '',
    };
  }
  onChangeChekbox(val, op) {
    let uncheckList = this.state.doneList.slice(0),
      checkList = this.state.task.slice(0);
    if (op === 'done') {
      uncheckList.splice(val, 0, checkList[val]);
      checkList.splice(val, 1);
    } else {
      checkList.splice(val, 0, uncheckList[val]);
      uncheckList.splice(val, 1);
    }
    setTimeout(() => {
      this.setState({
        task: checkList,
        doneList: uncheckList,
      });
    }, 100);
  }
  setFieldValue(e) {
    this.setState({inputData: e.nativeEvent.text});
  }
  addTodo() {
    let checkList = this.state.task.slice(0);
    const {inputData} = this.state;
    checkList.push(inputData);
    this.setState({task: checkList, inputData: ''});
  }
  render() {
    const {task, doneList, inputData} = this.state;
    return (
      <View>
        <TextInput
          value={inputData}
          onChange={this.setFieldValue.bind(this)}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
            paddingHorizontal: 10,
          }}
        />
        <Button title="Add" onPress={this.addTodo.bind(this)} />
        <Text>To be done...</Text>
        {!task.length && <Text>Empty List</Text>}
        {task.map((val, ind) => (
          <CheckBox
            label={val}
            onChange={this.onChangeChekbox.bind(this, ind, 'done')}
            key={uuid()}
          />
        ))}
        <Text>Done...</Text>
        {doneList.map((val, ind) => (
          <CheckBox
            label={val}
            onChange={this.onChangeChekbox.bind(this, ind, 'revert')}
            key={uuid()}
          />
        ))}
        {!doneList.length && <Text>Empty List</Text>}
      </View>
    );
  }
}
export default Todo;
