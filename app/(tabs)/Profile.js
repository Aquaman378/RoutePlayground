import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../../components/LinkButton';
import myColors from '../../constants/colorSheet';

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
    backgroundColor: myColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
