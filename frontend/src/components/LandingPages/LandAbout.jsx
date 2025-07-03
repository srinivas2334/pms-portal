import React from 'react';
import { motion } from 'framer-motion';
import Student from '../../assets/student.jpg';
import TPO from '../../assets/tpo.jpg';
import Management from '../../assets/management.jpg';
import Admin from '../../assets/admin.jpg';

function LandAbout() {
  const roles = [
    {
      title: "Student",
      image: Student,
      description:
        "Students can register, explore job opportunities, apply for jobs, and track application status with a personalized dashboard.",
    },
    {
      title: "TPO (Training & Placement Officer)",
      image: TPO,
      description:
        "TPOs manage company data, job postings, application reviews, and generate insightful reports for placement tracking.",
    },
    {
      title: "Management",
      image: Management,
      description:
        "Management can monitor overall placement activities, review analytics, and control system access and quality assurance.",
    },
    {
      title: "Super User (Admin)",
      image: Admin,
      description:
        "Admins handle all roles with super privileges—managing users, system settings, and ensuring smooth operations across modules.",
    },
  ];

  return (
    <div
      id="about"
      className="bg-gradient-to-tr from-pink-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-10 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 playfair text-gray-800 dark:text-white">
          About CPMS
        </h2>
        <p className="text-md md:text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300 px-3">
          Developed by final year students of VSM College of Engineering, CPMS (Placement Management System) is a powerful web-based platform to streamline and manage campus placements efficiently.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-10 px-4">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-80 max-md:py-3 max-md:px-2 md:p-5 flex flex-col items-center transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#22c55e] dark:hover:shadow-[0_0_20px_#22c55e] hover:-translate-y-1"
          >
            <img
              src={role.image}
              alt={role.title}
              className="w-48 h-48 object-cover rounded-full border-4 border-green-300 shadow-md"
            />
            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-green-700 dark:text-green-400 text-center">
              {role.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{role.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LandAbout;
