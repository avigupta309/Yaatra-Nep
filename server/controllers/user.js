import { userModel } from "../models/users.js";
import { createToken } from "../service/user.js";
import { createHmac, randomBytes } from "crypto";

export async function HandleUserSignUp(req, res) {
  const { fullName, email, phoneNumber, password, role } = req.body;
  const isUserExist = await userModel.findOne({ email: email });
  if (isUserExist)
    return res.status(409).json({ data: "Email is already Exist" });
  try {
    await userModel.create({
      fullName,
      email,
      role,
      phoneNumber,
      password,
    });
    return res.status(201).json({
      data: "SignUp Sucessfully ",
      user: { fullName: fullName, email: email },
    });
  } catch (error) {
    console.log("cannot signup", error.message);
    return res
      .status(400)
      .json({ data: "Cannot Signup the user or check your number!" });
  }
}

export async function HandleLogin(req, res) {
  const { email, password, role } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) return res.status(404).json({ data: "Email is Not registred" });
  try {
    const isMatchPassword = await user.matchPassword(password);
    const token = createToken(isMatchPassword);
    res.cookie("tokenId", token, { httpOnly: true });
    return res.status(200).json({
      data: "SignIn Sucessfully ",
      user: {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        phone: user.phoneNumber,
      },
    });
  } catch (error) {
    return res.status(401).json({ data: "Password not match..." });
  }
}

export async function HandleUserInfo(req, res) {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (!user)
      return res.status(404).json({ data: "User Not Found At this Email" });
    return res.status(201).json({ data: user });
  } catch (error) {
    return res.status(400).json({ data: "Enter valid Email" });
  }
}

export async function HandleUserEdit(req, res) {
  let { fullName, email, phoneNumber, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).json({ data: "Enter Valid Email" });
    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    password = hashPassword;
    const editedUser = await userModel.findOneAndUpdate(
      { email },
      { fullName, phoneNumber, password, salt },
      { new: true },
    );
    return res
      .status(200)
      .json({ data: "user Edited Sucessfully", user: editedUser });
  } catch (error) {}
}

export async function HandleUserDelete(req, res) {
  const { email } = req.body;
  try {
    const userExist = await userModel.findOne({ email: email });
    if (!userExist)
      return res
        .status(400)
        .json({ data: "User Email is Not Found In DataBase" });
    return res.status(200).json({ data: "User Deleted Sucessfully" });
  } catch (error) {
    return res.status(500).json({ data: "Something Went Wrong" });
  }
}

export async function viewAllUser(req, res) {
  try {
    const users = await userModel.find();
    if (!users)
      return res.status(400).json({ data: "No any user yet registered" });
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(500).json({ data: "Something Went Wrong" });
  }
}

export async function handleChangeRole(req, res) {
  const { id } = req.params;
  console.log("userId-----", id);
  const { email, role } = req.body;
  console.log(req.body);
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(401).json({ data: "plz Enter Valid Email" });
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      { role },
      { new: true },
    );
    return res.status(201).json({ data: updatedUser });
  } catch (error) {
    return res.status(500).json({ data: "Something Went Wrong" });
  }
}

export async function ViewOneUSer(req, res) {
  const { id } = req.params;
  console.log(id);
  console.log("for testing......")
  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(401).json({ data: "plz Select Correct User" });
    return res.status(201).json({ data: user });
  } catch (error) {
    return res.status(500).json({ data: "Something Went Wrong" });
  }
}
