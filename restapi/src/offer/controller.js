const pool = require ('../../db');
const queries = require ('./queries');
const getOfferHeader =(req,res) =>{
    pool.query(queries.getOfferHeader, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getOffer =(req,res) =>{
    pool.query(queries.getOffer, (error, results) =>{
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
    getOfferHeader,
    // getFoodById,
    getOffer,
   
};