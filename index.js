const express = require('express');
const app = express();
const indexRouter = require('./routes/index')
const path = require('path');
const logger = require('morgan');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.send('index');
// });

app.use('/', indexRouter);


// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
