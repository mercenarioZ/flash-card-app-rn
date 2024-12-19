import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import mockData from "@/mock-data.json";
import { useState } from "react";
import Card from "@/components/Card";
import Colors from "@/constants/Colors";

const ListDetail = () => {
  const { id } = useLocalSearchParams();

  const topics = mockData.filter((item) => item.topic === id);
  const flashcards = topics[0]?.flashcards;

  const [shownCardIds, setShownCardIds] = useState<{ [key: string]: boolean }>(
    {}
  );

  if (!flashcards) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No flashcards found</Text>
      </View>
    );
  }

  const handleRotateCard = (cardId: string) => {
    setShownCardIds((prevShownCardIds) => ({
      ...prevShownCardIds,
      [cardId]: !prevShownCardIds[cardId],
    }));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerTitle: "Flashcards" }} />

      {flashcards &&
        flashcards.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleRotateCard(item.id)}
          >
            <Card
              content={shownCardIds[item.id] ? item.answer : item.question}
              color={shownCardIds[item.id] ? Colors.backside : "white"}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default ListDetail;
