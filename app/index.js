import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <StatusBar style="auto" />
      <LinkButton page = "About" title="Name"/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
