import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Entrega() {
    const { texto, entrega } = styles;

    return (
        <View style={entrega}>
            <Text style={texto}>Tempo de entrega:  15 a 20 minutos</Text>
            <Text style={texto}>Entregar em:  Rua Joaquim Murtinho, 46, Apto 202</Text>
            <Text style={texto}>Contato: (44) 3322-1144</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    entrega: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
    },
    texto: {
        fontSize: 15
    }
});