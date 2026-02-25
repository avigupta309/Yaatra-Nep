import { Router } from "express";
import {
  HandleUserDelete,
  HandleUserEdit,
  HandleUserInfo,
  HandleLogin,
  HandleUserSignUp,
  viewAllUser,
  handleChangeRole
} from "../controllers/user.js";
import { userModel } from "../models/users.js";

export const UserRouter = Router();

UserRouter.post("/login", HandleLogin);
UserRouter.post("/usersignup", HandleUserSignUp);
UserRouter.post("/specificuser", HandleUserInfo);
UserRouter.put("/useredit", HandleUserEdit);
UserRouter.delete("/userdelete", HandleUserDelete);
UserRouter.get("/viewuser", viewAllUser);
userModel.put('/changerole',handleChangeRole)
