import React from 'react';
import { StyleSheet, View, FlatList, Alert, Text, Button, Switch, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import Aluno from './Aluno';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';



export default function ListarAluno() {
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();
  const [valorLigado, setValorLigado] = useState(false);


  const confirmarDelecao = (key) => {
    Alert.alert(
      "Confirmação",
      "Deseja realmente apagar o aluno?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            deletarItem(key)
           // navigation.navigate('Home'); // Navega para a tela principal
           carregarDados()
           
          },
    
        }
      ],
      { cancelable: false }
    );
  };

  const deletarItem = (key) => {
    Axios.delete(`http://192.168.0.118:3001/item/${key}`)
      .then((response) => {
        console.log("Item deletado:", response.data);
        setLista((prevLista) => prevLista.filter(item => item.id != key));
        carregarDados();
        
        Alert.alert(
          "Sucesso",
          "O aluno foi deletado com sucesso!",
          [
            { text: "OK", onPress: () => navigation.navigate('Home') }
          ]
        );
       
      })
      .catch((error) => {
        console.error("Erro ao deletar item:", error);
      });
  };

  const atualizarItem = (key, alunoEditado) => {
    Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
      .then((response) => {
        console.log("Item atualizado:", response.data);
        setLista((prevLista) => prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item));
      })
      .catch((error) => {
        console.error("Erro ao atualizar item:", error);
      });
  };

  const carregarDados = () => {
    Axios.get("http://192.168.0.118:3001/itens")
      .then((response) => {
        let sortedData = response.data.map(item => ({ ...item, key: item.id.toString() }));
        if (valorLigado) {
          sortedData = sortedData.sort((a, b) => a.nome.localeCompare(b.nome));
        }
        setLista(sortedData);
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
      });
  };

  useEffect(() => {
    carregarDados();
  }, [valorLigado]);

  

  return (

    <ImageBackground
      source={require('../img/fundo1.jpg')} // Caminho para sua imagem de fundo
      style={styles.background}
      imageStyle={{ opacity: 0.08 }} // Opacidade da imagem de fundo
    >
    <View style={styles.container}>
      <View style={styles.titulo}>

              <Text style={styles.texttitulo}>Alunos Cadastrados</Text>
              <View style={styles.switch}>
                <Text>Ordem de cadastro:</Text>              
                <Switch
                  value={valorLigado}
                  onValueChange={(valor) => {
                  setValorLigado(valor);
                  carregarDados(); 
                  }}
                  thumbColor="#1E4363"
                 trackColor={{ false: '#247BA0', true: '#247BA0' }}
                />
               <Text>Ordem alfabética:</Text>                
              </View>

      </View>
      <FlatList
        style={styles.flatlist}
        data={lista}
        renderItem={({ item }) => (
          <View>
            <Aluno props={item} funcao={confirmarDelecao} atualizarFuncao={atualizarItem} />
          </View>
        )}
      />
       
       
       

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Cobrir toda a área disponível
    justifyContent: 'center', // Centralizar conteúdo na vertical
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  flatlist: {
    width: '100%',
    height: '100%',  
    paddingTop: 20, 
    
  },
  titulo: {
    marginTop: 25,
    width: '100%',
    height: '7%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  texttitulo: {
    fontWeight: 'bold',
    fontSize: 30,    
    padding: 5,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,

  }
});
