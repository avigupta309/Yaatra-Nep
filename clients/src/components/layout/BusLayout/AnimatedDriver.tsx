import { BusFeatures } from "../../../types";


interface AnimatedDriverProps{
  busDetails:BusFeatures,
}

const AnimatedDriver = ({ busDetails }:AnimatedDriverProps) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Driver</h3>
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
            👨‍✈️
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              {busDetails.driverName}
            </p>
            <p className="text-sm text-gray-600">Professional Driver</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-2"></div>
              <span className="text-xs text-green-600">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AnimatedDriver };