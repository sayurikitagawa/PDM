import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './pages/Header'
import Pedido from './pages/Pedido'
import Entrega from './pages/Entrega'
import RealizarPedido from './pages/RealizarPedido'

export default function App() {
  const { divisor } = styles;

  return (
    <View>
      <Header/>
      <Pedido />
      <View style={divisor}/>
      <Entrega/>
      <RealizarPedido />
    </View>
  );
}

const styles = StyleSheet.create({
  divisor: {
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 0.1,
    marginTop: 30,
    marginHorizontal: 22
  }
});
