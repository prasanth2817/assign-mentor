import mongoose from "./index.js";

const StudentSchema = new mongoose.Schema({
    StudentId: {
        type: Number,
        required: true,
        unique: true,
    },
    StudentName: {
        type: String,
        required: true,
    },
    MentorAssigned: {
        MentorId: { type: Number },
        MentorName: { type: String },
    },
    MentorHistory: [{
        MentorId: Number,
        MentorName: String,
        AssignedAt: { type: Date, default: Date.now }
    }],
},{
    collection:'Students',
    versionKey:false
});

const StudentsModel= mongoose.model('Students',StudentSchema)

export default StudentsModel