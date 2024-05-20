import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, number, restartGame }) {
  const deviceHeight = useWindowDimensions().height;
  let imageSize = {
    width: 150,
    height: 150,
    borderRadius: 75,
  };

  if (deviceHeight < 500) {
    imageSize = {
      width: 80,
      height: 80,
      borderRadius: 40,
    };
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootScreen}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageSize]}>
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
    </ScrollView>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  mainText: {
    fontFamily: "sans-bold",
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
    //width: deviceWidth < 380 ? 150 : 300,
    //height: deviceWidth < 380 ? 150 : 300,
    //borderRadius: deviceWidth < 380 ? 75 : 150,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
