import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';

import data from '../../../../json/assaultrifle.json';

const AssualtRifles = () => {
  const [assualtRifles, setAssualtRifles] = useState([]);

  useEffect(() => {
    setAssualtRifles(data);
  }, []);

  const ascard = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <View style={{width:"60%"}}>
        <Text style={styles.cardTitle}>{item.details}</Text>
        <Text style={{color:"#FF6347",fontSize:11,marginTop:25}}>Get Details -></Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/images/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.weaponsTitleContainer}>
        <Text style={styles.name}>Assault</Text>
        <Text style={styles.nameShaala}> Rifles</Text>
      </View>

      <View style={styles.flatListWrapper}>
        <FlatList
          data={assualtRifles}
          renderItem={ascard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  weaponsTitleContainer: {
    flexDirection: 'row',
    width: '95%',
    marginBottom: 10, 
  },
  name: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 27,
  },
  nameShaala: {
    color: '#FF6347',
    fontFamily: 'Poppins-Regular',
    fontSize: 27,
  },
  flatListWrapper: {
    flex: 1,
    width: '100%',
  },
  flatListContainer: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  card: {
    width: 325,
    height: 110,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    textAlign: 'justify',
  },
});

export default AssualtRifles;
