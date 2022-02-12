import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Image,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";

const API = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingridient, setIngridient] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch(API + ingridient)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Recipe App</Text>
      <View style={styles.tools}>
        <TextInput
          style={styles.input}
          value={ingridient}
          onChangeText={setIngridient}
        />
        <Button title="FIND" onPress={getRecipes} />
      </View>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.img} />
          </View>
        )}
        keyExtractor={(item) => item.idMeal}
      />
      {/* {recipes ? (
        <>
          {recipes.map((recipe) => (
            <View key={uuid.v4()}>
              <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
              <Image source={{ uri: recipe.strMealThumb }} style={styles.img} />
            </View>
          ))}
        </>
      ) : (
        <></>
      )} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
    paddingTop: 45,
  },
  text: {
    fontSize: 30,
    paddingBottom: 10,
  },
  recipeTitle: {
    fontSize: 20,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  input: {
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  tools: {
    paddingBottom: 15,
  },
});
