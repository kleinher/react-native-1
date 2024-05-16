import { Text, Pressable, View, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.outsideContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: "58000c" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  outsideContainer: {
    flex: 1,
    margin: 2,
    overflow: "hidden",
    borderRadius: 128,
  },
  button: {
    backgroundColor: "#58063c",
    borderRadius: 128,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default PrimaryButton;
