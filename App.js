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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>First calculator</Text>

      <NumericInput onChange={handleInput1} autoFocus />
      <NumericInput onChange={handleInput2} />

      <View style={styles.btnBox}>
        <View style={styles.btn}>
          <Button
            title="+"
            onPress={() => Alert.alert("Answer is " + (number1 + number2))}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="-"
            onPress={() => Alert.alert("Answer is " + (number1 - number2))}
          />
        </View>
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
});
