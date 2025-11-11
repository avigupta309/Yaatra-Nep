import { Router } from "express";
import { HandleUserDelete, HandleUserEdit, HandleUserInfo, HandleLogin, HandleUserSignUp } from "../controllers/user.js";

export const UserRouter = Router()

UserRouter.post('/login', HandleLogin)
UserRouter.post('/usersignup', HandleUserSignUp)
UserRouter.post('/viewuser', HandleUserInfo)
UserRouter.put('/useredit', HandleUserEdit)
UserRouter.delete('/userdelete', HandleUserDelete)
