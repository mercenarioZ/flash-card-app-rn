import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import mockData from "@/mock-data.json";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const Sets = () => {
  const topics = Array.from(new Set(mockData.map((card) => card.topic)));
  console.log(topics);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <FlatList
        data={topics}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Link
            href={`/list/${item}`}
            asChild
          >
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default Sets;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 7,
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },

  itemText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
