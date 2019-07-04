const axios = require('axios');
// Send a POST request
axios({
    method: 'post',
    url: 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/register',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });