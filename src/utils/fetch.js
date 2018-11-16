import axios from 'axios';
export const fetch = (url = '', option = {}, type = 'GET') => {
  axios.request({
    url: url,
    method: type.toLowerCase(),
    params: option.data || {}
  }).then((response) => {
    console.log(response);
  })
}