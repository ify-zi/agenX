import mongoose from "mongoose";
import createApp from "./appBuild.js";
import "dotenv/config";

const server = createApp();


mongoose
    .connect(`mongodb://${process.env.HOST}/${process.env.DBNAME}`)
    .then(console.log(`connected to database`))
    .catch(err => console.log(err))


server.listen(`${process.env.PORT}`, () => {
  console.log(`server is running on http://${process.env.HOST}:${process.env.PORT}`)
})
