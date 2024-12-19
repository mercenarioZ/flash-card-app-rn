import Colors from "@/constants/Colors";
import { Link, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="sets"
        options={{
          title: "My Flashcards",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="book-open"
              color={color}
              size={size}
            />
          ),

          headerRight: () => (
            <Link
              href="/"
              asChild
            >
              <TouchableOpacity>
                <Feather
                  name="plus"
                  size={24}
                  color="white"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="user"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
