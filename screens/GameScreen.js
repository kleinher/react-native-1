import { Alert, StyleSheet, View } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import GuessNumber from "../components/game/GuessNumber";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ innitialNumber }) {
  const innitialGuess = generateRandomNumber(1, 100, innitialNumber);
  const [currentGuess, setCurrentGuess] = useState(innitialGuess);

  function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  function nextGuessHandler(direction) {
    console.log(currentGuess, direction, innitialNumber);

    if (
      (direction === "lower" && currentGuess < innitialNumber) ||
      (direction === "higher" && currentGuess > innitialNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    setCurrentGuess(
      generateRandomNumber(minBoundary, maxBoundary, currentGuess)
    );
  }

  return (
    <View style={styles.rootScreen}>
      <Title>Opponent's Guess</Title>
      <GuessNumber currentGuess={currentGuess} />
      <View style={styles.buttons}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          LOWER
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          HIGHER
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    marginVertical: 50,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  },
});
export default GameScreen;
