import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.parteSuperior}>
        <Text>Parte Superior</Text>
      </View>

      <View style={styles.parteInferior}>
        <Text>Parte Inferior</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  parteSuperior: {
    flex: 0.30,
    width: '100%',
    backgroundColor: '#ecfb68',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parteInferior: {
    flex: 1,
    width: '100%',
    backgroundColor: '#8a68fb',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
