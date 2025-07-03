import React, { useEffect, useState } from 'react';
import Logo from '../../assets/CPMS.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function LandingNavbar() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonSize, setButtonSize] = useState('lg');
  const [logoText, setLogoText] = useState(' Placement Management System');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setButtonSize('sm');
        setLogoText('PMS');
      } else if (width <= 768) {
        setButtonSize('md');
        setLogoText(' Placement Management System');
      } else {
        setButtonSize('lg');
        setLogoText(' Placement Management System');
      }
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'backdrop-blur-md bg-white/60 dark:bg-gray-900/70 shadow-lg sticky top-0 border-b border-green-300 dark:border-green-500'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 duration-200"
          onClick={() => navigate('/')}
        >
          <img
            src={Logo}
            alt="CPMS Logo"
            className="rounded-xl border border-gray-300 dark:border-gray-600 w-14 h-14 md:w-20 md:h-20 shadow-md"
          />
          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-green-500 to-emerald-400 bg-clip-text text-transparent`}
          >
            {logoText}
          </h1>
        </div>

        {/* Button Section */}
        <div className="flex gap-2 items-center">
          <Button
            variant="outline-primary"
            size={buttonSize}
            className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,123,255,0.5)] dark:border-white dark:text-white"
            onClick={() => navigate('/student/login')}
          >
            Login
          </Button>

          <Button
            variant="success"
            size={buttonSize}
            className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_10px_#22c55e] dark:text-white"
            onClick={() => navigate('/student/signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default LandingNavbar;

