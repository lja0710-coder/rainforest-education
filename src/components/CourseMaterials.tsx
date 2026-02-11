import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CourseCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const CourseMaterials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const courseCategories: CourseCategory[] = [
    {
      id: "political",
      name: "政治",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      description: "包含马克思主义基本原理、毛泽东思想和中国特色社会主义理论体系概论、中国近现代史纲要、思想道德修养与法律基础、形势与政策以及当代世界经济与政治等内容。"
    },
    {
      id: "english",
      name: "英语",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: "包括英语一和英语二，涵盖词汇、语法、阅读理解、写作、翻译等方面的知识点和解题技巧。"
    },
    {
      id: "math",
      name: "数学",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: "包括数学一、数学二和数学三，覆盖高等数学、线性代数、概率论与数理统计等学科的核心内容。"
    },
    {
      id: "computer",
      name: "计算机专业课",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "包含数据结构、计算机组成原理、操作系统、计算机网络等计算机专业核心课程的知识点和考试重点。"
    }
  ];

  const materials = [
    {
      id: 1,
      title: "考研政治历年真题解析",
      category: "political",
      image: "https://via.placeholder.com/300x200?text=Political+Exam",
      price: 59.9,
      rating: 4.8,
      reviews: 1245
    },
    {
      id: 2,
      title: "考研英语词汇红宝书",
      category: "english",
      image: "https://via.placeholder.com/300x200?text=English+Vocabulary",
      price: 49.9,
      rating: 4.7,
      reviews: 987
    },
    {
      id: 3,
      title: "高等数学辅导讲义",
      category: "math",
      image: "https://via.placeholder.com/300x200?text=Advanced+Math",
      price: 69.9,
      rating: 4.9,
      reviews: 1567
    },
    {
      id: 4,
      title: "数据结构高分笔记",
      category: "computer",
      image: "https://via.placeholder.com/300x200?text=Data+Structure",
      price: 79.9,
      rating: 4.6,
      reviews: 892
    }
  ];

  const filteredMaterials = selectedCategory === "all" 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">课程资料体系</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们精心编写的考研复习资料，覆盖各个学科的核心知识点和考试重点，帮助你系统高效地备考。
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === "all" 
                ? "bg-green-600 text-white" 
                : "bg-white text-green-700 hover:bg-green-100"
            }`}
          >
            全部资料
          </button>
          {courseCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === category.id 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-green-700 hover:bg-green-100"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Description */}
        {selectedCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10 bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto"
          >
            <p className="text-gray-700">
              {courseCategories.find(c => c.id === selectedCategory)?.description}
            </p>
          </motion.div>
        )}

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMaterials.map((material) => (
            <motion.div
              key={material.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 bg-green-100 relative">
                {/* Using placeholder image since no actual images are provided */}
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 opacity-50">
                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {courseCategories.find(c => c.id === material.category)?.name}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{material.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(material.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({material.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold text-xl">¥{material.price}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    查看详情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-white hover:bg-green-50 text-green-700 border border-green-500 font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center">
            查看更多资料
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseMaterials;