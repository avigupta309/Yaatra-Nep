import { BusFeatures } from "../../../types";

interface BusHeaderProps {
    busDetails: BusFeatures;
    setShowInfoModal: (show: boolean) => void;
}

const BusHeader = ({ busDetails, setShowInfoModal }: BusHeaderProps) => {

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            🚌 {busDetails.source} → {busDetails.destination}
          </h1>
          <button
            onClick={() => setShowInfoModal(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ℹ️ Bus Info
          </button>
        </div>
      </div>
    </div>
  );
};

export { BusHeader };