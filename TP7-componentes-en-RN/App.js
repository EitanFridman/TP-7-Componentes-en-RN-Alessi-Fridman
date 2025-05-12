import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextComponent } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    
      <ImageBackground
       source={{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
      style = {styles.backgroundImage}
      resizemode = "cover">
      <Text style={styles.text}>Mi</Text>
      </ImageBackground>

      <View style = {styles.card}>
      <Image 
      source ={require('./assets/images/profile.jpg')}
      style = {styles.image}/>
      </View>
      <Text style = {styles.nombre}> Rabin Iztak</Text>
      <Text
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',   
  },

});
