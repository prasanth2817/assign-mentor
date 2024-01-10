import express from "express"
import studentController from "../Controller/Student.js"
const router= express.Router()

router.get("/",studentController.getStudents)
router.get("/:id/previousmentors", studentController.getpreviousMentors);
router.post("/createstudent",studentController.createStudents)
router.put("/changestudentmentor/:Id",studentController.changeStudentMentor);

export default router