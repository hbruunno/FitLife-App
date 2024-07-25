import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import NovoAluno from './NovoAluno';
import  Axios from 'axios';


export default function Listar({route}) {

  
 
  const [lista, setLista] = useState([
    {nome: "Bruno Henrique", nascimento: "16-02-96", cpf: '0450', tel:"52825", key: '1'},
    {nome: "Henrique Bruno", nascimento: "16-02-96", cpf: '0450', tel:"52825", key: '2'},
    {nome: "Bruno Rocha", nascimento: "16-02-96", cpf: '0450', tel:"52825", key: '3'},
  ]);

  //delete

  const deletarItem = (key) => {
    Axios.delete(`http://192.168.0.117:3001/itens/${key}`)
  }
  

  useEffect(() => {
    Axios.get("http://192.168.0.117:3001/itens"). then(
      (response) => {
        setLista(response.data)
      }
    )
  })

  

  return (
    <View style={styles.container}>
      <Text>LISTA DE ALUNOS:</Text>
      <ScrollView style={styles.conteudo}>
        
          <FlatList
          data={lista}
          renderItem={({item}) => (
            <NovoAluno props={item} funcao={deletarItem}/>
          )}/>              
        
       </ScrollView>

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

