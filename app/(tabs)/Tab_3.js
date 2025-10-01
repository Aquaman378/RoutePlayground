import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LinkButton from '../../components/LinkButton';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Linking } from 'react-native';

export default function Tab_3() {
  const handlePress = () => {
    Linking.openURL('https://youtu.be/st1un8aV98w');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab_3 Page </Text>
      <StatusBar style="auto" />
    <LinkButton page = "Profile" title = "Profile"/>
      <View>
        <Button title="New Features: Press Me" onPress={handlePress} />
      </View>
    </SafeAreaView>
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
