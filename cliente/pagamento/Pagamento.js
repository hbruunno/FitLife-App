// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import Axios from 'axios';

// import { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import AlunoPagamento from './AlunoPagamento';

// export default function Pagamento() {

  
//   const [lista, setLista] = useState([]);
  
//   const navigation = useNavigation();

//   const atualizarItem = (key, alunoEditado) => {
//     Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
//       .then((response) => {
//         console.log("Item atualizado:", response.data);
//         setLista((prevLista) => prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item));
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar item:", error);
//       });
//   };

//   useEffect(() => {
//         Axios.get("http://192.168.0.118:3001/itens")
//           .then((response) => {
//             setLista(response.data.map(item => ({ ...item, key: item.id.toString() })));
//           })
//           .catch((error) => {
//             console.error("Erro ao buscar itens:", error);
//           });
//       }, []);
 
//   return (
//     <View style={styles.container}>
//       <View style={styles.titulo}>
//         <Text style={styles.texttitulo} >Tabela de Pagamento:</Text>
//       </View>
//         <Text style={styles.text}>Alunos a pagar:</Text>
      
//       <FlatList
//         style={styles.flatlist}
//         data={lista}
//         renderItem={({ item }) => (
//           <View>
//             {!item.pagamento? (

//               <AlunoPagamento item ={item} atualizarFuncao={atualizarItem}/>
//             ) : ('')}
            
//           </View>
//         )}
//       />
//       <Text style={styles.text2}>Pagamento Realizado:</Text>
//       <FlatList
//         style={styles.flatlist}
//         data={lista}
//         renderItem={({ item }) => (
//           <View>
//             {item.pagamento ? (
//               <AlunoPagamento item ={item} />
              
//             ) : ('')}

//           </View>
//         )}
//       />

      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titulo: {
//     marginTop: 25,
//     width: '100%',
//     height: '7%',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   texttitulo: {
//     fontWeight: 'bold',
//     fontSize: 30,    
//     padding: 5,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 20,    
//     padding: 5,
//     justifyContent: 'flex-start'
//   },
//   text2: {
//     fontWeight: 'bold',
//     fontSize: 20,    
//     padding: 5,
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//     paddingBottom: 20

//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';
// import Axios from 'axios';

// import { useNavigation } from '@react-navigation/native';
// import AlunoPagamento from './AlunoPagamento';

// export default function Pagamento() {
//   const [lista, setLista] = useState([]);
//   const navigation = useNavigation();
//   const [mostrarPagamentosPendentes, setMostrarPagamentosPendentes] = useState(true);

//     const atualizarItem = (key, alunoEditado) => {
//     Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
//       .then((response) => {
//         console.log("Item atualizado:", response.data);
//         setLista((prevLista) =>
//           prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item)
//         );
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar item:", error);
//       });
//   };

//   useEffect(() => {
//     Axios.get("http://192.168.0.118:3001/itens")
//       .then((response) => {
//         setLista(response.data.map(item => ({ ...item, key: item.id.toString() })));
//       })
//       .catch((error) => {
//         console.error("Erro ao buscar itens:", error);
//       });
//   }, []);

//   const listaFiltrada = mostrarPagamentosPendentes ? lista.filter(item => !item.pagamento) : lista.filter(item => item.pagamento);

//   return (
//     <View style={styles.container}>
//       <View style={styles.titulo}>
//         <Text style={styles.texttitulo}>Tabela de Pagamento:</Text>
//       </View>
//       <Switch
//         value={mostrarPagamentosPendentes}
//         onValueChange={setMostrarPagamentosPendentes}
//       />
//       {mostrarPagamentosPendentes && (
//         <Text style={styles.text}>Alunos a pagar:</Text>
//       )}
//       {mostrarPagamentosPendentes && (
        
//         <FlatList
//           style={styles.flatlist}
//           data={listaFiltrada}
//           renderItem={({ item }) => (
//             <View>
//               <AlunoPagamento item={item} atualizarFuncao={atualizarItem} />
//             </View>
//           )}
//         />
//       )}
//       {!mostrarPagamentosPendentes && (
//         <Text style={styles.text}>Pagamento Realizado:</Text>
//       )}
//       {!mostrarPagamentosPendentes &&       
//       (
//         <FlatList
//           style={styles.flatlist}
//           data={listaFiltrada}
//           renderItem={({ item }) => (
//             <View>
//               <AlunoPagamento item={item} />
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titulo: {
//     marginTop: 25,
//     width: '100%',
//     height: '7%',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   texttitulo: {
//     fontWeight: 'bold',
//     fontSize: 30,    
//     padding: 5,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 20,    
//     padding: 5,
//     justifyContent: 'flex-start'
//   },
//   text2: {
//     fontWeight: 'bold',
//     fontSize: 20,    
//     padding: 5,
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//     paddingBottom: 20

//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Alert } from 'react-native';
// import Axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import AlunoPagamento from './AlunoPagamento';

// export default function Pagamento() {
//   const [lista, setLista] = useState([]);
//   const [mostrarPagamentosPendentes, setMostrarPagamentosPendentes] = useState(true);

//   const navigation = useNavigation();

//   const atualizarItem = (key, alunoEditado) => {
//     Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
//       .then((response) => {
//         console.log("Item atualizado:", response.data);
//         setLista((prevLista) =>
//           prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item)
//         );
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar item:", error);
//       });
//   };

//   useEffect(() => {
//     Axios.get("http://192.168.0.118:3001/itens")
//       .then((response) => {
//         setLista(response.data.map(item => ({ ...item, key: item.id.toString() })));
//       })
//       .catch((error) => {
//         console.error("Erro ao buscar itens:", error);
//       });
//   }, []);

//   const limparPagamentos = () => {
//     Axios.put("http://192.168.0.118:3001/limparPagamentos")
//       .then(() => {
//         // Atualiza o estado local para refletir que todos os pagamentos foram limpos
//         setLista(prevLista => prevLista.map(item => ({ ...item, pagamento: false })));
//         Alert.alert('Sucesso', 'Pagamentos limpos com sucesso.');
//       })
//       .catch((error) => {
//         console.error("Erro ao limpar pagamentos:", error);
//         Alert.alert('Erro', 'Erro ao limpar pagamentos.');
//       });
//   };

//   const listaFiltrada = mostrarPagamentosPendentes ? lista.filter(item => item.pagamento) : lista.filter(item => !item.pagamento);

//   return (
//     <View style={styles.container}>
//       <View style={styles.titulo}>
//         <Text style={styles.texttitulo}>Tabela de Pagamento:</Text>
//       </View>
//       <View style={styles.switch}>
//         <Text style={styles.textoswitch}>Alunos a pagar</Text>
//         <Switch
//           value={mostrarPagamentosPendentes}
//           onValueChange={setMostrarPagamentosPendentes}
//           thumbColor="#1E4363"
//           trackColor={{ false: '#247BA0', true: '#247BA0' }}
//         />
//         <Text style={styles.textoswitch}>Pagamento Realizado</Text>
//       </View>

//       {mostrarPagamentosPendentes && (
//         <TouchableOpacity style={styles.button} onPress={limparPagamentos}>
//           <Text style={styles.buttonText}>Limpar Pagamento</Text>
//         </TouchableOpacity>
//       )}

//       {mostrarPagamentosPendentes && (
//         <FlatList
//           style={styles.flatlist}
//           data={listaFiltrada}
//           renderItem={({ item }) => (
//             <View>
//               <AlunoPagamento item={item} atualizarFuncao={atualizarItem} />
//             </View>
//           )}
//         />
//       )}

//       {!mostrarPagamentosPendentes && (
//         <FlatList
//           style={styles.flatlist}
//           data={listaFiltrada}
//           renderItem={({ item }) => (
//             <View>
//               <AlunoPagamento item={item} />
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'center',
//   },
//   titulo: {
//     marginTop: 25,
//     width: '100%',
//     height: '7%',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   texttitulo: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     padding: 5,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     padding: 5,
//     justifyContent: 'flex-start',
//   },
//   text2: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     padding: 5,
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   flatlist: {
//     width: '100%',
//   },
//   switch: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   textoswitch: {
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   button: {
//     backgroundColor: '#1E4363',
//     padding: 10,
//     width: '30%',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });


// esse aqui esta bem estruturado, falta somente ver o limpr dados
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity } from 'react-native';
// import Axios from 'axios';

// import { useNavigation } from '@react-navigation/native';
// import AlunoPagamento from './AlunoPagamento';

// export default function Pagamento() {
//   const [lista, setLista] = useState([]);
//   const navigation = useNavigation();
//   const [mostrarPagamentosPendentes, setMostrarPagamentosPendentes] = useState(true);

//     const atualizarItem = (key, alunoEditado) => {
//     Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
//       .then((response) => {
//         console.log("Item atualizado:", response.data);
//         setLista((prevLista) =>
//           prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item)
//         );
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar item:", error);
//       });
//   };

//   useEffect(() => {
//     Axios.get("http://192.168.0.118:3001/itens")
//       .then((response) => {
//         setLista(response.data.map(item => ({ ...item, key: item.id.toString() })));
//       })
//       .catch((error) => {
//         console.error("Erro ao buscar itens:", error);
//       });
//   }, []);

//   const limparPagamentos = () => {
//         Axios.put("http://192.168.0.118:3001/limparPagamentos")
//           .then(() => {
//             // Atualiza o estado local para refletir que todos os pagamentos foram limpos
//             setLista(prevLista => prevLista.map(item => ({ ...item, pagamento: false })));
//             Alert.alert('Sucesso', 'Pagamentos limpos com sucesso.');
//           })
//           .catch((error) => {
//             console.error("Erro ao limpar pagamentos:", error);
//             Alert.alert('Erro', 'Erro ao limpar pagamentos.');
//           });
//       };

//   const listaFiltrada = mostrarPagamentosPendentes ? lista.filter(item => !item.pagamento) : lista.filter(item => item.pagamento);

//   return (
//         <View style={styles.container}>
//           <View style={styles.titulo}>
//             <Text style={styles.texttitulo}>Tabela de Pagamento:</Text>
//           </View>
//           <View style={styles.switch}>
//             <Text style={styles.textoswitch}>Alunos a pagar</Text>
//             <Switch
//               value={mostrarPagamentosPendentes}
//               onValueChange={setMostrarPagamentosPendentes}
//               thumbColor="#1E4363"
//               trackColor={{ false: '#247BA0', true: '#247BA0' }}
//             />
//             <Text style={styles.textoswitch}>Pagamento Realizado</Text>
//           </View>
    
//           {mostrarPagamentosPendentes && (
//             <TouchableOpacity style={styles.button} >
//               <Text style={styles.buttonText}>Limpar Pagamento</Text>
//             </TouchableOpacity>
//           )}
    
//           {mostrarPagamentosPendentes && (
//             <FlatList
//               style={styles.flatlist}
//               data={listaFiltrada}
//               renderItem={({ item }) => (
//                 <View>
//                   <AlunoPagamento item={item} atualizarFuncao={atualizarItem} />
//                 </View>
//               )}
//             />
//           )}
    
//           {!mostrarPagamentosPendentes && (
//             <FlatList
//               style={styles.flatlist}
//               data={listaFiltrada}
//               renderItem={({ item }) => (
//                 <View>
//                   <AlunoPagamento item={item} />
//                 </View>
//               )}
//             />
//           )}
//         </View>
//       );
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         width: '100%',
//         alignItems: 'center',
//       },
//       titulo: {
//         marginTop: 25,
//         width: '100%',
//         height: '7%',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//       },
//       texttitulo: {
//         fontWeight: 'bold',
//         fontSize: 30,
//         padding: 5,
//       },
//       text: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         padding: 5,
//         justifyContent: 'flex-start',
//       },
//       text2: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         padding: 5,
//         justifyContent: 'flex-start',
//         paddingTop: 20,
//         paddingBottom: 20,
//       },
//       flatlist: {
//         width: '100%',
//       },
//       switch: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       },
//       textoswitch: {
//         fontWeight: 'bold',
//         fontSize: 20,
//       },
//       button: {
//         backgroundColor: '#1E4363',
//         padding: 10,
//         width: '30%',
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//       },
//       buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//       },
//     });
    


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Alert } from 'react-native';
// import Axios from 'axios';

// import { useNavigation } from '@react-navigation/native';
// import AlunoPagamento from './AlunoPagamento';

// export default function Pagamento() {
//   const [lista, setLista] = useState([]);
//   const [limpo, setLimpo] = useState (false)
//   const [mostrarPagamentosPendentes, setMostrarPagamentosPendentes] = useState(true);

//     const atualizarItem = (key, alunoEditado) => {
//     Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
//       .then((response) => {
//         console.log("Item atualizado:", response.data);
//         setLista((prevLista) =>
//           prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item)
//         );
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar item:", error);
//       });
//   };

//   useEffect(() => {
//     Axios.get("http://192.168.0.118:3001/itens")
//       .then((response) => {
//         setLista(response.data.map(item => ({ ...item, key: item.id.toString() })));
//       })
//       .catch((error) => {
//         console.error("Erro ao buscar itens:", error);
//       });
//   }, []);

//   const limparPagamentos = () => {
//         Axios.put("http://192.168.0.118:3001/limparPagamentos")
//           .then(() => {
//             // Atualiza o estado local para refletir que todos os pagamentos foram limpos
//             setLista(prevLista => prevLista.map(item => ({ ...item, pagamento: false })));
//             Alert.alert('Sucesso', 'Pagamentos limpos com sucesso.');
//           })
//           .catch((error) => {
//             console.error("Erro ao limpar pagamentos:", error);
//             Alert.alert('Erro', 'Erro ao limpar pagamentos.');
//           });
//       };

//   const listaFiltrada = mostrarPagamentosPendentes ? lista.filter(item => !item.pagamento) : lista.filter(item => item.pagamento);

//   return (
//         <View style={styles.container}>
//           <View style={styles.titulo}>
//             <Text style={styles.texttitulo}>Tabela de Pagamento:</Text>
//           </View>
//           <View style={styles.switch}>
//             <Text style={styles.textoswitch}>Pagamento Realizado</Text>
//             <Switch
//               value={mostrarPagamentosPendentes}
//               onValueChange={setMostrarPagamentosPendentes}
//               thumbColor="#1E4363"
//               trackColor={{ false: '#247BA0', true: '#247BA0' }}
//             />
//             <Text style={styles.textoswitch}>Alunos a pagar</Text>
//           </View>
    
//           {!mostrarPagamentosPendentes && (
//             <TouchableOpacity style={styles.button} onPress={limpo} >
//               <Text style={styles.buttonText}>Limpar Pagamentos</Text>
//             </TouchableOpacity>
//           )}
    
//           {!mostrarPagamentosPendentes && (
//             <FlatList
//               style={styles.flatlist}
//               data={listaFiltrada}
//               renderItem={({ item }) => (
//                 <View>
//                   <AlunoPagamento item={item} atualizarFuncao={atualizarItem} />
//                 </View>
//               )}
//             />
//           )}
    
//           {mostrarPagamentosPendentes && (
//             <FlatList
//               style={styles.flatlist}
//               data={listaFiltrada}
//               renderItem={({ item }) => (
//                 <View>
//                   <AlunoPagamento item={item} />
//                 </View>
//               )}
//             />
//           )}
//         </View>
//       );
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         width: '100%',
//         alignItems: 'center',
//       },
//       titulo: {
//         marginTop: 25,
//         width: '100%',
//         height: '7%',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//       },
//       texttitulo: {
//         fontWeight: 'bold',
//         fontSize: 30,
//         padding: 5,
//       },
//       text: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         padding: 5,
//         justifyContent: 'flex-start',
//       },
//       text2: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         padding: 5,
//         justifyContent: 'flex-start',
//         paddingTop: 20,
//         paddingBottom: 20,
//       },
//       flatlist: {
//         width: '100%',
//       },
//       switch: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       },
//       textoswitch: {
//         fontWeight: 'bold',
//         fontSize: 20,
//       },
//       button: {
//         backgroundColor: '#1E4363',
//         padding: 10,
//         width: '30%',
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//       },
//       buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//       },
//     });


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Axios from 'axios';

import AlunoPagamento from './AlunoPagamento';

export default function Pagamento() {
  const [lista, setLista] = useState([]);
  const [mostrarPagamentosPendentes, setMostrarPagamentosPendentes] = useState(true);

  const atualizarItem = (key, alunoEditado) => {
    Axios.put(`http://192.168.0.118:3001/item/${key}`, alunoEditado)
      .then((response) => {
        console.log("Item atualizado:", response.data);
        setLista((prevLista) =>
          prevLista.map(item => item.id == key ? { ...item, ...alunoEditado } : item)
        );
      })
      .catch((error) => {
        console.error("Erro ao atualizar item:", error);
      });
  };

  useEffect(() => {
    Axios.get("http://192.168.0.118:3001/itens")
      .then((response) => {const sortedList = response.data
        .map(item => ({ ...item, key: item.id.toString() }))
        .sort((a, b) => a.nome.localeCompare(b.nome));

      setLista(sortedList);
    })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
      });
  }, []);

  const limparPagamentos = () => {
    Axios.put("http://192.168.0.118:3001/limparPagamentos")
      .then(() => {
        setLista(prevLista => prevLista.map(item => ({ ...item, pagamento: false })));
        Alert.alert('Sucesso', 'Pagamentos limpos com sucesso.');
      })
      .catch((error) => {
        console.error("Erro ao limpar pagamentos:", error);
        Alert.alert('Erro', 'Erro ao limpar pagamentos.');
      });
  };

  const apagarPagamentos = () => {
    Alert.alert(
      "Limpar Pagamentos?",
      "Ao limpar pagamentos, não será possivel reverter", 
    [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Continuar",
        onPress: confirmacaoLimparPagamentos
      }
    ],
    { cancelable: false }
    );
  }

  const confirmacaoLimparPagamentos = () => {
    Alert.alert(
      "Confirmação:",
      "Deseja realmente limpar todos os pagamentos?",
      [
        {
          text: "NÃO",
          style: "cancel"
        },
        {
          text: "SIM",
          onPress: limparPagamentos
        }
      ],
      { cancelable: false }
    );
  };

  const listaFiltrada = mostrarPagamentosPendentes ? lista.filter(item => !item.pagamento) : lista.filter(item => item.pagamento);

  return (

    <ImageBackground
      source={require('../img/fundo1.jpg')} // Caminho para sua imagem de fundo
      style={styles.background}
      imageStyle={{ opacity: 0.08 }} // Opacidade da imagem de fundo
    >
    
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.texttitulo}>Pagamentos</Text>
      </View>
      <View style={styles.switch}>
        <Text style={styles.textoswitch}>Pagamento Realizado</Text>
        <Switch
          value={mostrarPagamentosPendentes}
          onValueChange={setMostrarPagamentosPendentes}
          thumbColor="#1E4363"
          trackColor={{ false: '#247BA0', true: '#247BA0' }}
        />
        <Text style={styles.textoswitch}>Alunos a pagar</Text>
      </View>

      {!mostrarPagamentosPendentes && (
        <TouchableOpacity style={styles.button} onPress={apagarPagamentos}>
          <Text style={styles.buttonText}>Limpar Pagamentos</Text>
        </TouchableOpacity>
      )}

      <FlatList
        style={styles.flatlist}
        data={listaFiltrada}
        renderItem={({ item }) => (
          <View>
            <AlunoPagamento item={item} atualizarFuncao={atualizarItem} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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
    width: '100%',
    alignItems: 'center',
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
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    justifyContent: 'flex-start',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
  flatlist: {
    width: '100%',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textoswitch: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey'
  },
  button: {
    backgroundColor: '#1E4363',
    padding: 10,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
