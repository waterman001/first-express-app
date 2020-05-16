const express = require("express");
const bodyParser = require("body-parser");
const itemsRoutes = require("./routes/index");


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(itemsRoutes);

app.get('/', (request, response) => { 
    response.send("start from /user")
});


app.listen(3000, () => {
    console.log('Server starts at port 3000')
});
