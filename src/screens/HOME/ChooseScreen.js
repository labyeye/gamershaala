import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';

const ChooseScreen = ({navigation}) => {
  const {width, height} = useWindowDimensions();

  // Data for the game cards
  const gameCards = [
    {
      id: '1',
      title: '',
      image: require('../../assets/images/bgmicard.jpg'),
      onPress: () => navigation.navigate('BgmiDashboard'),
    },
    {
      id: '2',
      title: '(Coming Soon)',
      image: require('../../assets/images/valocard.jpg'),
      onPress: () => {}, // No action for now
    },
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width: width * 0.8,
          height: height > 700 ? height * 0.65 : height * 0.7,
        },
      ]}
      onPress={item.onPress}
    >
      <Image
        source={item.image}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={[styles.headerContainer, {width: width * 0.9}]}>
        <Text style={styles.headerText}>Choose Your</Text>
        <Text style={styles.headerHighlight}>Game</Text>
      </View>

      {/* FlatList Carousel */}
      <FlatList
        data={gameCards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width * 0.8 + 20} // Width of card + spacing
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
  },
  headerHighlight: {
    color: '#FF6347',
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
  },
  flatListContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '90%',
    borderRadius: 15,
  },
  cardTitle: {
    marginTop: 10,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ChooseScreen;
