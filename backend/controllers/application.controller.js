import { Application } from "../models/application.model";


export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            })
        };
        //check if user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, application: userId });

        if(existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            });
        }
    } catch (error) {
        console.log(error)
    }
}