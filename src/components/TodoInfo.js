import React from 'react'
import { 
    StatusBar,
   StyleSheet,
   TextInput,
   Text,
   View,
   TouchableOpacity,
   ScrollView,
   Image,
} from 'react-native';
import { styles } from '../css/styles';

export default function TodoInfo(props) {
  return (
    <View elevation={5} style = {styles.TodoField}>
      <View style={{flex:1, justifyContent:"center"}}>
          <Image source= {require('/home/tushar/Desktop/todoApp/src/static/doraemon.png')}></Image>
      </View>
      <View style = {{flex:4, justifyContent:"center", padding:10}}>
        <Text>
             {props.TodoData.title} 
        </Text>
      </View>
    </View>
  )
}
