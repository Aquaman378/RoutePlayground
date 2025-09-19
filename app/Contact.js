import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <StatusBar style="auto" />

      <LinkButton page = "/" title = "/"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
