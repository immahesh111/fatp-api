import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave, getLeave, getLeaves, getLeaveDetail, updateLeave } from '../controllers/leaveController1.js'


const router1 = express.Router()

router1.post('/add', authMiddleware, addLeave)
router1.get('/detail/:id', authMiddleware, getLeaveDetail)
router1.get('/:id/:role', authMiddleware, getLeave)
router1.get('/', authMiddleware, getLeaves)
router1.put('/:id', authMiddleware, updateLeave)


export default router1
