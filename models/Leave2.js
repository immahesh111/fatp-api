import mongoose from "mongoose";
import { Schema } from "mongoose";

const leaveSchema1 = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    shift: { type: String, required: true }, // Added shift field
    date: { type: Date, required: true }, // Assuming you want to keep track of the date
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    appliedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    // Raw Material Storage Questions
    rawMaterialStorage: {
        question1: { type: String },
        question2: { type: String },
        question3: { type: String },
        question4: { type: String },
    },
});

const Leave2 = mongoose.model("Leave1", leaveSchema1);
export default Leave2;