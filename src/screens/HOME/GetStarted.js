import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
const GetStarted = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: (width > 700 ) ? 500 : 350,
          height: (height > 700 ) ? 80 : 80,
        }}>
        <Text style={styles.name}>Personalised</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Gamer</Text>
          <Text style={styles.nameShaala}> Selection</Text>
        </View>
      </View>
      <View
        style={{
          width: (width > 700 ) ? 500 : 300,
          height: (height > 700 ) ? 600 : 460,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{width: (width > 600 ) ? 500 : 750, height: (height > 600 ? 400 : 100), alignSelf: 'center',justifyContent: 'center'}}
          source={require('../../assets/images/phone.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '90%',
          alignItems: 'flex-end',
        }}>
       
        <TouchableOpacity
          style={{
            height: (height > 700 ) ? 80 : 80,
            width: (width > 700 ) ? 100 : 80,
            justifyContent: 'flex-end',
            position: 'absolute',
          }}
          onPress={() => {
            navigation.navigate('ChooseScreen');
          }}>
          <Image
            style={{width: '70%', height: '70%'}}
            source={require('../../assets/images/button.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    textAlign: 'right',
    width: '100%',
    height: '100%',
  },
  name: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
  },
  nameShaala: {
    color: '#FF6347', // Customize color for "Shaala"
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
  },
});
export default GetStarted;
