import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';

const data = [
  { id: '1', image: require('../../../../assets/images/bgmicard.png'), title: 'Earbuds 1' },
  { id: '2', image: require('../../../../assets/images/bgmicard.png'), title: 'Earbuds 2' },
  { id: '3', image: require('../../../../assets/images/bgmicard.png'), title: 'Earbuds 3' },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const SPACING = 10;

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: width * 0.1 }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          // 3D tilt along Y and slight X-axis tilt for depth
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['30deg', '0deg', '-30deg'], // Y-axis rotation for 3D effect
            extrapolate: 'clamp',
          });

          const rotateX = scrollX.interpolate({
            inputRange,
            outputRange: ['5deg', '0deg', '-5deg'], // X-axis rotation for slight tilt
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <View style={styles.cardContainer}>
              <Animated.View
                style={[
                  styles.card,
                  {
                    transform: [
                      { perspective: 1000 },
                      { scale },
                      { rotateY },
                      { rotateX }, // Added X-axis rotation for depth
                    ],
                    opacity,
                  },
                ]}
              >
                {opacity < 1 ? (
                  <BlurView
                    style={StyleSheet.absoluteFill}
                    blurType="light"
                    blurAmount={10}
                  />
                ) : null}

                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: ITEM_WIDTH,
    marginHorizontal: SPACING,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: ITEM_WIDTH * 0.6,
    borderRadius: 15,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
