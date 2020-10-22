import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import Contansts from 'expo-constants'
import {Formik} from 'formik'
import * as Yup from 'yup';

import authApi from '../api/auth';

const authSchema = Yup.object().shape({
    email: Yup.string().email('Email Invalido').required('Campo Obrigatorio'),
    password: Yup.string().required('Password Obrigatorio')
});

import InputText from '../components/AppInputText'
import Button from '../components/AppButton';
import useAuth from '../auth/useAuth';

export default function SignIn({navigation}) {

    const [loginFailed, setLoginFailed] = useState(false)
    const auth = useAuth()

    const handleSubmit = async ({email, password})=>{
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        await auth.login(result.data);
    }


    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={authSchema}>
                {({handleChange, handleBlur,handleSubmit,values, errors})=>(
                <View style={styles.container}>
                    <Text style={styles.text}>AuthMobile</Text>

                    {loginFailed && <Text style={{color: 'red', fontSize: 15}}>Login Failed</Text>}
                    <Text style={{color: 'red', fontSize: 15}}>{errors.email}</Text>
                    <InputText title='Email' 
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        values={values.email}/>

                    <Text style={{color: 'red', fontSize: 15}}>{errors.password}</Text>
                    <InputText title='Password' 
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize='none'
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        values={values.password}/>

                    <Button title='Sign In'
                        onPress={handleSubmit}/>

                    <Button title='Create a Account' 
                        onPress={()=> navigation.navigate('SignUp')}/>
                </View>
                )}
            </Formik>
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
