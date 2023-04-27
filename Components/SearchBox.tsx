import { View, Text ,TextInput, Pressable} from 'react-native'
import React,{useState} from 'react'

type Props={
  onSearch:Function
}
const SearchBox = ({onSearch}:Props) => {
    const [username,setUsername]=useState("")
  return (
    <View className='flex flex-row items-center space-x-4 mx-auto mt-20'>
      <TextInput placeholder='Enter Your UserName here..' placeholderTextColor="#ffffff" onChangeText={(text:string)=>setUsername(text)} className='border border-gray-100 p-2 text-white w-2/3'/>
      <Pressable className='bg-sky-600 px-4 py-2 ' onPress={()=>onSearch(username)}>
        <Text className='text-gray-50 rounded'>Search</Text>
      </Pressable>
    </View>
  )
}

export default SearchBox