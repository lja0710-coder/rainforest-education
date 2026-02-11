import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon,
  Star as StarIcon
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;school: string;
  major: string;
  score: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "陈同学",
      school: "北京大学",
      major: "计算机科学与技术",
      score: "总分 425",
      content: "雨林教育的计算机专业课辅导非常专业，老师对知识点的讲解深入浅出，资料也很全面，帮助我在专业课上取得了138分的好成绩。非常感谢雨林教育的老师和团队！",
      image: "https://via.placeholder.com/100x100?text=Student+Chen"
    },
    {
      id: 2,
      name: "林同学",
      school: "复旦大学",
      major: "金融学",
      score: "总分 412",
      content: "数学一直是我的弱项，但在雨林教育王老师的指导下，我的数学成绩从模拟考试的90多分提高到了最终的128分，顺利考上了理想的学校。真的非常感谢雨林教育的帮助！",
      image: "https://via.placeholder.com/100x100?text=Student+Lin"
    },
    {
      id: 3,
      name: "张同学",
      school: "清华大学",
      major: "机械工程",
      score: "总分 430",
      content: "雨林教育的1对1辅导模式非常适合我，老师根据我的学习情况制定了个性化的学习计划，让我的复习效率大大提高。最终能够考上清华，雨林教育功不可没！",
      image: "https://via.placeholder.com/100x100?text=Student+Zhang"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">学员成功案例</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg text-green-200 max-w-3xl mx-auto">
            听听我们的学员怎么说，他们通过雨林教育的辅导，成功考上了理想的大学。
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-green-800/50 rounded-2xl p-6 md:p-10 shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 bg-green-700 rounded-full overflow-hidden flex-shrink-0">
                  {/* Using placeholder image since no actual images are provided */}
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-60">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl mb-6 text-green-100 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                    <div className="flex items-center text-green-300 mt-1">
                      <span>{testimonials[currentIndex].school}</span>
                      <span className="mx-2">•</span>
                      <span>{testimonials[currentIndex].major}</span>
                      <span className="mx-2">•</span>
                      <span>{testimonials[currentIndex].score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors md:-translate-x-1/4"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors md:translate-x-1/4"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-green-400' : 'bg-green-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-green-800/30 p-6 rounded-xl text-center"
          >
            <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
            <p className="text-green-200">学员满意度</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-green-800/30 p-6 rounded-xl text-center"
          >
            <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
            <p className="text-green-200">成功案例</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-green-800/30 p-6 rounded-xl text-center"
          >
            <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
            <p className="text-green-200">辅导经验</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;