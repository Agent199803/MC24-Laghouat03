import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MC24 Laghouat</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Create Match</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Join Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e783c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 40
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10
  },
  text: {
    color: 'white'
  }
});
