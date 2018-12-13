import axios from 'axios';
import devUrl from './api'
export const fetch = (url = '', options = {}, type = 'post') => {
  axios.request({
    url: devUrl + url,
    method: type.toLowerCase(),
    params: options.data || {},
    data: options.requestBody || {}
  }).then((response) => {
    console.log(response);
  })
}