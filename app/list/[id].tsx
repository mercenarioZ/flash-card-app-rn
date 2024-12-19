import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import mockData from "@/mock-data.json";
import { useState } from "react";

const ListDetail = () => {
  const { id } = useLocalSearchParams();
  const flashcard = mockData.filter((item) => item.topic === id);
  console.log(flashcard);
  const [isShown, setIsShown] = useState(false);

  if (!flashcard) {
    return;
  }

  const onShowAnswerPress = () => {
    console.log("Answer is shown");
    setIsShown((prev) => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerTitle: "Flashcards" }} />

      {flashcard &&
        flashcard.map((item) => (
          <View>
            <Text
              key={item.id}
              style={styles.question}
            >
              {item.question}
            </Text>

            <TouchableOpacity>
              <Button
                title="Show"
                onPress={onShowAnswerPress}
              />
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default ListDetail;

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: "semibold",
  },
});
