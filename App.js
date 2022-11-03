/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App= () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
      <View style={[styles.container, {
          flexDirection: "column"
          }]}>

        <StatusBar style = "auto"/>
        <View style = {{ flex: 1, backgroundColor: "grey" , alignItems :'center'}} >
          <Text style = {styles.sectionTitle}>TODO APP</Text>
        </View>

        <View style = {{ 
          flex: 2, 
          backgroundColor: "white" , 
          alignItems :'center', 
          borderTopLeftRadius : 25, 
          borderTopRightRadius : 25,
          justifyContent : 'center'
          }} >

        {isLogin?<Login isLogin = {isLogin} setIsLogin = {setIsLogin}></Login> : <SignUp isLogin = {isLogin} setIsLogin = {setIsLogin}></SignUp>}

        </View>

      </View>
  );
};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "grey",
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     justifyContent:'center',
     marginTop:100,
     color:'#000000'
   },
 });

export default App;
