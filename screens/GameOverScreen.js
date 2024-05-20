import { View, StyleSheet, Text, FlatList } from "react-native";
import { Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, number, restartGame }) {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.mainText}>
        Your phone needed <Text style={styles.highlighted}> {rounds} </Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlighted}>{number}</Text>
      </Text>
      <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  mainText: {
    fontFamily: "sans-regular",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20,
  },
  highlighted: {
    color: "red",
    fontFamily: "sans-bold",
  },
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
