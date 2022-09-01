const express = require("express");
const featuredheadRoutes = require('./src/featured/routes');
const featuredRoutes = require('./src/featured/routesFeatured');

const tastydiscountsheadRoutes = require('./src/tastydiscounts/routes');
const tastydiscountsRoutes = require('./src/tastydiscounts/routesTasty');

const offerheadRoutes = require('./src/offer/routes');
const offerRoutes = require('./src/offer/routesOffer');

const categoriesRoutes = require('./src/categories/routes');

const genreRoutes = require('./src/dishes/routesGenre');



const app = express ();
const port =3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/api/v1/featuredheader", featuredheadRoutes);
app.use("/api/v1/featured", featuredRoutes);

app.use("/api/v1/tastydiscountsheader", tastydiscountsheadRoutes);
app.use("/api/v1/tastydiscounts", tastydiscountsRoutes);

app.use("/api/v1/offerheader", offerheadRoutes);
app.use("/api/v1/offer", offerRoutes);

app.use("/api/v1/categories", categoriesRoutes);

app.use("/api/v1/dishesgenre", genreRoutes);




app.listen (port,()=> console.log(`app listening on port ${port}`));
