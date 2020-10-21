import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function AppInputText({title, onChangeText,...props}) {
    return (
        <TextInput placeholder={title} {...props}
            onChangeText={onChangeText}
            placeholderTextColor='#FFF'
            style={styles.input}/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#FFF',
        fontSize: 16
    }
})
