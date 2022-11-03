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
 
 const SignUp= (props) => {
    
    const [name,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password, setPassword] = useState("");
 
   return (
       <View >
 
           <TextInput
                 style={styles.TextInput}
                 placeholder="Name."
                 placeholderTextColor="#003f5c"
                 onChangeText={setName} />
 
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
             <Text>Already Registered ? Log In</Text>
           </TouchableOpacity>
     
           <TouchableOpacity style={styles.loginButton}>
             <Text>SIGN UP</Text>
           </TouchableOpacity>
         </View>
   );
 };
 
 const styles = StyleSheet.create({
   TextInput: {
    borderRadius : 10,
     backgroundColor: "#FFC0CB",
     width: "60%",
     minWidth : 240,
     height: 45,
     marginBottom: 20,
     alignItems: "center",
     marginTop:20,
   },
   signUpRedirect: {
     height: 30,
     marginBottom: 30,
   },
   loginButton: {
     width: "80%",
     minWidth : 250,
     borderRadius: 25,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 40,
     backgroundColor: "purple",
   },
 });
   
 export default SignUp;
 