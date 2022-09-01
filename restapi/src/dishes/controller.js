const pool = require ('../../db');
const queries = require ('./queries');


const getFeaturedByGenre =(req,res) =>{
    const genre = (req.params.genre);
    pool.query(queries.getFeaturedByGenre,[genre],(error, results) =>{
        // console.log(genre);
        if (error) throw error;
        res.status(200).json(results.rows);
       
    });
} 


module.exports = {
    
    getFeaturedByGenre,
    
   
};