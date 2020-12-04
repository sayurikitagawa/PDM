import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Pedido() {
    const { titulo, comida, pedido, precoTotal, preco, divisor } = styles;

    return (
        <View style={pedido}>
            <Text style={{ paddingTop: 20 }}>Pedido #001</Text>
            <Text style={titulo}>Marmita da Batian</Text>
            <Text style={comida}>Obentô pequeno</Text>
            <Text style={preco}>R$ 15,00</Text>
            <View style={{ paddingVertical: 5 }}></View>
            <Text style={comida}>Chá verde (300ml)</Text>
            <Text style={preco}>R$ 5,50</Text>
            <View style={divisor}/>
            <Text style={comida}>Valor a pagar</Text>
            <Text style={preco}>Subtotal:  R$ 20,50</Text>
            <Text style={preco}>Entrega:  R$ 0,00</Text>
            <Text style={precoTotal}>Total:  R$ 20,50</Text>
            <Text style={preco}>Forma de Pagamento:  Cartão de Débito</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    pedido: {
        paddingLeft: 30,
        paddingRight: 30
    },
    titulo: {
        fontSize: 30,
        fontWeight: 600,
        paddingBottom: 20
    },
    comida: {
        fontSize: 18,
        paddingBottom: 8
    },
    preco: {
        fontSize: 16,
        paddingLeft: 10
    },
    precoTotal: {
        fontWeight: 600,
        fontSize: 18,
        paddingLeft: 10
    },
    divisor: {
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.1,
        marginVertical: 10
    }
});