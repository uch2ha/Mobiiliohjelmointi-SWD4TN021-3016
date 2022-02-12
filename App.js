import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

const API = "http://api.exchangeratesapi.io/latest?access_key=";
const CODE = "904f69739d50812677ccd4f7bb3a780d";

export default function App() {
  const [currency, setCurrency] = useState("AED");
  const [amount, setAmount] = useState();
  const [exchangeRates, setExchangeRates] = useState([]);
  const [pickerItem, setPickerItem] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(API + CODE)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
        setPickerItem(Object.keys(data.rates));
      });
  }, []);

  // console.log(exchangeRates[currency]);
  console.log(amount);

  const convertTo = () => {
    let resultAmount = amount / exchangeRates[currency];
    setResult(resultAmount.toFixed(2) + "€");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Euromuunnin</Text>
      {result ? (
        <>
          <Text style={[styles.text, { color: "red" }]}>{result}</Text>
        </>
      ) : (
        <></>
      )}
      <View style={styles.tools}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="enter amount"
          value={amount}
          onChangeText={setAmount}
        />
        <Picker
          selectedValue={currency}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue) => setCurrency(itemValue)}
        >
          {pickerItem.map((item) => (
            <Picker.Item label={item} value={item} />
          ))}
        </Picker>
      </View>
      <View style={styles.btn}>
        <Button title="CONVERT" onPress={convertTo} style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tools: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    maxWidth: 120,
    borderWidth: 1,
    padding: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    paddingBottom: 15,
  },
  btn: {
    paddingTop: 10,
  },
});
