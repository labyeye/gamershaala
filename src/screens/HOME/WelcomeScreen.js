import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler,runOnJS } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const slideX = useSharedValue(0); // Shared value to track X position of the circle

  // Gesture handler for managing the sliding animation
  const navigateToHome3 = () => {
    navigation.navigate("GetStarted");
  };

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      'worklet'; // Mark as worklet
      if (e.translationX < 0) {
        slideX.value = -e.translationslideX;
      } else {
        slideX.value = e.translationX;
      }
    },
    onEnd: () => {
      'worklet'; // Mark as worklet
      if (slideX.value < 150) {
        slideX.value = withSpring(10);
      } else {
        slideX.value = withSpring(240);
        runOnJS(navigateToHome3)(); // Use runOnJS to call navigation function
      }
    },
  });

  

  // Style for the animated icon
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: slideX.value }],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", width: "90%" }}>
        <Text style={styles.name}>Welcome to</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Gamer</Text>
          <Text style={styles.nameShaala}>Shaala</Text>
        </View>
        <Text style={styles.tagline}>Like a gaming school with tips and strategies.</Text>
      </View>

      {/* Slider component */}
      <View style={styles.sliderContainer}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.iconContainer, animatedStyle]}>
            <Text style={styles.iconText}>{">"}</Text>
          </Animated.View>
        </PanGestureHandler>
        <Text style={styles.buttonText}>Get Started</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 39,
  },
  tagline: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  nameShaala: {
    color: "#FF6347", // Customize color for "Shaala"
    fontFamily: "Poppins-Regular",
    fontSize: 39,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 50,
    width: 200, // Width of the slider container
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f28c34",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // So it can slide over the button text
  },
  iconText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 50, // Adjust to add padding on the left of the text
  },
});
export default WelcomeScreen;
