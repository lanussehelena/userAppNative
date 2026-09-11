import { StyleSheet, Text, View } from 'react-native';
import UsersScreen from './src/screens/UsersScreen';

export default function App() {
  return (
    <View>
      <UsersScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
