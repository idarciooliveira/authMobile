import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Contansts from 'expo-constants'

import Button from '../components/AppButton';
import useAuth from '../auth/useAuth';

import locationApi  from '../api/location';

export default function Home() {

    const [locationPoints, setLocationPoints] = useState([]);
    const {user,logout }  = useAuth();

    const loadLocationPoints= async()=>{
        const response = await locationApi.getLocations();
        setLocationPoints(response.data);
    }
    
    useEffect(()=>{
        loadLocationPoints(); 
    },[])

    return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.text}>{user.name}</Text>
                <Button title='Logout' onPress={()=> logout()}/>
                <ScrollView style={{width: '100%'}}>
                   {locationPoints.map(location=> (
                        <View key={location.id} style={styles.card}>
                            <Text style={styles.textCard}>{location.descricao}</Text>
                        </View>
                    )) }
                </ScrollView>
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
    card:{
        padding: 20,
        margin: 5,
        width: '100%', 
        height: 100, 
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent:   'center', alignItems:"center"
    },
    textCard: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'black',
        marginBottom: 30
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#FFF',
        marginBottom: 30
    }
})
