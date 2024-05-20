import StartGameScreen from "./screens/StartGameScreen";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [roundsAmount, setRoundsAmount] = useState(0);

  function startGameHandler(chosenNumber) {
    setNumber(chosenNumber);
  }

  const [fontLoaded] = useFonts({
    "sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  SplashScreen.preventAutoHideAsync();
  if (fontLoaded) {
    SplashScreen.hideAsync();
  }

  function restartGameHandler() {
    setNumber(null);
    setGameOver(false);
  }

  function gameOverHandler(roundsAmount) {
    setGameOver(true);
    setRoundsAmount(roundsAmount);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (number) {
    content = (
      <GameScreen innitialNumber={number} handleGameOver={gameOverHandler} />
    );
  }
  if (gameOver) {
    content = (
      <GameOverScreen
        rounds={roundsAmount}
        number={number}
        restartGame={restartGameHandler}
      />
    );
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
        <SafeAreaView style={styles.rootScreen}>{content}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
