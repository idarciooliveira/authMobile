import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Contansts from 'expo-constants'

import InputText from '../components/AppInputText'
import Button from '../components/AppButton';

export default function Home({navigation}) {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>HomePage</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Contansts.statusBarHeight,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20222B'
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#FFF',
        marginBottom: 30
    }
})
