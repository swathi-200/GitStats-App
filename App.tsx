import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBox from './Components/SearchBox';
import React,{useState} from 'react'
import User from './Components/User';
import CardList from './Components/CardList';
export default function App() {
  const [data,setData]=useState<any>();
   const search=(searchterm:string)=>{
    if(searchterm==="")
    {
      alert("please enter something");
      return
    }
    else{
    fetch(`https://api.github.com/users/${searchterm}`).then(res=>res.json()).then(data=>{
      console.log("dataaaaaaaaaaaaaaaaaaaaaa",data)
      setData(data);
    })
  }
   }
  return (
     <View className='flex-1 bg-black'>
      <ScrollView keyboardShouldPersistTaps="handled" className='h-screen'>
      <SearchBox onSearch={search}/>
      <User  data={data}/>
      <CardList data={data}/>
      </ScrollView>
    
     </View>
  );
}

