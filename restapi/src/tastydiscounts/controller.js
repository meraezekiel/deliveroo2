const pool = require ('../../db');
const queries = require ('./queries');
const getTastyDiscountsHeader =(req,res) =>{
    pool.query(queries.getTastyDiscountsHeader, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getTastyDiscounts =(req,res) =>{
    pool.query(queries.getTastyDiscounts, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
} 

// const getFoodById = (req,res)=>{
//     const id = parseInt(req.params.id);
//     pool.query(queries.getFoodById, [id],(error,results)=>{
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// }




module.exports = {
    getTastyDiscountsHeader,
    // getFoodById,
    getTastyDiscounts,
   
};