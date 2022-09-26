import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bruschetta from './assets/bruschetta.png';

function HomeScreen({ navigation, route }) {

  const [numServings, setNumServings] = useState("");


  return (

    <View style={styles.container}>
      <Text style={styles.homeTitle}>Bruschetta Recipe</Text>
      <Image source={bruschetta} style={styles.homePageImage} ></Image>
      <TextInput style={styles.servingsInput}
        value={numServings}
        onChangeText={setNumServings}
        placeholder="Enter the Number of Servings"
      />
      <TouchableOpacity style={styles.viewRecipesButton}
        onPress={() => {
          const servings = parseInt(numServings)
          navigation.navigate('Bruschetta',
            {
              plum: 4 * servings,
              basil: 6 * servings,
              garlic: 3 * servings,
              oliveOil: 3 * servings
            })
        }}>
        <Text style={styles.buttonText}>
          View Recipe
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function Bruschetta({ route, navigation }) {
  const { plum, basil, garlic, oliveOil } = route.params;
  return (
    <View style={styles.container}>

      <Text style={styles.recipeInfoTitle}>Bruschetta</Text>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>

      <Text style={styles.ingredients}>
        {JSON.stringify(plum)} plum tomatoes{"\n"}
        {JSON.stringify(basil)} basil leaves{"\n"}
        {JSON.stringify(garlic)} garlic cloves, chopped{"\n"}
        {JSON.stringify(oliveOil)} TB olive oil
      </Text>
      <Text style={styles.directionsTitle}>
        Directions
      </Text>
      <Text style={styles.directions}>
        Combine the ingredients {"\n"}
        add salt to taste. Top French{"\n"}
        bread slices with mixture.
      </Text>

      <StatusBar style="auto" />
    </View>
  )
}



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Healthy Recipies" component={HomeScreen}
          options={{
            title: 'Healthy Recipes',
            headerStyle: {
              backgroundColor: '#f4511e',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }} />
        <Stack.Screen name="Bruschetta"
          component={Bruschetta}
          options={{
            title: 'Healthy Recipes',
            headerStyle: {
              backgroundColor: '#f4511e',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTitle: {
    fontSize: "50px",
    position: "absolute",
    top: 100,
  },
  homePageImage: {
    position: "absolute",
    top: 175,
  },
  servingsInput: {
    position: "absolute",
    top: 500,
    fontSize: "20px",
  },
  viewRecipesButton: {
    position: "absolute",
    top: 575,
    backgroundColor: "grey",
    height: 40,
    width: 175,
  },
  buttonText: {
    fontSize: "30px",
    textAlign: "center",
    color: "white",
  },
  recipeInfoTitle: {
    position: "absolute",
    top: 50,
    fontSize: "40px",
  },
  ingredientsTitle: {
    position: "absolute",
    top: 130,
    fontSize: "30px",
    left: 40,
  },
  ingredients: {
    position: "absolute",
    top: 175,
    fontSize: "20px",
    left: 60,
  },
  directionsTitle:{
    position: "absolute",
    top: 300,
    fontSize: "30px",
    left: 40,
  },
  directions: {
    position: "absolute",
    top: 345,
    fontSize: "20px",
    left: 60,
  }

});
