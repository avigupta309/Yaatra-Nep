import mongoose, { Schema, model } from "mongoose";

function capitalizeWords(str) {
    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}
const busSchema = new Schema({
    busName: {
        type: String,
        required: true,
        trim: true,
    },
    busNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    lattitude: {
        type: Number,
        trim: true,
        default: 28.7041
    },
    longititude: {
        type: Number,
        trim: true,
        default: 77.1025
    },
    type: {
        type: String,
        enum: ['AC', 'Non-AC'],
        default: "Non-AC",
        required: true,
    },
    source: {
        type: String,
        required: true,
        trim: true,
        set: capitalizeWords,
    },
    destination: {
        type: String,
        required: true,
        trim: true,
        set: capitalizeWords,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    farePerSeat: {
        type: Number,
        required: true,
        min: 0,
    },
    totalSeats: {
        type: Number,
        required: true,
        min: 1,
    },
    availableSeats: {
        type: Number,
        required: true,
        min: 0,
    },
    amenities: {
        type: [String],
        default: [],
    },
    operator: {
        type: String,
        required: true,
        trim: true,
    },
    busDriver: {
        type: mongoose.Schema.ObjectId,
        ref: "drivers",
        required: true
    }
}, { timestamps: true });

export const BusModel = new model('Bus', busSchema);
