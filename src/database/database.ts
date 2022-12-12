import mongoose from "mongoose";

export default () => {

    mongoose.connect(process.env.DB_URI!, { dbName: process.env.DB_NAME })
        .then(() => console.log("Database Connection is Ready"))
        .catch(() => console.log("Database Connection Failed"));
}