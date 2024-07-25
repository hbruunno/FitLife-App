import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Inicio() {
  const navigation = useNavigation();

  const CadastrarAluno = () => {
    navigation.navigate('CadastrarAluno');  
  }
  const CadastrarPersonal = () => {
    navigation.navigate('CadastrarPersonal');  
  }
  const ListarAluno = () => {
    navigation.navigate('ListarAluno');  
  }
  const ListarPersonal = () => {
    navigation.navigate('ListarPersonal');  
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={CadastrarAluno} style={styles.button}>
        <Text style={styles.buttonText}>CadastrarAluno</Text>
      </TouchableOpacity>  
     
      <TouchableOpacity onPress={ListarAluno} style={styles.button}>
        <Text style={styles.buttonText}>ListarAluno</Text>
      </TouchableOpacity>
      
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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});