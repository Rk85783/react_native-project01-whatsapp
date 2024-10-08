import { View, Text, Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={ imagePath.react_logo } />
    </View>
  )
}

export default Home