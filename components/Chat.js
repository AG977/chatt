import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";


const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }



  useEffect(() => {
    navigation.setOptions({ title: name, color: color});
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: 'You have entered the chat',
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  
  useEffect(() => {
    navigation.setOptions({ title: name })
  }, []);


 return (
  <View style={[styles.container,{backgroundColor: color}]}>
  <Text style={styles.title}>Hello Screen2!</Text>
  <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
</View>
 );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
   // alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
  }
});

export default Chat; 


