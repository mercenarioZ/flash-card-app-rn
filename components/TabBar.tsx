import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const primaryColor = "#0891b1";
  const inactiveColor = "#73737373";

  const icons: { [key: string]: (props: any) => JSX.Element } = {
    index: (props: any) => (
      <AntDesign
        name="home"
        size={24}
        {...props}
      />
    ),
    explore: (props: any) => (
      <Feather
        name="compass"
        size={24}
        {...props}
      />
    ),
  };

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
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            {icons[route.name]({
              color: isFocused ? primaryColor : inactiveColor,
            })}
            <Text
              style={{
                color: isFocused ? primaryColor : inactiveColor,
              }}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
