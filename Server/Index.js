import dbConn from "./config/Dbconn";
import app from './routes/routes';
import dotenv from 'dotenv';

dbConnect();
dotenv.config()

const aPORT =  process.env.PORT;


app.listen(aPORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${aPORT}`);
});