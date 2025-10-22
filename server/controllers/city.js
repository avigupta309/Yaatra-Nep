import { cityModel } from "../models/CityName.js";


export async function HandleCityAdded({ source, destination }) {
    try {
        function formatCityName(name) {
            if (!name) return "";
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        }

        const formattedSource = formatCityName(source);
        const formattedDestination = formatCityName(destination);

        await cityModel.updateOne(
            {},
            { $addToSet: { cityName: { $each: [formattedSource, formattedDestination] } } },
            { upsert: true }
        );
    } catch (error) {

    }
}

export async function viewAllCityName(req, res) {
    try {
        const allCity = await cityModel.find({})
        return res.status(200).json({ city: allCity })
    } catch (error) {
        return res.status(400).json({ data: "sorry to forward the city name" })
    }
}