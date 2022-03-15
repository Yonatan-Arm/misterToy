import axios from 'axios';
import { utilService } from './util-service.js'

const URL = (process.env.NODE_ENV !== 'development')
 ? '/api/toy'
 : '//localhost:3030/api/toy';


export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}


function query(filterBy) {
  return axios.get(URL, {params: filterBy}).then((res) => res.data);
}


function getById(toyId) {
  return axios.get(URL + toyId).then((res) => res.data);
}


function remove(toyId) {
  return axios.delete(URL + toyId);
}



function save(toy) {
  if (toy._id) return axios.put(URL + toy._id, toy).then((res) => res.data);
  else return axios.post(URL, toy).then((res) => res.data);
}



function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: 0,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: new Date(),
    inStock: true,
    reviews: ['Good', 'Nice', 'Fun'],
  };
}
