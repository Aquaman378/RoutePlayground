import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Link } from 'expo-router';

export default function LinkButton({page,title}) {
  return (
    <View style={styles.container}>
      <Link href={page}>{title}</Link>
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
