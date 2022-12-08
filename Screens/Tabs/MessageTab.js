import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderMessage from '../../Components/MessageComponents/HeaderMessage'
import ChatBody from '../../Components/MessageComponents/ChatBody';
import AddChat from '../../Components/MessageComponents/AddChat';

export default function MessageTab() {
  return (
    <View style={styles.container}>
     <HeaderMessage/>
     <ScrollView>
     <ChatBody/>
    
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});