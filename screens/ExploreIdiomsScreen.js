import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config';

const ExploreIdiomsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIdioms, setFilteredIdioms] = useState([]);

  useEffect(() => {
    fetchIdioms();
  }, []);

  const fetchIdioms = async () => {
    try {
      // Access the Firestore collection "idioms"
      const querySnapshot = await firebase.firestore().collection('idioms').get();
      const idiomsData = querySnapshot.docs.map(doc => doc.data());
      setFilteredIdioms(idiomsData);
    } catch (error) {
      console.error('Error fetching idioms:', error);
    }
  };

  const handleSearch = text => {
    const filtered = filteredIdioms.filter(idiom =>
      idiom.language.toLowerCase().includes(text.toLowerCase()) ||
      idiom.idiom.toLowerCase().includes(text.toLowerCase()) ||
      idiom.meaning.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setFilteredIdioms(filtered);
  };

  const renderIdiomItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('IdiomDetails', { idiom: item })}>
      <Text style={styles.idiomTitle}>{item.idiom}</Text>
      <Text style={styles.idiomMeaning}>{item.meaning}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['#16355D', '#405990D3', '#31C7B1D0']} style={{flex:1}}>
        <View style={styles.container}>
          <TextInput
            style={[styles.searchInput, {color:'white'}]}
            placeholder="Search idioms by language, keyword..."
            placeholderTextColor="white"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <FlatList
            data={filteredIdioms}
            renderItem={renderIdiomItem}
            keyExtractor={item => item.idiom}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  idiomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  idiomMeaning: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
});

export default ExploreIdiomsScreen;
