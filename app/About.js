import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Page </Text>
      <StatusBar style="auto" />

      <LinkButton page = "Contact" title = "HHHHH"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
