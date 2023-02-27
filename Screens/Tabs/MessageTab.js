import { View, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import HeaderMessage from '../../Components/MessageComponents/HeaderMessage'
import ChatBody from '../../Components/MessageComponents/ChatBody';
import AddChat from '../../Components/MessageComponents/AddChat';

export default function MessageTab() {
  const [selected, setisselected] = useState(0);

  const chooseselected = (selected) => {
    setisselected(selected);
  };
  return (
    <View style={styles.container}>
     <HeaderMessage chooseselected={chooseselected} selected={selected}/>
     <ScrollView>
     <ChatBody  selected={selected}/>
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