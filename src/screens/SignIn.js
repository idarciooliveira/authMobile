import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import Contansts from 'expo-constants'

import InputText from '../components/AppInputText'
import Button from '../components/AppButton';

export default function SignIn({navigation}) {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>AuthMobile</Text>
                <InputText title='Email'/>
                <InputText title='Password'/>
                <Button title='Sign In'
                    onPress={()=> navigation.navigate('Home')}/>
                <Button title='Create a Account' 
                    onPress={()=> navigation.navigate('SignUp')}/>
            </View>
        </KeyboardAvoidingView>
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
