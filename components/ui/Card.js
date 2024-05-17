import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;
const styles = StyleSheet.create({
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
});
