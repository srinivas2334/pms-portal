import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../../assets/heroImg.jpg';

function LandingHeroPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleCreateAccount = () => {
    if (email.trim()) {
      navigate('/student/signup', {
        state: { prefillEmail: email }
      });
    } else {
      navigate('/student/signup');
    }
  };

  const handleScrollAbout = () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative h-[90vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
        >
          Empower Your Career with <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
          >
            PMS Portal
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-gray-300 text-lg sm:text-xl font-light"
        >
          Discover opportunities, track progress, and connect with your TPO — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            className="px-5 py-3 w-80 sm:w-96 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-green-400 text-black transition duration-300"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 hover:shadow-[0_0_15px_#22c55e] transition duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8"
        >
          <p
            className="inline-block cursor-pointer mt-4 text-sm text-white opacity-70 hover:opacity-100 transition duration-300 underline underline-offset-4"
            onClick={handleScrollAbout}
          >
            Learn more about PMS
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingHeroPage;
