import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  employerGetAllApplications,
  jobSeekerdDeleteApplication,
  jobSeekerGetAllApplications,
} from "./../controllers/applicationController.js";
const router = express.Router();

router.get("/jobseeker/getall", isAuthenticated, jobSeekerGetAllApplications);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobSeekerdDeleteApplication);

export default router;
