import { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';




const Start = ({ navigation }) => {
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
        <View style={styles.textInputContainer}>
          <Image style={styles.inputBoxIcon} source={require('../assets/avatar.png')} />
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Your Name'
        />
      </View>



      <Text style={styles.chooseColorTitle}>Choose Background Color:</Text> 
      <View style={styles.radioButtonContainer}>
          <View style={[styles.radioButtonBorder, (color === "#090C08") ? { borderColor: "black" } : null]}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#090C08" }]}
              onPress={() => setColor("#090C08")}
            ></TouchableOpacity>
          </View>
          <View style={[styles.radioButtonBorder, (color === "#474056") ? { borderColor: "black" } : null]}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#474056" }]}
              onPress={() => setColor("#474056")}
            ></TouchableOpacity>
          </View>
          <View style={[styles.radioButtonBorder, (color === "#8A95A5") ? { borderColor: "black" } : null]}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#8A95A5" }]}
              onPress={() => setColor("#8A95A5")}
            ></TouchableOpacity>
          </View>
          <View style={[styles.radioButtonBorder, (color === "#B9C6AE") ? { borderColor: "black" } : null]}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#B9C6AE" }]}
              onPress={() => setColor("#B9C6AE")}
            ></TouchableOpacity>
          </View>
        </View>
          <TouchableOpacity style={[styles.chatBox]}
        title="Start Chatting"
        onPress={() => navigation.navigate('Chat', { name: name, color: color})}
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
    justifyContent: "space-between",
    width: "88%",
    minHeight: "44%",
    maxHeight: 380,
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,
    padding: '6%',
  },

  textInputContainer:{
    borderWidth: 3,
    borderColor: '#757083',
    width: '100%',
    flexDirection: 'row',
    height: 70,
    padding: 10,
  },

  inputBoxIcon: {
    alignSelf: 'center',
    height: 25,
    width: 25,
    opacity: 0.5,
    marginHorizontal: 10,
  },

  textInput: {
    fontSize: 16,
    color: '#757083',
    opacity: 0.5,
    marginLeft: 5,
  },

  radioButtonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 45,
  },

  chooseColorTitle: {
    fontSize: 16,
    color: '#757083',
    fontWeight: 300,
    alignSelf: 'flex-start',
  },

  radioButtonBorder: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },

  radioButton: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#8A95A5",
    color: "#8A95A5",
    padding: 10,
  },

  chatBox: {
    backgroundColor: '#757083',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 70,
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
    color: '#FFFFFF',
    fontWeight: '600'
  },
 
  title: {
    fontWeight: "600",
    fontSize: 45,
    color: '#FFFFFF',
    textAlign: 'center',  
  },

});

export default Start;

