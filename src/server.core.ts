import express, { Express } from "express";
import http, { Server } from "http";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import initRoutes from "./routes/init.route";
import path from "path";

export class ServerCore {
    instance: Express;
    http: Server;

    constructor() {
        this.instance = express();
        this.http = http.createServer(this.instance);
        this.config();
        this.routes();
        this.assets();
        this.listen();
    }

    config() {
        this.instance.set("view engine", "ejs");
        this.instance.set("views", path.join(__dirname, "views"));
        this.instance.use(express.urlencoded({ extended: false }));
        this.instance.use(express.json());
        this.instance.use(helmet());
        this.instance.use(cookieParser());
        this.instance.use(expressSession({ secret: process.env.SESSION_SECRET!, resave: false, saveUninitialized: true }));
    }

    routes() {
        initRoutes(this);
    }

    assets() {
        this.instance.use(express.static(path.join(__dirname, "public")));
    }

    listen() {
        this.http.listen(process.env.PORT, () => {
            console.log(`[LOG] Server listening on port ${process.env.PORT}`);
        });
    }

}