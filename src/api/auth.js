import clientApi from './client';

const login = (email, password)=> clientApi.post('/signin',{email, password})

export default {
    login
}