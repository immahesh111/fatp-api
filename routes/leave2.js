import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave, getLeave, getLeaves, getLeaveDetail, updateLeave } from '../controllers/leaveController2.js'


const router2 = express.Router()

router2.post('/add', authMiddleware, addLeave)
router2.get('/detail/:id', authMiddleware, getLeaveDetail)
router2.get('/:id/:role', authMiddleware, getLeave)
router2.get('/', authMiddleware, getLeaves)
router2.put('/:id', authMiddleware, updateLeave)


export default router2
