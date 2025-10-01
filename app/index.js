import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LinkButton from '../components/LinkButton';

export default function MainPage() {
  
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer; //condition ? expressionIfTrue : expressionIfFalse;
  
  return (
    <View style={styles.container}>

      <Text style={[styles.text, themeTextStyle]}>Main Page</Text>
      <StatusBar style="auto" />
      <View style={styles.button}>
        <LinkButton page="About" title="Name" />
        <LinkButton page="Tab_1" title="Test 1" />
        <Text style={styles.text}>Sign in with Facebook</Text>
      </View>
      
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "white"
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
