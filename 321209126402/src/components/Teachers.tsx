import React from 'react';
import { motion } from 'framer-motion';

interface Teacher {
  id: number;
  name: string;
  title: string;
  subject: string;
  bio: string;
  image: string;
}

const Teachers: React.FC = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "张明",
      title: "考研政治辅导专家",
      subject: "政治",
      bio: "北京大学马克思主义学院博士，拥有10年考研政治辅导经验，授课风格深入浅出，重点突出，帮助众多学生在政治科目上取得高分。",
      image: "https://via.placeholder.com/300x400?text=Teacher+Zhang"
    },
    {
      id: 2,
      name: "李华",
      title: "考研英语首席讲师",
      subject: "英语",
      bio: "北京外国语大学英语语言文学博士，曾任新东方考研英语首席讲师，擅长英语词汇、阅读和写作的教学，教学方法独特高效。",
      image: "https://via.placeholder.com/300x400?text=Teacher+Li"
    },
    {
      id: 3,
      name: "王强",
      title: "考研数学金牌讲师",
      subject: "数学",
      bio: "清华大学数学博士，考研数学辅导专家，对考研数学命题规律有深入研究，善于将复杂的数学问题简单化，让学生轻松掌握解题技巧。",
      image: "https://via.placeholder.com/300x400?text=Teacher+Wang"
    },
    {
      id: 4,
      name: "赵敏",
      title: "计算机专业课名师",
      subject: "计算机",
      bio: "中科院计算所博士，拥有丰富的计算机专业教学经验，对408计算机专业基础综合考试有深入研究，教学内容针对性强。",
      image: "https://via.placeholder.com/300x400?text=Teacher+Zhao"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">师资力量</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们拥有一支由高校教授、博士和考研辅导专家组成的师资团队，他们具有丰富的教学经验和深厚的专业知识。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-green-100"
            >
              <div className="h-64 bg-green-100 relative">
                {/* Using placeholder image since no actual images are provided */}
                <div className="w-full h-full bg-gradient-to-b from-green-200 to-green-100 flex items-center justify-center">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 opacity-40">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1152 22.737 17.2522 22.2426 16.5211C21.7482 15.79 21.0431 15.2348 20.25 15.005C19.6149 14.8271 18.9313 14.9407 18.333 15.315C17.7346 15.6893 17.25 16.3063 17 17C17 16.3063 16.5154 15.6893 15.917 15.315C15.3187 14.9407 14.6351 14.8271 14 15.005C13.2069 15.2348 12.5018 15.79 12.0074 16.5211C11.513 17.2522 11.2507 18.1152 11.25 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                    <p className="text-green-600 font-medium">{teacher.subject}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {teacher.title}
                  </div>
                </div>
                <p className="text-gray-600 mt-3 line-clamp-3">{teacher.bio}</p>
                <button className="mt-4 bg-transparent hover:bg-green-50 text-green-700 font-medium py-1 px-4 rounded transition-colors">
                  查看详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center">
            了解更多教师团队
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;