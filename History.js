import React from "react";
import { Text, SafeAreaView, StyleSheet, View, FlatList } from "react-native";

export default function History({ route }) {
  return (
    <SafeAreaView>
      <View style={styles.historyBox}>
        <FlatList
          data={route.params}
          renderItem={({ item }) => <Text style={styles.history}>{item}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  historyBox: {
    paddingTop: 20,
    alignItems: "center",
  },
  history: {
    fontSize: 25,
  },
});
