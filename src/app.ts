import path from "path";
import dotenv from "dotenv";
import { ServerCore } from "./server.core";
import database from "./database/database";

// resolve path of environment file
dotenv.config({ path: path.resolve(__dirname + "/../config.env") });

// init db connection
const db = database();

// init server core instance
const core = new ServerCore();