import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === 'C') {
      setInput('');
      setResult(0);
    } else if (buttonValue === '=') {
      setResult(eval(input));
    } else {
      setInput(input + buttonValue);
    }
  };

  const renderButton = (buttonValue) => (
    <TouchableOpacity
      onPress={() => handleButtonPress(buttonValue)}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{buttonValue}</Text>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton("7")}
          {renderButton("8")}
          {renderButton("9")}
          {renderButton("/")}
        </View>
        <View style={styles.row}>
          {renderButton("4")}
          {renderButton("5")}
          {renderButton("6")}
          {renderButton("*")}
        </View>
        <View style={styles.row}>
          {renderButton("1")}
          {renderButton("2")}
          {renderButton("3")}
          {renderButton("-")}
        </View>
        <View style={styles.row}>
          {renderButton(".")}
          {renderButton("0")}
          {renderButton("C")}
          {renderButton("+")}
        </View>
        <View style={styles.row}>{renderButton("=")}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 181,
    fontSize:40,
    fontWeight:"bold"
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10
  },
  inputText:{
    fontSize:30,
    marginRight:10,
  },
  buttonsContainer: {
    backgroundColor: "#E9F6FF",
    width: "100%",
    height: 430,
    padding:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row:{
    flexDirection:"row",
    marginBottom:10
  },
  button:{
    flex:1,
    backgroundColor:"#dcdcdc",
    borderRadius:10,
    paddingVertical:15,
    paddingHorizontal:20,
    marginHorizontal:5,
    marginTop:15,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center"


  },
  buttonText:{
    fontSize:25,
  
  }
});
