import Job from "../models/job.model.js";

//Admin can post a job
export const postJob = async (req, res) => {
    try {
        const { title, description, companyId, location, requirements, salary, jobType, experience, position } = req.body;
        const userId = req.id;

        if(!title || !description || !companyId || !location || !requirements || !salary || !jobType || !experience || !position) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        const job = await Job.create({
            title,
            description,
            comapny: companyId,
            location,
            requirements: requirements.split(","),
            salary: Number(salary),
            jobType,
            experienceLevel: experience,
            position,
            createdBy: userId,
        });
        return res.status(201).json({
            message: "Job posted successfully",
            success: true,
            job
        });
    } catch (error) {
        console.log(error)
    }
}

//Stuent can search for jobs
export const getAllJobs = async (req, res) => {
    try {
        const keywords = req.query.keywords || "";
        const query = {
            $or:[
                {title:{ $regex: keywords, $options: "i" }},
                {description:{ $regex: keywords, $options: "i" }}
            ]
        };
        const jobs = await Job.find(query);
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            jobs
        });
    } catch (error) {
        console.log(error)
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.parama.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Job fetched successfully",
            success: true,
            job
        });
    } catch (error) {
        console.log(error)
    }
}

//job created by admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({createdBy: adminId});
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            jobs
        });
    } catch (error) {
        console.log(error)
    }
}