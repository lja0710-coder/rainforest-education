import React from 'react';
import { motion } from 'framer-motion';

const CompanyIntro: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">关于雨林教育</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            雨林教育成立于2010年，是国内领先的考研辅导机构，致力于为广大考研学子提供优质的教育资源和个性化的辅导服务。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">我们的使命</h3>
            <p className="text-gray-600">
              通过提供高质量的教育资源和专业的辅导服务，帮助每个学生实现自己的考研梦想，
              培养具有创新精神和实践能力的高素质人才。
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">我们的愿景</h3>
            <p className="text-gray-600">
              成为中国考研教育领域最受信赖的品牌，为学生提供全方位的学习解决方案，
              推动中国高等教育的发展和人才培养质量的提升。
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">我们的价值观</h3>
            <p className="text-gray-600">
              以学生为中心，注重教学质量，坚持诚信为本，追求卓越创新，
              我们相信每个学生都有无限的潜力，只要给予适当的引导和支持。
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">我们的优势</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-semibold">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-700">专业的师资团队</h4>
                  <p className="text-gray-600 mt-1">
                    我们拥有一支由高校教授、博士和考研辅导专家组成的师资团队，他们具有丰富的教学经验和深厚的专业知识。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-semibold">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-700">个性化的辅导方案</h4>
                  <p className="text-gray-600 mt-1">
                    根据每个学生的学习情况和目标，我们提供个性化的辅导方案，帮助学生高效备考，提高学习效果。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-semibold">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-700">优质的学习资料</h4>
                  <p className="text-gray-600 mt-1">
                    我们精心编写的学习资料覆盖考研的各个科目，内容全面、重点突出，帮助学生系统掌握知识点。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 bg-green-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-600/20 flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Logo design based on the provided image */}
                  <path d="M100 40C122.091 40 140 57.9086 140 80H150C150 52.3858 127.614 30 100 30C72.3858 30 50 52.3858 50 80H60C60 57.9086 77.9086 40 100 40Z" fill="#34D399" />
                  <path d="M160 70C171.046 70 180 78.9543 180 90V110C180 121.046 171.046 130 160 130H150C144.477 130 140 125.523 140 120V80C140 74.4772 144.477 70 150 70H160Z" fill="#34D399" />
                  <path d="M40 70C51.0457 70 60 78.9543 60 90V110C60 121.046 51.0457 130 40 130H30C24.4772 130 20 125.523 20 120V80C20 74.4772 24.4772 70 30 70H40Z" fill="#34D399" />
                  <path d="M100 130L100 160M100 160L115 180M100 160L85 180" stroke="#065F46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M150 130L150 160M150 160L165 180M150 160L135 180" stroke="#065F46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 130L50 160M50 160L65 180M50 160L35 180" stroke="#065F46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 180L170 180L160 200L40 200L30 180Z" fill="#34D399" />
                  <path d="M100 180L100 200" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-green-500/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-green-400/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;