/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import JobDetails from "./components/Jobs/JobDetails";
import MyJobs from "./components/Jobs/MyJobs";
import PostJobs from "./components/Jobs/PostJobs";
import Application from "./components/Jobs/Application";
import MyApplications from "./components/Jobs/MyApplications";
import NotFound from "./components/Layout/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/job/post" element={<PostJobs />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/application/me" element={<MyApplications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
