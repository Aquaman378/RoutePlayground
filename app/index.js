import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LinkButton from '../components/LinkButton';

export default function MainPage() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === 'dark' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />

      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />

      <View style={styles.content}>
        <Text style={[styles.text, themeTextStyle]}>Main Page</Text>
        <LinkButton style={[styles.button, styles.text]} page="Tab_1" title="Tabs Page" />
        <Text style={[styles.text, themeTextStyle]}>Next page</Text>
      </View>
      <View style={[styles.content]}>
      <LinkButton style={styles.button} page="About" title="Name" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: 'orange',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // full screen gradient
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    borderColor: "blue",
  },
  text: {
    fontSize: 16,
    color:'white',
    marginVertical: 8,
  },
  lightThemeText: {
    color: '#000',
  },
  darkThemeText: {
    color: '#fff',
  },
});
