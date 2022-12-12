import { Router } from "express";
import * as homeController from "../controllers/home.controller";

const router = Router();


// @desc home index page
// @route GET /
router.get("/", homeController.index);

export default router;