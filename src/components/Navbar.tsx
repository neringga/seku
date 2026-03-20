import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-on-surface/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Seku Logo" 
            className="h-8 w-auto mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui8a3UoPH65di2XALMxhC_B9jLNusKOBGAn-l4_51vEXl_CiNqxr6X5IUR1El-ZadsiacJ8oFSb9OJ6jpdDLf0zIU5x_ErS-0SH4ZQKMG24ihuOP7jZ92Od3swE0v8qXWJlv-tv1JAnwXgn5SUFW9z8uf90dWwqWF4OBWKbHYW0PZfOqy1dp8Z7AZC_g3XRI-xqUTero5igGOrHxsA-MEp1QVjE6hx28ztTHvrZ5Sy3mqfIkHBFu1xFXD9vkV_DxGeveyLmIGzniyU" 
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#vision" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Our Vision</Link>
          <Link to="/#how-it-works" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">How it Works</Link>
          <Link to="/pricing" className="text-primary border-b-2 border-primary pb-1 font-medium text-sm transition-colors">Pricing</Link>
          <Link to="/#heirloom" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">The Heirloom</Link>
        </div>
        <Link to="/pricing">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium text-sm shadow-sm"
          >
            Start Free Trial
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}
