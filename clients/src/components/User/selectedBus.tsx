import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/Auth";
import { ticketDetailsProps } from "../../types";
export const SelectedBus = () => {
  const [ticketDetails, setTicketDetails] = useState<ticketDetailsProps[]>([]);
  const { authUser } = useAuth();
  useEffect(() => {
    if (!authUser?.email) return;
    const userEmail = authUser.email;
    async function fetchTicket() {
      const response = await axios.post(
        "http://localhost:3000/api/bookedticket/view",
        { userEmail },
      );
      setTicketDetails(response.data.ticketBooked);
    }
    fetchTicket();
  }, [authUser?.email]);
  console.log(ticketDetails[0]);

  return (
    <div className="bg-white p-4 shadow-md rounded-xl w-full max-w-md h-screen flex flex-col">
      <h1 className="text-2xl font-medium text-red-500 bg-yellow-300 p-2 flex justify-center rounded-lg">Selected Bus </h1>
      <div className="p-1 flex-1 overflow-y-auto ">
        {ticketDetails &&
          ticketDetails.map((bus, i) => {
            return (
              <div key={i} className="mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-lg">
                  <h2 className="text-lg font-bold">{bus.busId.busName} </h2>
                  <p className="text-sm opacity-90">
                    {bus.busId.source} →{bus.busId.destination}
                  </p>
                </div>

                <div className="py-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Seats</span>
                    <span className="font-semibold">
                      {bus.seats.join(", ")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Seat Fare</span>
                    <span className="font-semibold">
                      {bus.busId.farePerSeat}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Selected</span>
                    <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-bold">
                      {bus.seats.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Arrival Time</span>
                    <span className="font-semibold">
                      {bus.busId.arrivalTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Departure Time</span>
                    <span className="font-semibold">
                      {bus.busId.departureTime}
                    </span>
                  </div>
                  <div className="border-b-4 pt-3 flex justify-between items-center ">
                    <span className="text-sm text-gray-500">
                      Booking Confirmed
                    </span>
                    <button className="bg-indigo-600 text-white px-2 py-2 mb-2 rounded-lg text-sm hover:bg-indigo-700 transition">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
