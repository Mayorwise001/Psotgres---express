const express = require('express');
const app = express();
const indexRouter = require('./routes/index')

// Set the view engine to EJS
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//   res.send('index');
// });

app.use('/', indexRouter);


// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
