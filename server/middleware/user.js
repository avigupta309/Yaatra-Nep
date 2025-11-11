import { veriFyToken } from "../service/user.js"

export function checkAuthUser(cookieName) {
    return (req, res, next) => {
    console.log("here is good")
        try {
            const validCookie = req.cookies[cookieName]
            const user = veriFyToken(validCookie)
            console.log(" user data is here ")
            req.validUser = user;
            next()
        } catch (error) {
            return res.status(400).json({ data: "Cookie Not Match" })
        }
    }
}