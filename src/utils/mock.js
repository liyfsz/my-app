import Mock from 'mockjs';

Mock.mock('/user/login','post', {
  'code': '0'
});

export default Mock