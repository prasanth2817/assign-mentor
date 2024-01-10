import express from "express"
import MentorRoutes from "./Mentor.js"
import StudentRoutes from "./Student.js"
const router= express.Router()

router.use("/mentor",MentorRoutes)
router.use("/student",StudentRoutes)

export default router