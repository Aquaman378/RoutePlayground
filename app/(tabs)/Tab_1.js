import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function Tab_1() {
  return (
    <View style={styles.container}>
      <Text>Tab_1 Page </Text>
      <StatusBar style="auto" />

      <LinkButton page = "Tab_3" title = "Doom"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Orange',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
