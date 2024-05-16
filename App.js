import StartGameScreen from "./screens/StartGameScreen";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [number, setNumber] = useState();
  function startGameHandler(chosenNumber) {
    setNumber(chosenNumber);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (number) {
    content = <GameScreen innitialNumber={number} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.1 }}
        style={styles.rootScreen}
      >
        <SafeAreaView styles={styles.rootScreen}>{content}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
