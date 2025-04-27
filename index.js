const axios = require('axios');

axios.get('http://your-ec2-ip:8081/hello')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error connecting backend:', error);
  });

