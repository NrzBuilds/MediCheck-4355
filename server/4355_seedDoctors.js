const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Doctor = require("./models/4355_Doctor");

dotenv.config();

const doctors = [
  { name: "Dr. Aarti Sharma", specialization: "Dermatologist", qualification: "MBBS, MD (Dermatology)", experience: 8, contact: "9876543210" },
  { name: "Dr. Rohan Mehta", specialization: "Cardiologist", qualification: "MBBS, DM (Cardiology)", experience: 12, contact: "9876543211" },
  { name: "Dr. Priya Nair", specialization: "Gastroenterologist", qualification: "MBBS, MD (Gastro)", experience: 10, contact: "9876543212" },
  { name: "Dr. Vikram Singh", specialization: "General Physician", qualification: "MBBS, MD (Medicine)", experience: 6, contact: "9876543213" },
  { name: "Dr. Neha Kapoor", specialization: "Endocrinologist", qualification: "MBBS, DM (Endocrinology)", experience: 9, contact: "9876543214" },
  { name: "Dr. Sameer Khan", specialization: "Pulmonologist", qualification: "MBBS, MD (Pulmonology)", experience: 11, contact: "9876543215" },
  { name: "Dr. Anjali Deshmukh", specialization: "Neurologist", qualification: "MBBS, DM (Neurology)", experience: 14, contact: "9876543216" },
  { name: "Dr. Karan Malhotra", specialization: "Orthopedic", qualification: "MBBS, MS (Ortho)", experience: 7, contact: "9876543217" },
  { name: "Dr. Shalini Rao", specialization: "Hepatologist", qualification: "MBBS, DM (Hepatology)", experience: 10, contact: "9876543218" },
  { name: "Dr. Arjun Verma", specialization: "Rheumatologist", qualification: "MBBS, MD (Rheumatology)", experience: 8, contact: "9876543219" },
  { name: "Dr. Divya Iyer", specialization: "ENT Specialist", qualification: "MBBS, MS (ENT)", experience: 9, contact: "9876543220" },
  { name: "Dr. Manish Joshi", specialization: "Urologist", qualification: "MBBS, MCh (Urology)", experience: 13, contact: "9876543221" },
  { name: "Dr. Pooja Agarwal", specialization: "Allergist", qualification: "MBBS, MD (Allergy)", experience: 6, contact: "9876543222" },
  { name: "Dr. Rajesh Kumar", specialization: "Infectious Disease Specialist", qualification: "MBBS, MD (Medicine)", experience: 15, contact: "9876543223" },
  { name: "Dr. Sneha Pillai", specialization: "Vascular Surgeon", qualification: "MBBS, MS (Vascular Surgery)", experience: 10, contact: "9876543224" },
  { name: "Dr. Amit Bansal", specialization: "Proctologist", qualification: "MBBS, MS (Proctology)", experience: 8, contact: "9876543225" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding...");

    await Doctor.deleteMany();
    console.log("Old doctors removed");

    await Doctor.insertMany(doctors);
    console.log("Sample doctors added successfully!");

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error.message);
    process.exit(1);
  }
};

seedDB();