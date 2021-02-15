const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const fs = require('fs');
const path = require( 'path' );
import {Helmet} from 'react-helmet';
import App from '../src/App';

// create express application
const app = express();
const PORT = 5000;

//middleware
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../build' ) ) );

//rendering react based on request routes
app.get('*', async (req, res)=>{
    const indexPath = path.resolve(__dirname, '..','build/index.html')
    const index = fs.readFileSync(indexPath, 'utf-8');
    // get HTML string from the `App` component
    let appHTML = await ReactDOMServer.renderToString(
        <StaticRouter location={ req.originalUrl }>
            <App />
        </StaticRouter>
    );

    

    const helmet = Helmet.renderStatic();
    const htmlBody = index.replace('(---App---)', appHTML);
    const outputHtml = htmlBody.replace('(---Head---)', `${helmet.meta.toString()} ${helmet.title.toString()}`);
    // set header and status
    res.contentType( 'text/html' );
    res.status( 200 );
    res.send(outputHtml);
});

//server
app.listen(PORT, ()=>{
    console.log("Server up");
});