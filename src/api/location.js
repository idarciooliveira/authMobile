import client from './client';

const getLocations = ()=> client.get('/locationPoints');

export default {getLocations};