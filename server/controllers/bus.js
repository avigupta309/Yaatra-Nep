import { BusModel } from "../models/bus.js";
import { DriverModel } from "../models/Drivers.js";
import { HandleCityAdded } from "./city.js";
// import { generateSeatLayout } from "./generateSeatLayout.js";

export async function HandleBusSubmitData(req, res) {
  let {
    busName,
    busNumber,
    type,
    source,
    destination,
    departureTime,
    arrivalTime,
    farePerSeat,
    amenities,
    operator,
    driverEmail,
  } = req.body;

  HandleCityAdded({ source, destination });

  if (typeof amenities === "string") {
    amenities = amenities
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""));
  }
  const driverDocs = await DriverModel.findOne({ email: driverEmail });
  if (!driverDocs)
    return res.status(400).json({ data: "Enter Valid Driver Email" });
  const busDriverId = driverDocs._id;
 

  try {
    await BusModel.create({
      busName,
      busNumber,
      type,
      source,
      destination,
      departureTime,
      arrivalTime,
      farePerSeat,
      // totalSeats,
      // availableSeats,
      amenities,
      operator,
      busDriverId,
      // seatLayout,
    });

    return res
      .status(201)
      .json({ data: `${busName}'s :${busNumber} data added Sucessfully` });
  } catch (error) {
    return res.status(400).json({ data: "bus data cannot added " });
  }
}

export async function HandleBusDelete(req, res) {
  const { busNumber } = req.body;
  const busExist = await BusModel.findOne({ busNumber: busNumber });
  if (!busExist)
    return res.status(401).json({ data: "Bus Cannot Find in Database" });
  try {
    const bus = await BusModel.findOneAndDelete({ busNumber: busNumber });
    return res.status(200).json({ data: "Bus Deleted Sucessfully ", bus: bus });
  } catch (error) {
    return res.status(401).json({ data: "Bus Cannot Deleted" });
  }
}

export async function HandleBusInfo(req, res) {
  let { busNumber } = req.body;
  try {
    const bus = await BusModel.findOne({ busNumber: busNumber });
    if (!bus) return res.status(400).json({ data: "Enter valid Bus Number" });
    return res.status(200).json({ data: bus });
  } catch (error) {
    return res.status(500).json({ data: "Something went Wrong" });
  }
}

export async function HandleBusEdit(req, res) {
  let {
    busName,
    busNumber,
    type,
    source,
    destination,
    departureTime,
    arrivalTime,
    farePerSeat,
    totalSeats,
    availableSeats,
    amenities,
    operator,
    busDriver,
  } = req.body;
  const busExist = await BusModel.findOne({ busNumber: busNumber });
  if (!busExist)
    return res.status(404).json({ data: "Bus Not Found In data-Base" });
  const driverDocs = await DriverModel.findOne({ email: busDriver });
  if (!driverDocs)
    return res.status(400).json({ data: "Enter valid Driver Email" });
  busDriver = driverDocs._id;
  if (typeof amenities === "string") {
    amenities = amenities
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""));
  }
  try {
    const updatedData = await BusModel.findOneAndUpdate(
      { busNumber },
      {
        busName,
        type,
        source,
        destination,
        departureTime,
        arrivalTime,
        farePerSeat,
        totalSeats,
        availableSeats,
        amenities,
        operator,
        busDriver,
      },
      { new: true },
    );
    return res
      .status(201)
      .json({ data: "Bus Data Updated sucessfully", bus: updatedData });
  } catch (error) {
    console.log("error : ", error);
    return res
      .status(404)
      .json({ data: "Something Went Wrong During The Updating" });
  }
}

export async function ViewAllBus(req, res) {
  try {
    const bus = await BusModel.find({}).populate("busDriverId");
    if (bus) return res.status(200).json({ data: "All Bus", bus: bus });
    return null;
  } catch (error) {
    return res
      .status(404)
      .json({ data: "Something Went Wrong During loading all bus" });
  }
}
