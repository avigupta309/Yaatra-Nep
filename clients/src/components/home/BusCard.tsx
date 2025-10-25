import {
  Star,
  MapPin,
  Clock,
  Snowflake,
  Wifi,
  Zap,
  Coffee,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Bus } from "../../types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface viewMoreProps {
  viewMore: number;
  setStopView: (val: boolean) => void;
}

export function BusCard({ viewMore, setStopView }: viewMoreProps) {
  const [bus, setBus] = useState<Bus[]>([]);
  useEffect(() => {
    if (bus.length <= viewMore) {
      setStopView(false);
    } else {
      setStopView(true);
    }
  }, [bus, viewMore, setStopView]);

  useEffect(() => {
    async function fetchingData() {
      const response = await axios.get("http://localhost:3000/api/bus/viewbus");
      if (response) {
        setBus(response.data.bus);
      }
    }
    fetchingData();
  }, []);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wi-fi":
        return <Wifi className="h-3 w-3" />;
      case "charging point":
        return <Zap className="h-3 w-3" />;
      case "snacks":
        return <Coffee className="h-3 w-3" />;
      case "blanket":
        return <Snowflake className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardContent className="p-2 ">
        {bus.slice(0, viewMore).map((bus, index) => {
          return (
            <div
              key={index}
              className="flex p-4 flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0 mt-5 hover:shadow-md rounded-lg border-2  "
            >
              {/* Bus Info */}
              <div className="flex-1 ">
                <div className="flex items-start justify-between mb-3 ">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {bus.busName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{bus.operator}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge
                        variant={bus.type === "AC" ? "default" : "secondary"}
                      >
                        {bus.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {bus?.rating || 5}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹ {bus.farePerSeat}
                    </div>
                    <div className="text-sm text-gray-600">per seat</div>
                  </div>
                </div>

                {/* Route and Time */}
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {bus.source} → {bus.destination}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>
                      {bus.departureTime} - {bus.arrivalTime}
                    </span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {bus.amenities.slice(0, 4).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}

                  {bus.amenities.length > 4 && (
                    <div className="text-xs text-gray-500 mt-1">
                      +{bus.amenities.length - 4} more
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="flex items-center space-x-3">
                  <Badge className="">{bus.availableSeats}</Badge>
                  <span className="text-sm text-gray-500">
                    {bus.totalSeats}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:ml-6">
                <Link to={`/selectionbus/${bus._id}`}>
                  <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2">
                    {bus.availableSeats === 0 ? "Sold Out" : "Select Seats"}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
