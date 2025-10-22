export interface Bus {
  _id: string;
  busName: string;
  type: "AC" | "Non-AC";
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  farePerSeat: number;
  totalSeats: number;
  availableSeats: number;
  amenities: string[];
  rating: number;
  operator: string;
}

export interface Seat {
  id: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
  type: "window" | "aisle";
}

export const busDetails: BusFeatures = {
  driverName: "Rajesh Kumar",
  busColor: "Blue & White",
  busNumber: "MH-12-AB-1234",
  totalSeats: 28,
  source: "Mumbai",
  destination: "Pune",
  departureTime: "6:00 AM",
  arrivalTime: "9:30 AM",
  busType: "AC Sleeper",
  amenities: [
    "WiFi",
    "Charging Point",
    "Entertainment",
    "Blanket",
    "Water Bottle",
  ],
};

export interface Booking {
  id: string;
  userId: string;
  busId: string;
  selectedSeats: number[];
  passengerDetails: PassengerDetail[];
  totalAmount: number;
  bookingDate: Date;
  travelDate: Date;
  status: "confirmed" | "pending" | "cancelled";
  paymentMethod: string;
  bookingReference: string;
}

export interface PassengerDetail {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  seatNumber: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin";
}

export interface SearchFilters {
  source: string;
  destination: string;
  // travelDate: Date
  busType?: "AC" | "Non-AC";
}

export interface BusFeatures {
  driverName: string;
  busColor: string;
  busNumber: string;
  totalSeats: number;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  busType: string;
  amenities: string[];
}
