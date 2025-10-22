import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Seat } from "../../types";

interface SeatSelectionProps {
  totalSeats: number;
  availableSeats: number;
  onSeatSelect: (selectedSeats: number[]) => void;
  selectedSeats: number[];
}

export function SeatSelection({
  totalSeats,
  onSeatSelect,
  selectedSeats,
}: SeatSelectionProps) {
  const [seats, setSeats] = useState<Seat[]>([]);

  useEffect(() => {
    // Generate seat layout (2 columns, 7 pairs each column = 28 seats)
    const generatedSeats: Seat[] = [];
    const bookedSeats = new Set([3, 8, 12, 15, 19, 23, 26]); // Mock some booked seats

    for (let i = 1; i <= totalSeats; i++) {
      generatedSeats.push({
        id: i.toString(),
        number: i,
        isAvailable: !bookedSeats.has(i),
        isSelected: selectedSeats.includes(i),
        type: i % 4 === 1 || i % 4 === 0 ? "window" : "aisle",
      });
    }

    setSeats(generatedSeats);
  }, [totalSeats, selectedSeats]);

  const handleSeatClick = (seatNumber: number) => {
    const seat = seats.find((s) => s.number === seatNumber);
    if (!seat || !seat.isAvailable) return;

    let newSelectedSeats: number[];
    if (selectedSeats.includes(seatNumber)) {
      newSelectedSeats = selectedSeats.filter((s) => s !== seatNumber);
    } else {
      if (selectedSeats.length >= 6) {
        // Max 6 seats per booking
        return;
      }
      newSelectedSeats = [...selectedSeats, seatNumber];
    }

    onSeatSelect(newSelectedSeats);
  };

  const getSeatColor = (seat: Seat) => {
    if (!seat.isAvailable)
      return "bg-gray-300 text-gray-500 cursor-not-allowed";
    if (seat.isSelected) return "bg-blue-600 text-white";
    return "bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer";
  };

  // Render seats in bus layout (2+2 configuration)
  const renderSeatLayout = () => {
    const rows = [];
    const seatsPerRow = 4;
    const totalRows = Math.ceil(totalSeats / seatsPerRow);

    for (let row = 0; row < totalRows; row++) {
      const rowSeats = [];
      const startSeat = row * seatsPerRow + 1;

      for (let col = 0; col < seatsPerRow; col++) {
        const seatNumber = startSeat + col;
        if (seatNumber > totalSeats) break;

        const seat = seats.find((s) => s.number === seatNumber);
        if (!seat) continue;

        rowSeats.push(
          <div key={seatNumber} className={col === 1 ? "mr-6" : ""}>
            <Button
              variant="outline"
              size="sm"
              className={`w-10 h-10 p-0 text-xs font-medium transition-all duration-200 ${getSeatColor(
                seat
              )}`}
              onClick={() => handleSeatClick(seatNumber)}
              disabled={!seat.isAvailable}
            >
              {seatNumber}
            </Button>
          </div>
        );
      }

      rows.push(
        <div
          key={row}
          className="flex items-center justify-center space-x-2 mb-2"
        >
          {rowSeats}
        </div>
      );
    }

    return rows;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Select Your Seats</span>
          <Badge variant="secondary">{selectedSeats.length} selected</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Bus Front Indicator */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
            Driver
          </div>
        </div>

        {/* Seat Layout */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="max-w-xs mx-auto">{renderSeatLayout()}</div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-100 border border-green-200 rounded flex items-center justify-center">
              <User className="h-3 w-3 text-green-600" />
            </div>
            <span>Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <User className="h-3 w-3 text-white" />
            </div>
            <span>Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
              <User className="h-3 w-3 text-gray-500" />
            </div>
            <span>Booked</span>
          </div>
        </div>

        {selectedSeats.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Selected Seats:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <Badge key={seat} variant="default">
                  Seat {seat}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
