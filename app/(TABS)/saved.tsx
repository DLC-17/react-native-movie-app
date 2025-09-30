import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


//TODO
const saved = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
        <View className='flex justify-center flex-1 flex-col items-center gap-5'>
          <Image source={icons.save} className="size-10" tintColor="#Fff"/>
          <Text className='text-gra-500 text-base'>Saved</Text>
        </View>
        </View>
  )
}

export default saved