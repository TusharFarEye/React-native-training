import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Switch,
  } from 'react-native';
 
import { styles } from '../css/styles';
import DateTimePicker from '@react-native-community/datetimepicker';

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

    const [title , setTitle] = useState("");
    const [date , setDate] = useState("");
    const [todoStatus, setTodoStatus] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [TodoType, setTodoType] = useState(true);

    const addToStorage = async() => {
        console.log("adding to storage");
        obj = {
            'title':title,
            'date':date,
            'todoStatus': todoStatus,
            'todoType': TodoType
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
    <View style = {styles.AddTodo}>

        <TextInput 
        style={styles.TextInput}
        placeholder="Title"
        placeholderTextColor="#003f5c"
        onChangeText = {setTitle}>
        </TextInput>

        <TextInput 
        style={styles.TextInput}
        placeholder="Status"
        placeholderTextColor="#003f5c"
        onChangeText = {setTodoStatus}>
        </TextInput>

        <TouchableOpacity style ={styles.loginButton} onPress= {() => setShowPicker(true)}>
            <Text style = {{color:"white"}}>Select Date</Text>
        </TouchableOpacity>

        {showPicker && <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          is24Hour={true}
          minimumDate={new Date()}
          onChange = { (event, selectedDate) => {setDate(selectedDate); setShowPicker(false);}}
        />}
         <Text>Selected Date: {date.toLocaleString()}</Text> 

         <Switch
                onValueChange={() => setTodoType(!TodoType)}
                value={!TodoType}
              />

        <TouchableOpacity style ={styles.loginButton} onPress= {() => addToStorage()}>
            <Text style = {{color:"white"}}>Submit</Text>
        </TouchableOpacity>

    </View>
  )
}
