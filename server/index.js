import express, { urlencoded } from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import colors from 'colors'
import cors from 'cors'
configDotenv()
const app = express()
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

import { ConnectMongoDb } from './Connection.js';
import { UserRouter } from './Router/user.js';
import { checkAuthUser } from './middleware/user.js';
import { BusRouter } from './Router/bus.js';
import { DriverRouter } from './Router/Driver.js';
import { CityRouter } from './Router/city.js';

const corsOption = {
    origin: "http://localhost:5173",
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}


app.use(cors(corsOption))
app.use(urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
ConnectMongoDb(MONGO_URI)

app.use('/api/user', UserRouter)
app.use('/api/bus', BusRouter)
app.use('/api/driver', DriverRouter)
app.use('/api/city',CityRouter)
app.get('/', (req, res) => {
    return res.json({ mission: "start" })
})
// app.get('/', checkAuthUser("tokenId"), (req, res) => {
//     return res.json({ mission: "start" })
// })

app.listen(port, () => { console.log(`Server is started at port : ${port}`.bgMagenta) })