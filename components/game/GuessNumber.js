import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessNumber({ currentGuess }) {
  return (
    <View style={styles.guessFrame}>
      <Text style={styles.text}>{currentGuess}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "yellow",
    fontSize: 40,
  },
  guessFrame: {
    width: "80%",
    alignItems: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
export default GuessNumber;
