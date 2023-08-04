import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const IdiomDetailsScreen = ({ route }) => {
  const { idiom } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.idiomTitle}>{idiom.idiom}</Text>
      <Text style={styles.infoText}>Country: {idiom.country}</Text>
      <Text style={styles.idiomMeaning}>{idiom.meaning}</Text>
      <Text style={styles.infoText}>Translated Meaning: {idiom.translatedMeaning}</Text>
      <Text>{idiom.examples}</Text>
      <Text>{idiom.examplesTranslation}</Text>
      {/* Check if countryVariations exists */}
      {idiom.countryVariations && (
        <View>
          <Text style={styles.variationsTitle}>Country Variations:</Text>
          {Object.keys(idiom.countryVariations).map((language) => (
            <View key={language}>
              <Text style={styles.languageText}>Language: {language}</Text>
              {idiom.countryVariations[language].map((variation, index) => (
                <View key={index}>
                  <Text style={styles.countryText}>Country: {variation.country}</Text>
                  <Text style={styles.variationText}>Variation: {variation.variation}</Text>
                  <Text style={styles.exampleTitle}>Examples:</Text>
                  {variation.examples.map((example, exampleIndex) => (
                    <Text key={exampleIndex} style={styles.exampleText}>
                      {example}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default IdiomDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  idiomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  idiomMeaning: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    color: '#777',
  },
  variationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  countryText: {
    fontSize: 16,
    color: '#555',
  },
  variationText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  exampleText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 20,
    marginBottom: 5,
  },
});
