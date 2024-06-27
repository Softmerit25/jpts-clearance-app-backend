import "dotenv/config";
import express, { urlencoded } from 'express';
import cors from 'cors';
import router from "./src/routes/routes.js";
import { connectionStatus } from "./src/db/connection.js";
const app = express();

const PORT = 3500;


app.use(cors());
app.use(router)
app.use(express.json());
app.use(urlencoded({extended: true}));


app.use("/", (req, res)=>{
    res.send('JPTS Servers has been hacked!')
})


app.listen(PORT, ()=>{
    connectionStatus();
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})
