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
import {Dropdown} from 'react-native-material-dropdown';

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
        obj = {
            'title':title,
            'date':date,
            'todoStatus': todoStatus
        }
        try {
            await storeData(obj)
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

        {/* <Dropdown  
        label = 'Status'
        data = {[
            {
                value:'ToDo',
            },
            {
                value:'Doing',
            },
            {
                value:'Done'
            },
        ]}
        onChangeText = {setTodoStatus}>
        </Dropdown> */}

        <TouchableOpacity onPress= {addToStorage}>
            <Text>Submit</Text>
        </TouchableOpacity>

    </View>
  )
}
