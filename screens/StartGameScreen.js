import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Title from "../components/ui/Title";
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
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={styles.rootContainer}>
          <Title style={styles.title}>Start a new game!</Title>
          <Card>
            <InstructionText style={styles.title}>
              {" "}
              Enter a number{" "}
            </InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  buttonsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
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
    width: 50,
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
