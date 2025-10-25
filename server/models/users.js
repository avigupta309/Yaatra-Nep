import { Schema, model, set } from "mongoose";
import { createHmac, randomBytes } from 'crypto'
function capitalizeWords(str) {
    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

const userSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        set: capitalizeWords,
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true
    },
    salt: {
        type: String,
        trim: true
    }
}, { timestamps: true })


userSchema.pre("save", function (next) {
    const currentuser = this
    if (!currentuser.isModified("password")) return next();
    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt).update(currentuser.password).digest("hex")
    currentuser.password = hashPassword;
    currentuser.salt = salt
    return next()

})

userSchema.methods.matchPassword = function (typePassword) {
    const user = this
    const UserHashPassword = createHmac("sha256", user.salt).update(typePassword).digest("hex")
    const isValidUser = UserHashPassword === user.password
    if (!isValidUser) return null
    return user
}

export const userModel = new model("users", userSchema)