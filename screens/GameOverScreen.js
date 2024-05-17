import { View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over</Title>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootScreen: {
    alignItems: "center",
  },
});
