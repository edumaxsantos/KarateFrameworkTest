const express = require('express');
const app = express();
const port = 3000;

const products = [{
  id: 1,
  name: 'Produto 1',
},{
  id: 2,
  name: 'Produto 2',
},{
  id: 3,
  name: 'Produto 3',
},];


app.get('/oauth/access-token', (req, res) => {
  if(req.header('Authorization') === 'Basic auth') {
    return res.status(200).send({
      'access-token': 'should be oauth token'
    });
  }

  res.status(400).send('Bad Request - ' + req.header('Authorization'));

});


app.get('/products', (req, res) => {
  if(req.header('Authorization') === 'should be oauth token') {
    return res.status(200).send({
      products
    });
  }

  res.status(401).send('Invalid token');
});


app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});