import { View, Text } from 'react-native'
import React from 'react'
import ActiveOrders from './ActiveOrders'
import CompletedOrders from './CompletedOrders'

export default function BodyOrders(props) {

    const value = props.selected
  return (
      <View>
         {value == 0 ? <ActiveOrders/> : <CompletedOrders/>}
      </View>
  )
}