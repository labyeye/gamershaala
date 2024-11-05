import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '90%',
          height: '10%',
        }}>
        <Text style={styles.name}>Personalised</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Gamer</Text>
          <Text style={styles.nameShaala}> Selection</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 70,
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode="fill"
          source={require('../../assets/images/phone.png')}
        />
        <TouchableOpacity
          style={{
            height: '11%',
            width: '21%',
            alignSelf: 'flex-end',
            marginBottom: 300,
          }} onPress={() => {
            navigation.navigate('ChooseScreen')
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
