import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function AppButton({onPress, title}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: '#718CAD',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10
    },
    text: {
        color: '#FFF',
        fontSize: 20
    }
})
