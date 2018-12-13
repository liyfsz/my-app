import {fetch} from "./fetch";

const USER  = '/user';

export const login = (data, callback) => fetch(USER + '/login', {
  requestBody: data,
  callback
}, 'post');