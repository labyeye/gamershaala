import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const ChooseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '90%',
          height: '20%',
        }}>
        <Text style={styles.name}>Choose Your</Text>
        <Text style={styles.nameShaala}>Game</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.bgmicard} onPress={() => {
          navigation.navigate("BgmiDashboard")
        }}>
          <Image
            style={{alignSelf: 'center', borderRadius: 10}}
            source={require('../../assets/images/bgmicard.png')}
          />
          <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#fd9c15',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 36,
                  textAlign: 'center',
                }}>
                B
              </Text>
              <Text
                style={{
                  color: '#fd9c15',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 36,
                  textAlign: 'center',
                }}>
                G
              </Text>
              <Text style={styles.bgminame}>M</Text>
              <Text
                style={{
                  color: '#07c60a',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 36,
                  textAlign: 'center',
                }}>
                I
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.valocard}>
          <Image
            style={{alignSelf: 'center', borderRadius: 10}}
            source={require('../../assets/images/valocard.png')}
          />
          <View>
            <Text
              style={{
                color: '#fa4449',
                fontFamily: 'Poppins-Regular',
                fontSize: 30,
                textAlign: 'center',
              }}>
              VALORANT             (Comming Soon)
            </Text>
          </View>
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

  name: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
  },
  bgminame: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
    textAlign: 'center',
  },
  nameShaala: {
    color: '#FF6347', // Customize color for "Shaala"
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
  },
  bgmicard: {
    width: '100%',
    height: '100%',
  },
  valocard: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
  },
});
export default ChooseScreen;
