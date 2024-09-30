import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
//This is a new line -- a new commit

export default function App(){
  const [fullname, setFullname] = useState("Eoin");
  return(
    <View> 
      <Text>Hello, World {fullname}</Text>
      <TextInput placeholder="enter your name" onChangeText={(value)=>setFullname(value)}></TextInput>
    </View>
  )
};



