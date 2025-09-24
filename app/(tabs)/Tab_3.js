import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function Tab_3() {
  return (
    <View style={styles.container}>
      <Text>Tab_3 Page </Text>
      <StatusBar style="auto" />

      <LinkButton page = "Profile" title = "BBBBB"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Cyan',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
