import { View } from "react-native";
import React from "react";
import TopicList from "@/components/TopicList";
import { topics } from "@/types";

const Home = () => {
  const handleSelectTopic = (topicId: string) => {
    console.log("Selected topic:", topicId);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TopicList
        topics={topics}
        onSelectTopic={handleSelectTopic}
      />
    </View>
  );
};

export default Home;
