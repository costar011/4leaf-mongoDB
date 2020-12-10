import express from "express";
import { routers } from "../routers";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.STUDENT, globalController.studentController);

export default globalRouter;
