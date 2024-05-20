import { Alert, FlatList, StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import GuessNumber from "../components/game/GuessNumber";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ innitialNumber, handleGameOver }) {
  const innitialGuess = generateRandomNumber(1, 100, innitialNumber);
  const [currentGuess, setCurrentGuess] = useState(innitialGuess);
  const [rounds, setRounds] = useState([]);

  function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    setRounds([]);
  }, [innitialNumber]);

  useEffect(() => {
    setRounds([currentGuess, ...rounds]);
  }, [currentGuess]);

  useEffect(() => {
    if (currentGuess === innitialNumber) {
      handleGameOver(rounds.length);
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
      <View style={styles.logs}>
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <View style={styles.logContainer}>
              <Text style={styles.logText}>#{rounds.length - index} </Text>
              <Text style={styles.logText}>Guess: {item} </Text>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 10,
    borderColor: "yellow",
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 20,
  },
  logText: {
    fontFamily: "sans-regular",
    fontSize: 15,
  },
  logs: {
    flex: 1, // Asegura que ocupe todo el espacio disponible
    width: "80%",
  },
  rootScreen: {
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
export default GameScreen;
