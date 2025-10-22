import { DriverModel } from "../models/Drivers.js";


export async function HandleDriverSignUp(req, res) {
    const { driverName, email, phoneNumber, address, password } = req.body;
    const driverExist = await DriverModel.findOne({
        $or: [{ email }, { phoneNumber }]
    });
    if (driverExist) return res.status(401).json({ data: "driver email or PhoneNumber already exist" })
    try {
        await DriverModel.create({
            driverName, email, password, phoneNumber, address
        })
        return res.status(201).json({ data: "Driver signed up successfully", driver: driverName })
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(400).json({ data: "driver cant Signup", error: error.message });
    }
}


export async function HandleDriverLogin(req, res) {
    const { email, password } = req.body
    const DriverExist = await DriverModel.findOne({ email: email });
    if (!DriverExist) return res.status(401).json({ data: "Driver Email Doesnt Exist" })
    try {
        const driver = await DriverExist.matchPassword(password)
        return res.status(200).json({ data: "Driver login Sucessfully", driver: driver })
    } catch (error) {
        return res.status(401).json({ data: "Check your password and try again" })
    }
}

export async function HandleDriverEdit(req, res) {
    const { email, driverName, password, address, phoneNumber, } = req.body;
    const driverExist = await DriverModel.findOne({ email: email })
    if (!driverExist) return res.status(401).json({ data: "Driver Email is Not Registered" })
    try {
        const updateDriverData = await DriverModel.findOneAndUpdate({ email }, { driverName, password, address, phoneNumber }, { new: true })
        return res.status(201).json({ data: "Driver Data Updated Sucessfully", driver: updateDriverData })

    } catch (error) {
        console.log("error: ", error)
        return res.status(401).json({ data: "driver data cannot update" })
    }
}

export async function HandleDriverDelete(req, res) {
    const { email } = req.body;
    const driverExist = await DriverModel.findOne({ email: email })
    if (!driverExist) return res.status(404).json({ data: "Driver not Found" })
    try {
        await DriverModel.findOneAndDelete({ email: email })
        return res.status(200).json({ data: "Driver Deleted Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: "Cannot find This Email in Database" })
    }
}