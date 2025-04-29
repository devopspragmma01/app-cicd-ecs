const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola equipo de curso de Devops, AWS ECS!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
