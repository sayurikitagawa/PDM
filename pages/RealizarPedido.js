import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function RealizarPedido() {
    const { realizarPedido } = styles;

    return (
        <View style={realizarPedido}>
            <Button
                title='FECHAR PEDIDO'
                color='#ed621c'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    realizarPedido: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 50,
    }
});