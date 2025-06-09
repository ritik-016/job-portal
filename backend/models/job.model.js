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
    company: {
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
      required: true,
    },
    salaryRange: {
      type: [Number], // e.g., [50000, 70000]
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
      required: true,
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

export const Job = mongoose.model("Job", jobSchema);
