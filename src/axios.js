import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vote-server-side.herokuapp.com/',
});

export default instance;
