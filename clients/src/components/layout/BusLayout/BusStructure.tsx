import { useState } from "react";
import { Link } from "react-router-dom";

const BusStructure = () => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  // Generate seat layout: 2 columns, 7 pairs each
  const generateSeatLayout = () => {
    const leftColumn = [];
    const rightColumn = [];

    for (let row = 1; row <= 7; row++) {
      // Left column: A and B seats
      leftColumn.push([`A${row}`, `B${row}`]);
      // Right column: C and D seats
      rightColumn.push([`C${row}`, `D${row}`]);
    }

    return { leftColumn, rightColumn };
  };

  const { leftColumn, rightColumn } = generateSeatLayout();
  const getSeatStyle = (seatNumber: string) => {
    const baseStyle =
      "w-12 h-12 text-sm font-bold rounded border-2 cursor-pointer transition-all duration-200 flex items-center justify-center";
    return selectedSeats.has(seatNumber)
      ? `${baseStyle} bg-red-500 hover:bg-red-600 text-white border-red-600`
      : `${baseStyle} bg-green-500 hover:bg-green-600 text-white border-green-600`;
  };

  const handleSeatClick = (seatNumber: string) => {
    const newSelectedSeats = new Set(selectedSeats);
    if (newSelectedSeats.has(seatNumber)) {
      newSelectedSeats.delete(seatNumber);
    } else {
      newSelectedSeats.add(seatNumber);
    }
    setSelectedSeats(newSelectedSeats);
  };

  return (
    <div>
      <div className="relative bg-gray-50 rounded-xl p-6">
        {/* Driver Area */}
        <div className="flex justify-end mb-4">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            🚗 Driver
          </div>
        </div>

        {/* Seat Layout */}
        <div className="flex justify-center items-start space-x-8">
          {/* Left Column */}
          <div className="space-y-3">
            {leftColumn.map((seatPair, rowIndex) => (
              <div key={rowIndex} className="flex space-x-2">
                {seatPair.map((seat) => (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    className={getSeatStyle(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Aisle Separator */}
          <div className="flex flex-col items-center h-full py-4">
            <div className="h-80 w-1 bg-gray-400"></div>
            <span className="text-xs text-gray-500 mt-2 p-2 rotate-90 whitespace-nowrap">
              Separate
            </span>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {rightColumn.map((seatPair, rowIndex) => (
              <div key={rowIndex} className="flex space-x-2">
                {seatPair.map((seat) => (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    className={getSeatStyle(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Selection Summary */}
        {selectedSeats.size > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">Selected Seats:</h3>
                <p className="text-sm text-gray-600">
                  {Array.from(selectedSeats).join(", ")} ({selectedSeats.size}{" "}
                  seat
                  {selectedSeats.size !== 1 ? "s" : ""})
                </p>
              </div>
              <Link
                to={"/PaymentProcessing"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { BusStructure };
