import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import pg from "pg";

const app = express();
app.use(express.json());
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
  });


//------------------------------  ROUTES  ------------------------------//


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });