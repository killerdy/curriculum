const axios = require('axios');

async function login(username, password) {
    const res = await axios.post('http://localhost:1234/login', {
        username,
        password
    })
    console.log(res.data);
}
login('DY', '123').then();