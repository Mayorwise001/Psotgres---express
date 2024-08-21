const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('index');
  });




// Define a route for the homepage
// app.get('/', (req, res) => {
//   res.render('index');
// });


module.exports = router;