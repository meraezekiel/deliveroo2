const pool = require ('../../db');
const queries = require ('./queries');

const getFeaturedHeader =(req,res) =>{
    pool.query(queries.getFeaturedHeader, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getFeatured =(req,res) =>{
    pool.query(queries.getFeatured, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
} 




module.exports = {
    getFeaturedHeader,
    getFeatured,
   
};