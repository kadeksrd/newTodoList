import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  // function items

  //task state
  const [task, setTask] = useState();
  const [allTask, setAllTask] = useState([]);

  // add task function
  const handleAddTask = () => {
    setAllTask([...allTask, task]);
    setTask(null);
  };

  // delete task function
  const completeTask = index => {
    let itemsCopy = [...allTask];
    itemsCopy.splice(index, 1);
    setAllTask(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* this is where the tasks will go  */}
          {allTask.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}

          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} /> */}
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTakWrapper}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder={'write a task'}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  items: {
    marginTop: 30,
  },
  writeTakWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
  },
  addText: {},
});
