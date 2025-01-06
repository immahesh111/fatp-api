import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave, getLeave, getLeaves, getLeaveDetail, updateLeave } from '../controllers/leaveController9.js'


const router3 = express.Router()

router3.post('/add', authMiddleware, addLeave)
router3.get('/detail/:id', authMiddleware, getLeaveDetail)
router3.get('/:id/:role', authMiddleware, getLeave)
router3.get('/', authMiddleware, getLeaves)
router3.put('/:id', authMiddleware, updateLeave)


export default router3
