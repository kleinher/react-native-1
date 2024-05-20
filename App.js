import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function startGameHandler(chosenNumber) {
    setNumber(chosenNumber);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (number && !gameOver) {
    content = (
      <GameScreen initialNumber={number} handleGameOver={gameOverHandler} />
    );
  } else if (gameOver) {
    content = <GameOverScreen />;
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
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {content}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
