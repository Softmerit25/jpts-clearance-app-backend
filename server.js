import "dotenv/config";
import express, { urlencoded } from 'express';
import cors from 'cors';
import router from "./src/routes/routes.js";
import { connectionStatus } from "./src/db/connection.js";
const app = express();

const PORT = 3500;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', router);


app.use("/", (req, res)=>{
    res.send('JPTS Servers has been hacked!')
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        message: err.message
    });
});


app.listen(PORT, ()=>{
    connectionStatus();
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})
