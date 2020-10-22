import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (authToken)=>{
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error Storing the authToken');
  }
}

const getToken = async()=> {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log('Error Getting the authToken');
    }
}

const getUser = async()=>{
    try {
        const token = await getToken();
        return token ? jwtDecode(token): null;
       
    } catch (error) {
        console.log('Error Getting the user');
    }
}

const removeToken = async ()=>{
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error on Removing the authToken');
    }
}

export default {
    getUser, removeToken, storeToken, getToken
}