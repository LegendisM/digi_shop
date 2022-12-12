import { Router } from "express";
import { ServerCore } from "../server.core";

import homeRoute from "./home.route";

export const router = Router();

router.use(homeRoute);

export default (serverCore: ServerCore) => {
    serverCore.instance.use(router);
}