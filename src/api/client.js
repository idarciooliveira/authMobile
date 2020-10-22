import { create } from 'apisauce';
import authStorage from '../auth/storage';

const clientApi = create({
    baseURL: 'http://192.168.100.42:3333'
});

clientApi.addAsyncRequestTransform(async (request)=>{
    const authToken = await authStorage.getToken();
    if(!authToken)return;
    request.headers["authorization"] = `Bearer ${authToken}`;
})

export default clientApi;