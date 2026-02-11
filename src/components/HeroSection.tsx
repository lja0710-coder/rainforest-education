import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              让考研之路<br />
              <span className="text-green-300">不再孤单</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-lg">
              雨林教育提供专业的考研辅导和优质的学习资料，帮助你高效备考，一战成硕！
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
              >
                查看课程
              </Link>
              <Link 
                to="/shop" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center border border-white/30"
              >
                资料商城
              </Link>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 border-2 border-green-700 flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-green-700 flex items-center justify-center text-xs font-bold">
                  +
                </div>
              </div>
              <div className="text-green-100">
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm">学员选择我们</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-green-500/30 rounded-3xl blur-xl"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 relative">
                {/* Logo based on the provided image */}
                <div className="flex justify-center mb-6">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Clouds/Tree top */}
                    <path d="M100 40C122.091 40 140 57.9086 140 80H150C150 52.3858 127.614 30 100 30C72.3858 30 50 52.3858 50 80H60C60 57.9086 77.9086 40 100 40Z" fill="#34D399" />
                    <path d="M160 70C171.046 70 180 78.9543 180 90V110C180 121.046 171.046 130 160 130H150C144.477 130 140 125.523 140 120V80C140 74.4772 144.477 70 150 70H160Z" fill="#34D399" />
                    <path d="M40 70C51.0457 70 60 78.9543 60 90V110C60 121.046 51.0457 130 40 130H30C24.4772 130 20 125.523 20 120V80C20 74.4772 24.4772 70 30 70H40Z" fill="#34D399" />
                    
                    {/* Tree trunk */}
                    <path d="M100 130L100 160M100 160L115 180M100 160L85 180" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M150 130L150 160M150 160L165 180M150 160L135 180" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M50 130L50 160M50 160L65 180M50 160L35 180" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Book */}
                    <path d="M30 180L170 180L160 200L40 200L30 180Z" fill="#34D399" />
                    <path d="M100 180L100 200" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">雨林教育</h2>
                  <p className="text-green-100 mb-6">专业考研辅导机构</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-300">15+</div>
                      <div className="text-xs text-green-100">年辅导经验</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-300">50+</div>
                      <div className="text-xs text-green-100">专业教师</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-300">98%</div>
                      <div className="text-xs text-green-100">成功率</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-green-800 font-bold py-3 rounded-lg transition-colors hover:bg-green-100">
                    免费试听课程
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213,142.97,293.31,144.79,378.24,128.43,461.24,103.58Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;