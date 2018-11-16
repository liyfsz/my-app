import Mock from './mock';
import {fetch} from "./fetch";

console.log(
    Mock
)
const USER  = '/user';

export const login = (data, callback) => fetch(USER + '/login', {
  data,
  callback
}, 'get');