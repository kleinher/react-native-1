import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-regular",
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    padding: 10,
  },
});
export default Title;
