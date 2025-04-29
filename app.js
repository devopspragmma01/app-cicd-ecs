const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Este es el laboratorio de DEVOPS CI/CD AWs Pragmma de curso de Devops, AWS ECS!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
