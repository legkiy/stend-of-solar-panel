const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

// let url = 
//   'https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/2022-09.csv';
let url =
'https://files.isem.irk.ru/index.php/apps/files/?dir=/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0&openfile=172775';

let username = 'nikita.max';
let password = 'E4DqvJacNxSW';

var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
const headers = { Authorization: auth };

app.get('/', async (req, res) => {
  console.log((await axios.get(url, { mode: 'no-cors', headers })).data);
});

const PORT = 2888;
app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});
