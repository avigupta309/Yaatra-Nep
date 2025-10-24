import { BusInfo } from "../../../types";

interface BusExteriorProps {
  busFeatures: BusInfo | null;
}

const BusExterior = ({ busFeatures }: BusExteriorProps) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Bus Exterior</h3>
        <p className="text-xl text-black">{busFeatures?.busNumber}</p>

        <div className="aspect-video bg-gradient-to-r rounded-lg relative overflow-hidden bg-cover bg-sky-400">
          <img src="/exterior.jfif" alt="" className="w-full h-72" />
        </div>
      </div>
    </div>
  );
};
export { BusExterior };
