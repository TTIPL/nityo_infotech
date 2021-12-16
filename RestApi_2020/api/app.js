const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



require("./routes/user.routes")(app);


require("./middlewares/swagger.doc")(app);
require("./middlewares/not.found")(app);

module.exports = app;
