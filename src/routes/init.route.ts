import { Router } from "express";
import { ServerCore } from "../server.core";
import { errorMiddleware, unknownMiddleware } from "../middlewares/error.middleware";

import homeRoute from "./home.route";

export const router = Router();

// @desc home route
router.use(homeRoute);

// @desc handle unknown route
router.use(unknownMiddleware);

// @desc handle error
router.use(errorMiddleware);

export default (serverCore: ServerCore) => {
    serverCore.instance.use(router);
}