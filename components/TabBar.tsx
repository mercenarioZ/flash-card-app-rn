import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabBarButton from "./TabBarButton";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const primaryColor = "#0891b1";
  const inactiveColor = "#73737373";

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTopColor: "#e0e0e0",
        paddingVertical: 12,
        marginHorizontal: 14,
        position: "absolute",
        bottom: 23,
        borderRadius: 16,
        borderCurve: "continuous",
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 4,
        },
        shadowRadius: 6,
        shadowOpacity: 0.05,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // Ignore specific routes like _sitemap or +not-found
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label as string}
            color={isFocused ? primaryColor : inactiveColor}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
