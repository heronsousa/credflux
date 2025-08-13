import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';


function Progress({
  value,
  className,
  ...props
}: { className?: string; value: number }) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  return (
    <View className="h-2 bg-gray-200 rounded-full overflow-hidden" {...props}>
      <Animated.View
        style={{ width: widthInterpolated }}
        className="h-full bg-teal-600 rounded-full"
      />
    </View>
  );
}

export { Progress };
