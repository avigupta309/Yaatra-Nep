import { Router } from "express";
import {
  HandleUserDelete,
  HandleUserEdit,
  HandleUserInfo,
  HandleLogin,
  HandleUserSignUp,
  viewAllUser,
} from "../controllers/user.js";

export const UserRouter = Router();

UserRouter.post("/login", HandleLogin);
UserRouter.post("/usersignup", HandleUserSignUp);
UserRouter.post("/specificuser", HandleUserInfo);
UserRouter.put("/useredit", HandleUserEdit);
UserRouter.delete("/userdelete", HandleUserDelete);
UserRouter.get("/viewuser", viewAllUser);
