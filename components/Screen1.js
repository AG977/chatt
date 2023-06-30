import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';




const Screen1 = ({ navigation }) => {
  const [name, setName ] = useState('');
  const [color, setColor ] = useState('');


  return (

    <ImageBackground 
    source={require('../Background-image.png')} 
    resizeMode="cover" 
    style={styles.backgroundImage}
    
    >
      
   <View style={styles.container}>
    <View style={styles.titleContainer}>
          <Text style={styles.title}>Chat App!</Text>
        </View>
      
      <View style={styles.subContainer}>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
      />



<Text>Choose Background Color:</Text> 
<View style={styles.radioButtonContainer}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "red" }]}
              onPress={() => setColor("red")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "blue" }]}
              onPress={() => setColor("blue")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "green" }]}
              onPress={() => setColor("green")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "yellow" }]}
              onPress={() => setColor("yellow")}
            ></TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.chatBox, styles.nameBox]}
        title="Start Chatting"
        onPress={() => navigation.navigate('Screen2', { name: name, color: color})}
        >
          <Text
                style={[styles.colorText, styles.chatBoxText]}>Start Chatting</Text>
        </TouchableOpacity>
         
        </View>

</View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    color: '#FFFFFF',

  },

  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "88%",
    height: "44%",
    backgroundColor: '#FFFFFF',
    marginTop: 300,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },

  textInput: {
    height: 40,
    width: "88%",
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },

  radioButtonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },

  radioButton: {
    backgroundColor: "black",
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#8A95A5",
    color: "#8A95A5",
    padding: 10,
  },

  chatBox: {
    backgroundColor: '#757083',
    justifyContent: 'center'
  },

  nameBox: {
    height: 50,
    width: '88%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 2,
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    opacity: 50
  },

  colorText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 100
  },

  chatBoxText: {
    color: '#fff',
    fontWeight: '600'
  },
 
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',  
  },

});

export default Screen1;

