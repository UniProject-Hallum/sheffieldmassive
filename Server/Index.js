import dbConn from "./config/Dbconn.js";
import app from "./routes/routes.js";
import dotenv from 'dotenv';


dbConn();
dotenv.config()

const aPORT =  process.env.PORT;



app.listen(aPORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${aPORT}`);
});