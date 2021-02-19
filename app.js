const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const fs = require('fs');
import App from './src/App';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', async (req, res)=>{
  const indexPath = path.resolve(__dirname,'public/index.html')
  const index = fs.readFileSync(indexPath, 'utf-8');
  // get HTML string from the `App` component
  let appHTML = await ReactDOMServer.renderToString(
    <StaticRouter location="/">
      <App />
    </StaticRouter>
  );
  const outputHtml = await index.replace('(---App---)', appHTML);
  // set header and status
  res.contentType( 'text/html' );
  res.status( 200 );
  res.send(outputHtml);
});

app.get('/demo', async (req, res)=>{
  const indexPath = path.resolve(__dirname,'public/index.html')
  const index = fs.readFileSync(indexPath, 'utf-8');
  // get HTML string from the `App` component
  let appHTML = await ReactDOMServer.renderToString(
    <StaticRouter location="/demo">
      <App />
    </StaticRouter>
  );
  const outputHtml = await index.replace('(---App---)', appHTML);
  // set header and status
  res.contentType( 'text/html' );
  res.status( 200 );
  res.send(outputHtml);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
