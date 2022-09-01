const pool = require ('../../db');
const queries = require ('./queries');

const getCategories =(req,res) =>{
    pool.query(queries.getCategories, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


module.exports = {
    getCategories,
   
};