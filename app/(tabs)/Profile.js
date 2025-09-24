import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page </Text>
      <StatusBar style="auto" />

      <LinkButton page = "Tab_1" title = "Test 1"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
