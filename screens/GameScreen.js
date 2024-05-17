import { Alert, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import GuessNumber from "../components/game/GuessNumber";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ innitialNumber, handleGameOver }) {
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

  useEffect(() => {
    if (currentGuess === innitialNumber) {
      handleGameOver();
    }
  }, [currentGuess, innitialNumber]);

  function nextGuessHandler(direction) {
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
      <Card>
        <InstructionText>Is it lower or higher?</InstructionText>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="remove" size={24} color="black" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="add" size={24} color="black" />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    marginVertical: 50,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
export default GameScreen;
