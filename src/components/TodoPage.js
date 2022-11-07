import React, { useState, useEffect } from 'react'
import { NavigationContainer, useIsFocused} from '@react-navigation/native';

import { 
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import TodoInfo from './TodoInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../css/styles';
import { getUserDetails } from '../api/User';

const getUserFirstName = async() => {
  let response = await getUserDetails();
  // console.log("^&&^^&&^&", (await response.json())[0].firstName);
  // return await response.json();
  return (await response.json())[0].firstName;
}

export default function TodoPage({navigation}) {

   const [TodoList ,setTodoList] = useState([]);
   const [userName, setUserName] = useState("");
    const [isSelected, setIsSelected] = useState("ToDo");

   useEffect( () => {
    async function fetchData(){
    try {
        const valueString = await AsyncStorage.getItem('todoList');
        const value = JSON.parse(valueString);
        if (value !== null) {
            setTodoList(value);
          console.log(value);
        }
      } catch (error) {
            console.log(error);
      }
    }
    fetchData();
   }, [useIsFocused()])
   
   useEffect( () => {
    async function fetchData(){
    try {
        const userName = await getUserFirstName();
        console.log("%%%%%%%",await userName);
        setUserName(userName);
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
   }, [])
   
  return (

    <View style={[styles.TodoContainer, {
      flexDirection: "column"
      }]}>

    <StatusBar style = "auto"/>
        <View style = {{ flex: 1, alignItems :'center' ,justifyContent : 'center'}} >
        <Text style = {styles.sectionTitle}>Hello {userName}</Text>
        </View>
        <View style = {{ 
            flex: 4, 
            backgroundColor: "white" , 
            alignItems :'center', 
            borderTopLeftRadius : 25, 
            borderTopRightRadius : 25,
            justifyContent : 'center'
            }} >

            <View elevation = {5} style={styles.TodoNav}>
                <Text style={{color:(isSelected=="ToDo"?"#000080":"black")}} onPress = {()=>setIsSelected("ToDo")} >ToDo</Text> 
                <Text style={{color:(isSelected=="Doing"?"#000080":"black")}} onPress = {()=>setIsSelected("Doing")}>Doing</Text> 
                <Text style={{color:(isSelected=="Done"?"#000080":"black")}} onPress = {()=>setIsSelected("Done")}>Done</Text>
            </View>

            <ScrollView style= {{alignContent:'center', width:"80%", padding:10}}>
                {TodoList.map((field) => 
                    <TodoInfo TodoData = {field}></TodoInfo>
                )}
            </ScrollView>


        <TouchableOpacity style = {styles.AddUserButton} onPress = {() => navigation.navigate('AddTodo')}>
        <Image source={require('/home/tushar/Desktop/todoApp/src/static/icons8-add-40.png')} />
        </TouchableOpacity>
    </View>

    </View>
  )
}
