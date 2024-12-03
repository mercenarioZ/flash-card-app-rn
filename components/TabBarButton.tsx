import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from "react-native-reanimated";

import { icons } from "@/assets/icons";
import { useEffect } from "react";

interface TabBarButtonProps {
  isFocused: boolean;
  label: string;
  routeName: string;
  color: string;
  style?: any;
  onPress: () => void;
  onLongPress: () => void;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
  isFocused,
  label,
  routeName,
  color,
  onPress,
  onLongPress,
}) => {
  const Icon = icons[routeName];
  const scale = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(1, { duration: 300 });
    } else {
      scale.value = withSpring(0, { duration: 300 });
    }
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.6]);
    const topSpaceValue = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top: topSpaceValue,
    };
  });

  const animatedLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Animated.View style={[animatedIconStyle]}>
        <Icon color={color} />
      </Animated.View>

      <Animated.Text
        style={[
          animatedLabelStyle,
          {
            color,
            fontWeight: isFocused ? "bold" : "normal",
          },
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
});

