import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import LinkButton from '../../components/LinkButton';
import myColors from '../../constants/colorSheet';


export default function Tab_1() {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.background}>
        <View>
          <Text style={styles.title}>Tab_1 Page</Text>
          <StatusBar style="auto" />
          <LinkButton page="Tab_3" title="Next Tab" />

          
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />

          <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.paragraph}>Normal checkbox</Text>
          </View>

          <Button title="Show Alert" onPress={() => Alert.alert("Hello", "This is an alert")} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 15,
    color: 'white',
  },
  checkbox: {
    margin: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 15,
  },
});
