
import axios from 'axios';
import { baseURL } from './baseUrl';

export default axios.create({
  baseURL,withCredentials: false
  ,timeout: 5000
})