const { Op }      = require("sequelize");
const connection  = require( '../database/mysql_connection' );
const movies = require("../models/movies");
const modelMovies = require( '../models/movies' )( connection );

const controller = {

    // getMovies: async function( req, res ) {
    //     try {
    //         let movies = await modelMovies.findAll();
    //         res.render( 'home', { movies: movies } );
    //     }
    //     catch( err ){
    //         console.log( err );
    //     }

    list: (req, res) => {
        modelMovies.findAll({
        })
            .then(movies => {
                res.render('home.ejs',{movies})
				
            })},

    }


module.exports = controller;