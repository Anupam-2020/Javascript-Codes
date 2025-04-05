import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true,
        },
        qualification: {
            type: String,
            required: true
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        worksInHospitals: [
            {
                hospital: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Hospital",
                    required: true
                },
                hoursWorked: {
                    type: Number,
                    required: true,
                    min: 0
                }
            }
        ]
    },
    {timestamps: true}
)


export const Doctor = mongoose.model('Doctor', doctorSchema);