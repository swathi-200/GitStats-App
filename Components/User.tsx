import { View, Text ,Image} from 'react-native'
import React from 'react'

type Props = {
    data :[]
}
const User = (data:any) => {
    console.log("paaaaaaaaaaases",data)

  return (
    <View className='flex flex-row  items-center space-x-5 mt-5'>
        <Image source={{uri:data?.data?.avatar_url}} className='h-20 w-20 rounded-full'/>
      <Text className='text-white font-bold text-lg'>{data?.data?.login}</Text>
    </View>
  )
}

export default User