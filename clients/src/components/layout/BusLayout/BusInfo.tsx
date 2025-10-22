import { BusFeatures } from "../../../types";

interface BusModalProps {
  busDetails: BusFeatures;
  showInfoModal: boolean;
  setShowInfoModal: (show: boolean) => void;
}
const BusModal = ({ busDetails, showInfoModal ,setShowInfoModal}: BusModalProps) => {
  return (
    <div>
      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  🚌 Bus Details
                </h2>
                <button
                  onClick={() => setShowInfoModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    👨‍✈️
                    <div>
                      <p className="text-sm font-medium">Driver</p>
                      <p className="text-sm text-gray-600">
                        {busDetails.driverName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    🔢
                    <div>
                      <p className="text-sm font-medium">Bus Number</p>
                      <p className="text-sm text-gray-600">
                        {busDetails.busNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    🎨
                    <div>
                      <p className="text-sm font-medium">Color</p>
                      <p className="text-sm text-gray-600">
                        {busDetails.busColor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    💺
                    <div>
                      <p className="text-sm font-medium">Total Seats</p>
                      <p className="text-sm text-gray-600">
                        {busDetails.totalSeats}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    📍 <span className="text-sm font-medium">Source:</span>
                    <span className="text-sm">{busDetails.source}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    🎯 <span className="text-sm font-medium">Destination:</span>
                    <span className="text-sm">{busDetails.destination}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>
                      <strong>Departure:</strong> {busDetails.departureTime}
                    </span>
                    <span>
                      <strong>Arrival:</strong> {busDetails.arrivalTime}
                    </span>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm font-medium mb-2">
                    Bus Type: {busDetails.busType}
                  </p>
                  <p className="text-sm font-medium mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {busDetails.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { BusModal };