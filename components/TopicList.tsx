import { Topic } from "@/types";
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

interface TopicListProps {
  topics: Topic[];
  onSelectTopic: (topicId: string) => void;
}

const TopicList: React.FC<TopicListProps> = ({ topics, onSelectTopic }) => {
  const handleSelectTopic = (topicId: string) => {
    onSelectTopic(topicId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicButton}
            onPress={() => handleSelectTopic(item.id)}
          >
            <Text style={styles.topicButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopicList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  topicButton: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#0891b2",
    borderRadius: 8,
    alignItems: "center",
  },
  topicButtonText: {
    color: "white",
    fontWeight: "medium",
    fontSize: 18,
  },
});
