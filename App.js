import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [item, onChangeItem] = useState("");
  const [shopList, setShopList] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shopping List:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter item..."
        onChangeText={onChangeItem}
      />
      <View>
        <Button title="Add" onPress={() => setShopList([...shopList, item])} />
        <Button title="Clear" onPress={() => setShopList([])} />
      </View>
      <View style={styles.shopListBox}>
        {shopList.map((shopItem) => {
          return <Text style={styles.shopItem}>{shopItem}</Text>;
        })}
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
  text: {
    fontSize: 25,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 3,
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  shopListBox: {
    alignItems: "center",
  },
  shopItem: {
    fontSize: 20,
  },
  btn: {
    margin: 15,
  },
});
