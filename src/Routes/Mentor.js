import express from "express"
import MentorController from "../Controller/Mentor.js"
const router= express.Router()

router.put("/assignstudent",MentorController.AssignStudent)
router.post("/creatementor",MentorController.createMentor)
router.get("/:id/assignedstudents", MentorController.getStudentsbyMentor);

export default router