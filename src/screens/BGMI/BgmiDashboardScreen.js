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
  ScrollView,
} from 'react-native';

import data from '../../json/card.json';
import weapondata from '../../json/weapons.json';
import throwdata from '../../json/throwables.json';
import character from '../../json/characters.json';

const BgmiDashboard = ({navigation}) => {
  const [newsData, setNewsData] = useState([]);
  const [weaponData, setWeaponData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [throwData, setThrowData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setNewsData(data);
    setWeaponData(weapondata);
    setCharacterData(character);
    setThrowData(throwdata);
  }, []);

  const filterData = (list, key) =>
    list.filter(
      item =>
        item[key] && item[key].toLowerCase().includes(searchText.toLowerCase()),
    );

  const filteredNewsData = filterData(newsData, 'title');
  const filteredWeaponData = filterData(weaponData, 'title');
  const filteredCharacterData = filterData(characterData, 'title');
  const filteredThrowData = filterData(throwData, 'title');

  const newscard = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDate}>
        <Text style={styles.dateLabel}>Date: </Text>
        {item.date}
      </Text>
    </View>
  );

  const charcard = ({item}) => {
    const handlecharNav = () => {
      if (item.type === 'Victor') {
        navigation.navigate('Victor', {weapon: item});
      } else if (item.type === 'Sniper') {
        navigation.navigate('Sniper', {weapon: item});
      }
    };
    return (
      <TouchableOpacity onPress={handlecharNav}>
        <View style={styles.charcardd}>
        <Image
          source={{uri: item.image}}
          style={styles.charcard}
          resizeMode="fill"
        />
      </View>
      </TouchableOpacity>
    );
  };

  const weaponcard = ({item}) => {
    const handleNavigation = () => {
      if (item.type === 'Assault Rifle') {
        navigation.navigate('AssualtRifles', {weapon: item});
      } else if (item.type === 'Sniper') {
        navigation.navigate('Sniper', {weapon: item});
      } else if (item.type === 'Pistol') {
        navigation.navigate('Pistol', {weapon: item});
      } else if (item.type === 'Throwables') {
        navigation.navigate('Throwables', {weapon: item});
      }
    };
    return (
      <TouchableOpacity onPress={handleNavigation}>
        <View style={styles.wepcard}>
          <Image source={{uri: item.image}} style={styles.wepcardImage} />
          <Text style={styles.wepcardTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const throwcard = ({item}) => (
    <View style={styles.wepcard}>
      <Image source={{uri: item.image}} style={styles.throwcardImage} />
      <Text style={styles.throwcardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView
      style={{backgroundColor: '#121212'}}
      contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.name}>News and </Text>
          <Text style={styles.nameShaala}>Updates</Text>
        </View>

        <FlatList
          data={filteredNewsData}
          renderItem={newscard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.weaponsTitleContainer}>
          <Text style={styles.name}>Weapon</Text>
          <Text style={styles.nameShaala}>s</Text>
        </View>

        <FlatList
          data={filteredWeaponData}
          renderItem={weaponcard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.weaponsTitleContainer}>
          <Text style={styles.name}>Character</Text>
          <Text style={styles.nameShaala}>s</Text>
        </View>

        <FlatList
          data={filteredCharacterData}
          renderItem={charcard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.charflatlist}
        />
      </SafeAreaView>
    </ScrollView>
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
  titleContainer: {
    flexDirection: 'row',
    width: '95%',
    marginBottom: 10,
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
  flatListContainer: {
    paddingHorizontal: 5,
    height: 180,
  },
  charflatlist: {
    paddingHorizontal: 5,
    height: 200,
  },
  card: {
    width: 200,
    height: 160,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 22,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cardDate: {
    marginTop: 0,
    fontSize: 12,
    color: '#fff',
  },
  dateLabel: {
    color: '#ff8c42',
    fontWeight: 'bold',
  },
  wepcard: {
    width: 140,
    height: 170,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  wepcardImage: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  wepcardTitle: {
    marginTop: 22,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  throwcard: {
    width: 140,
    height: 170,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  throwcardImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  charcard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  charcardd: {
    width: 120,
    height: 200,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  throwcardTitle: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default BgmiDashboard;
