/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const Map: React.FC = () => {
  const position: [number, number] = [27, 84];

  return (
    <div className="h-96 w-full p-2 bg-gray-300 shadow-md rounded-lg">
      {" "}
      {/* Fixed height required */}
      <MapContainer
        className="h-full w-full rounded-lg"
        center={position}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
           <div className="text-blue-600 font-bold text-lg">
              City Express
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
