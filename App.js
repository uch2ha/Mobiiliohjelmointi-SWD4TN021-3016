import { useState } from "react";
import NumericInput from "react-native-numeric-input";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const [number1, handleInput1] = useState(null);
  const [number2, handleInput2] = useState(null);
  const [history, setHistory] = useState([]);

  const plus = () => {
    Alert.alert("Answer is " + (number1 + number2));

    result = number1 + " + " + number2 + " = " + (number1 + number2);

    setHistory([...history, result]);
  };

  const minus = () => {
    Alert.alert("Answer is " + (number1 - number2));

    result = number1 + " - " + number2 + " = " + (number1 - number2);

    setHistory([...history, result]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second calculator</Text>

      <NumericInput onChange={handleInput1} autoFocus />
      <NumericInput onChange={handleInput2} />

      <View style={styles.btnBox}>
        <View style={styles.btn}>
          <Button title="+" onPress={() => plus()} />
        </View>
        <View style={styles.btn}>
          <Button title="-" onPress={() => minus()} />
        </View>
      </View>
      <View style={styles.historyBox}>
        <Text style={styles.history}>History:</Text>
        {history.map((h) => {
          return <Text style={styles.history}>{h}</Text>;
        })}
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
    paddingBottom: 10,
    fontSize: 25,
  },
  btnBox: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  btn: {
    padding: 10,
    width: "15%",
  },
  historyBox: {
    alignItems: "center",
  },
  history: {
    fontSize: 20,
  },
});
