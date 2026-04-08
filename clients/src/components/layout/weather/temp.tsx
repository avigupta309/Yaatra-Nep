import axios from "axios";
import { MapPin, Thermometer } from "lucide-react";
import { useEffect } from "react";

export const Temp = () => {
  const weatherData = {
    location: "Kathmandu",
    temperature: 26,
    condition: "Sunny",
  };

  useEffect(() => {
    async function fetchWeather() {
        const city="birgunj"
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;
      const apikey = "b269285f8d27c66632175782a28f9c37&units=metric";
      try {
        const response = await axios.get(URL + `${apikey}`);
        console.log(response.data);
      } catch (error) {}
    }
    fetchWeather();
  }, []);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-6 h-fit">
        <h3 className="text-lg font-semibold text-indigo-600 mb-4">
          Current Location Weather
        </h3>

        <div className="flex items-center gap-3 mb-3">
          <MapPin className="text-indigo-500" />
          <span className="font-medium">{weatherData.location}</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <Thermometer className="text-red-500" />
          <span className="text-2xl font-bold">
            {weatherData.temperature}°C
          </span>
        </div>

        <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium">
          {weatherData.condition}
        </div>
      </div>
    </>
  );
};
