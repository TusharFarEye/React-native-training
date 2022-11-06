import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
 
import { styles } from '../css/styles';

storeData = async(obj) => { 
    try {
        const objString = await AsyncStorage.getItem('todoList');
        let objArray = JSON.parse(objString);
        if(objArray == null)objArray = [];
        console.log(objArray);
        objArray.push(obj);
        const finalObjArray = JSON.stringify(objArray);

        await AsyncStorage.setItem('todoList', finalObjArray ,(error) => console.log(error));
    
    } catch (error) {
        console.log(error);
    }
}  

export default function AddTodo({navigation}) {

    const [ title , setTitle] = useState("");
    const [date , setDate] = useState("");
    const [todoStatus, setTodoStatus] = useState("");
    
    addToStorage = async() => {
        console.log("adding to storage");
        obj = {
            'title':title,
            'date':date,
            'todoStatus': todoStatus
        }
        try {
            await storeData(obj)
            console.log("Todo Info Stored")
            navigation.navigate('TodoPage');
        }catch(error){
            console.log(error);
        }
    }

  return (
    <View>

        <TextInput 
        style={styles.TextInput}
        placeholder="Title"
        placeholderTextColor="#003f5c"
        onChangeText = {setTitle}>
        </TextInput>

        <TextInput 
        style={styles.TextInput}
        placeholder="Date"
        placeholderTextColor="#003f5c"
        onChangeText = {setDate}>
        </TextInput>

        <TextInput 
        style={styles.TextInput}
        placeholder="Status"
        placeholderTextColor="#003f5c"
        onChangeText = {setTodoStatus}>
        </TextInput>

        <TouchableOpacity onPress= {() => addToStorage()}>
            <Text>Submit</Text>
        </TouchableOpacity>

    </View>
  )
}
