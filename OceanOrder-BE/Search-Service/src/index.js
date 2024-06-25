import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js"; 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const Port = 3003;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});