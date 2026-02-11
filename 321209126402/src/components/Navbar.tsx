import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X as XIcon, 
  Phone as PhoneIcon, 
  Mail as MailIcon 
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">雨教</span>
          </div>
          <span className="text-xl font-bold text-green-700">雨林教育</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-green-700 font-medium hover:text-green-500 transition-colors">首页</Link>
          <Link to="/about" className="text-green-700 font-medium hover:text-green-500 transition-colors">关于我们</Link>
          <Link to="/courses" className="text-green-700 font-medium hover:text-green-500 transition-colors">课程介绍</Link>
          <Link to="/teachers" className="text-green-700 font-medium hover:text-green-500 transition-colors">师资力量</Link>
          <Link to="/testimonials" className="text-green-700 font-medium hover:text-green-500 transition-colors">成功案例</Link>
          <Link to="/shop" className="text-green-700 font-medium hover:text-green-500 transition-colors">资料商城</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-green-700">
            <PhoneIcon size={18} className="mr-1" />
            <span>400-123-4567</span>
          </div>
          <div className="flex items-center text-green-700">
            <MailIcon size={18} className="mr-1" />
            <span>info@rainforesteducation.com</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-green-700 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">首页</Link>
            <Link to="/about" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">关于我们</Link>
            <Link to="/courses" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">课程介绍</Link>
            <Link to="/teachers" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">师资力量</Link>
            <Link to="/testimonials" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">成功案例</Link>
            <Link to="/shop" className="text-green-700 font-medium py-2 hover:text-green-500 transition-colors">资料商城</Link>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center text-green-700 mb-2">
                <PhoneIcon size={18} className="mr-2" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center text-green-700">
                <MailIcon size={18} className="mr-2" />
                <span>info@rainforesteducation.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;