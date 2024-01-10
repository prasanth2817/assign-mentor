import mongoose from "./index.js";

const mentorSchema = new mongoose.Schema({
    MentorId: {
        type: String,
        required: true,
        unique: true,
    },
    MentorName: {
        type: String,
        required: true,
    },
    studentsAssigned: [
        {
            studentId: Number,
            studentName: String,
        },
    ],
},{
    collection:'Mentors',
    versionKey:false
});

const mentorsModel = mongoose.model('Mentor', mentorSchema);

export default mentorsModel