
const getFeaturedByGenre = "SELECT * FROM dishesfeatured WHERE restaurant=$1"


// const getFeatured = "SELECT * FROM featured LEFT JOIN dishesfeatured ON dishesfeatured.id = featured.dishes";


module.exports = {

    getFeaturedByGenre,
 
   
}