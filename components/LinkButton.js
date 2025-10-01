import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Link } from 'expo-router';

export default function LinkButton({page,title, backgroundColor}) {
  return (
    <View style={styles.container}>
      <Link href={page}>{title}{backgroundColor}</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding:20,
    borderRadius: 50,
    width: 120,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
