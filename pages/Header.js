import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    const { titulo, header } = styles;

    return (
        <View style={header}>
            <Text style={titulo}>PEDIDO</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ed621c',
        height: 70,
        paddingTop: 15,
        paddingLeft: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    titulo: {
        fontSize: 25,
        paddingBottom: 20,
        color: 'white',
        fontWeight: 600
    },
});