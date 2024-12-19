import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  content: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ content, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#363535",
    width: 300,
    minHeight: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  content: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#55676b",
  },
});
