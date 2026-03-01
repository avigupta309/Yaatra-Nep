import { Router } from "express";
import {
  HandleDriverDelete,
  HandleDriverEdit,
  HandleDriverLogin,
  HandleDriverSignUp,
  viewAllDriver,
  viewSpecificDriver,
} from "../controllers/Driver.js";
export const DriverRouter = Router();
DriverRouter.post("/driverlogin", HandleDriverLogin);
DriverRouter.post("/driversignup", HandleDriverSignUp);
DriverRouter.put("/handledriveredit", HandleDriverEdit);
DriverRouter.delete("/handledriverdelete", HandleDriverDelete);
DriverRouter.get("/viewalldriver", viewAllDriver);
DriverRouter.get("/specificdriver/:id",viewSpecificDriver);
