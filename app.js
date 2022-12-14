const express = require('express')
const app     = express();
const port    = 3000;

const mainRouter = require( './routes/main' );

app.set( "view engine", "ejs" );
app.use( '/', mainRouter );

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})