import { BusModel } from "../models/bus"

export async function HandleSpecificBus(req, res) {
    const { id } = req.params

    try {
        const bus = await BusModel.findById(id)
        return res.status(200).json({ bus: bus })
    } catch (error) {
        return res.status(400).json({ data: "we cant provide this city details" })
    }
}