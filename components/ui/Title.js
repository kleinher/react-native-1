import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 1,
    padding: 10,
  },
});
export default Title;
