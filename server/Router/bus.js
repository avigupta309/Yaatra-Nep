import { Router } from 'express'
import { HandleBusDelete, HandleBusEdit, HandleBusInfo, HandleBusSubmitData, ViewAllBus } from '../controllers/bus.js';
import { filterBus, HandleSpecificBus } from '../static/bus.js';

export const BusRouter = Router();

BusRouter.post('/busupload', HandleBusSubmitData)
BusRouter.delete('/busdelete', HandleBusDelete)
BusRouter.put('/busedit', HandleBusEdit)
BusRouter.post('/HandleBusInfo', HandleBusInfo)
BusRouter.get('/viewbus', ViewAllBus)

// static code is here

BusRouter.get('/specificbus/:id', HandleSpecificBus)
BusRouter.get('/filterbus', filterBus)
