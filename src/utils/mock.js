import Mock from 'mockjs';

Mock.mock('/user/login','get', {
  'code': '0'
});

export default Mock