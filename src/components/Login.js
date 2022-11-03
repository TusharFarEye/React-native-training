/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   StatusBar,
   StyleSheet,
   TextInput,
   Text,
   View,
   TouchableOpacity,
 } from 'react-native';
 
 const Login= (props) => {
 
    const [email ,setEmail] = useState("");
    const [password, setPassword] = useState("");
 
   return (
    <View>
           <TextInput
               style={styles.TextInput}
               placeholder="Email."
               placeholderTextColor="#003f5c"
               onChangeText={setEmail} />
           
           <TextInput
               style={styles.TextInput}
               placeholder="Password."
               placeholderTextColor="#003f5c"
               secureTextEntry={true}
               onChangeText={setPassword} />
           
 
           <TouchableOpacity style={styles.signUpRedirect} 
            onPress = {()=>props.setIsLogin(!props.isLogin)}
           >
             <Text>New User? Sign Up</Text>
           </TouchableOpacity>
     
           <TouchableOpacity style={styles.loginButton}>
             <Text>LOGIN</Text>
           </TouchableOpacity>
         </View>
       
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "grey",
   },
   TextInput: {
    borderRadius : 10,
     backgroundColor: "#FFC0CB",
     minWidth : 240,
     width: "60%",
     height: 45,
     marginBottom: 20,
     alignItems: "center",
     marginTop:20,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     justifyContent:'center',
     marginTop:100,
     color:'#000000'
   },
   signUpRedirect: {
     height: 30,
     marginBottom: 30,
   },
   loginButton: {
     width: "80%",
     borderRadius: 25,
     minWidth : 250,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 40,
     backgroundColor: "purple",
   },
 });
   
 export default Login;
 