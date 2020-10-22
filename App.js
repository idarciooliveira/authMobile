import React, {  useState } from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from 'expo'
import Auth from "./src/routes/Auth";
import Index from './src/routes/Index';
import AuthContext from './src/auth/context';
import authStorage from './src/auth/storage';

export default function App() {

  const [user,setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async ()=>{
    const user = await authStorage.getUser();
    if(user) setUser(user);
  }

  if(!isReady) 
  return ( <AppLoading 
      startAsync={restoreUser} onFinish={()=> setIsReady(true)}/>
  )
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer style={styles.container}>
       {user ? <Index/> : <Auth/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20222B'
  },
});
