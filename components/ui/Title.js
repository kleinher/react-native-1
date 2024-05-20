import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-bold",
    width: "80%",
    fontSize: 35,
    textAlign: "center",
    color: Colors.accent500,
    padding: 10,
  },
});
export default Title;
