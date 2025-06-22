import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"],
      default: "full-time",
    },
    salaryRange: {
      type: Number, // e.g., [50000, 70000]
      required: true, 
    },
    experienceLevel: {
      type: String,
      required: true,
    },
    requirements: [{
      type: String, // e.g., "Bachelor's degree in Computer Science"
    }],
    position: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    applicants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    }],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
