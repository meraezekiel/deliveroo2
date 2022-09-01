const getFeaturedHeader = "SELECT * FROM featuredheader";
const getFeatured = "SELECT * FROM featured";

// const getFeatured = "SELECT * FROM featured LEFT JOIN dishesfeatured ON dishesfeatured.id = featured.dishes";


module.exports = {
    getFeaturedHeader,
    getFeatured,
   
}