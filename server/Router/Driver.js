import { Router } from "express";
import { HandleDriverDelete, HandleDriverEdit, HandleDriverLogin, HandleDriverSignUp } from "../controllers/Driver.js";
export const DriverRouter = Router();
DriverRouter.post('/driverlogin', HandleDriverLogin);
DriverRouter.post('/driversignup', HandleDriverSignUp)
DriverRouter.put('/handledriveredit', HandleDriverEdit)
DriverRouter.delete('/handledriverdelete', HandleDriverDelete)