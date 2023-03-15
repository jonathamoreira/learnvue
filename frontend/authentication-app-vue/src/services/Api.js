import axios from 'axios';

export default () => axios.create({
  // Base url de comunicação com o back
  baseURL: 'localhost:3000/api/v1',
});
