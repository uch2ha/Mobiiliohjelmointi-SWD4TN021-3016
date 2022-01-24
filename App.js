import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Alert,
  View,
} from "react-native";
import "react-native-numeric-input";
import NumericInput from "react-native-numeric-input";

export default function App() {
  const [answer, setAnswer] = useState(0);
  const [userNumber, handleChange] = useState(0);

  useEffect(() => {
    createAnswer();
  }, []);

  const createAnswer = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
  };

  const handlePress = () => {
    if (userNumber > answer) {
      Alert.alert("too high");
    } else if (userNumber < answer) {
      Alert.alert("too low");
    } else {
      Alert.alert("Correct! Number is " + answer);
      createAnswer();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Guess a number between 1-100!</Text>
      <NumericInput onChange={handleChange} />
      <View style={styles.btn}>
        <Button title="MAKE GUESS" onPress={() => handlePress()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingBottom: 20,
    fontSize: 15,
  },
  btn: {
    paddingTop: 10,
  },
});
