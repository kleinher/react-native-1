import { TextInput, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
function StartGameScreen({ startGameHandler }) {
  const [enteredText, setEnteredText] = useState("");

  function handleTextChange(text) {
    setEnteredText(text);
  }

  function confirmInput() {
    const chosenNumber = parseInt(enteredText);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Ok", style: "destructive", onPress: () => setEnteredText("") },
      ]);
    }
    startGameHandler(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handleTextChange}
          value={enteredText}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: Colors.primary600,
    // Android shadow
    elevation: 5,
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 4, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.6,
  },
  numberInput: {
    height: 40,
    width: 40,
    fontSize: 25,
    marginVertical: 10,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    borderBottomEndRadius: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
