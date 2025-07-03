import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // optional but great for animation

function LandFooter() {
  const navigate = useNavigate();

  const loginLinks = [
    { label: 'Login as TPO', path: '/tpo/login' },
    { label: 'Login as Management', path: '/management/login' },
    { label: 'Login as Super Admin', path: '/admin' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-10 mt-16 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Admin Login Buttons */}
        <div className="flex flex-wrap justify-center items-center max-md:gap-3 md:gap-6 mb-8">
          {loginLinks.map((link, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(link.path)}
              className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-md text-white text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-gray-400"
        >
          <p>© 2025 <span className="text-green-500 font-semibold">College Placement Management System</span>. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">Developed by Final Year Students of VSM College of Engineering</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default LandFooter;

