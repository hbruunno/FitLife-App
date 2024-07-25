import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Axios from 'axios';
import moment from 'moment';

export default function HomeScreen() {
  const [lista, setLista] = useState([]);
  const [novosCadastros, setNovosCadastros] = useState(0);
  const [totalRendimento, setTotalRendimento] = useState(0);

  useEffect(() => {
    Axios.get("http://192.168.0.118:3001/itens")
      .then((response) => {
        const alunos = response.data.map(item => ({
          ...item,
          key: item.id.toString(),
          nota: parseFloat(item.nota.replace(',', '.')) // Converte nota de string para número
        }));
        setLista(alunos);
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
      });
  }, []);

  useEffect(() => {
    const hoje = moment();
    const cadastrosRecentes = lista.filter(item => {
      const dataCadastro = item.entrada;
      const dataCadastroNumerica = formatarDataNumerica(dataCadastro);

      if (!dataCadastroNumerica) return false;
      const diffDays = hoje.diff(dataCadastroNumerica, 'days');
      return diffDays <= 7 && diffDays >= 0;
    });

    setNovosCadastros(cadastrosRecentes.length);

    const rendimentoTotal = lista.reduce((total, item) => total + item.nota, 0);
    setTotalRendimento(rendimentoTotal);
  }, [lista]);

  const formatarDataNumerica = (dataCadastro) => {
    if (/^\d{2}[\.-]\d{2}[\.-]\d{4}$/.test(dataCadastro)) {
      const [dia, mes, ano] = dataCadastro.split(/[\.-]/);
      return moment(`${ano}-${mes}-${dia}`, 'YYYY-MM-DD');
    }
    return null;
  };

  return (
    <ImageBackground
    source={require('../img/fundo1.jpg')} // Caminho para sua imagem de fundo
    style={styles.background}
    imageStyle={{ opacity: 0.08 }} // Opacidade da imagem de fundo
  >
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FitLife</Text>
      <View style={styles.widget}>
        <Text style={styles.txtoWid}>Total de Alunos: {lista.length}</Text>
      </View>
      <View style={styles.widget}>
        <Text style={styles.txtoWid}>Novos alunos nos últimos 7 dias: {novosCadastros}</Text>
      </View>
      <View style={styles.widget}>
        <Text style={styles.txtoWid}>Total de rendimento: R$ {totalRendimento.toFixed(2)}</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  widget: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  }, 
  txtoWid: {
    fontSize: 20,
    padding: 15,
    color: '#666666',
  },
});
