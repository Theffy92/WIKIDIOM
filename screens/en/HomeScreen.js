import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const handleContinueAsGuest = () => {
    navigation.navigate('ExploreIdioms');
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the LoginScreen
  };

  const handleRegister = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUpScreen
  };

  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['#09203F', '#3b5998', '#1EAE98']} style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What is an idiom?</Text>
            <Text style={styles.subtitle}>An idiom is a common expression that may not make sense when translated word for word so we have to "make it make sense". They often convey a specific idea or convey an abstract concept in a more concise or vivid way. We use idioms in our everyday language without even realizing it. For instance, the phrase "Hold your horses" means to slow down or be patient, even though it has nothing to do with actually holding horses.</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleContinueAsGuest}>
            <Text style={styles.buttonText}>Continue as a guest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ba55d3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    margin: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    margin: 20,
  }
});

export default HomeScreen;
