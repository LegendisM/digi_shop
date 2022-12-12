import { Router } from "express";
import { ServerCore } from "../server.core";

export const router = Router();

router.get('/', (req, rs) => {
    rs.render('home');
});

export default (serverCore: ServerCore) => {
    serverCore.instance.use(router);
}