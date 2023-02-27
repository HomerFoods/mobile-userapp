import { View, Text } from 'react-native'
import React from 'react'
import IndividualChat from './IndividualChat'
import AddChat from './AddChat'

export default function ChatBody(props) {
  const value = props.selected
  return (
    <View className='mt-4 mx-4'>
       {value == 0 ? <IndividualChat/>: <AddChat/>}
    </View>
  )
}