import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin as MapPinIcon, 
  Phone as PhoneIcon, 
  Mail as MailIcon, 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  Linkedin as LinkedinIcon 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-green-700 font-bold">雨教</span>
              </div>
              <span className="text-xl font-bold">雨林教育</span>
            </div>
            <p className="mb-4 text-green-200">
              雨林教育致力于为考研学生提供高质量的教育资源和个性化的辅导服务，
              帮助每个学生实现自己的梦想。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/courses" className="text-green-200 hover:text-white transition-colors">课程介绍</Link></li>
              <li><Link to="/teachers" className="text-green-200 hover:text-white transition-colors">师资力量</Link></li>
              <li><Link to="/testimonials" className="text-green-200 hover:text-white transition-colors">成功案例</Link></li>
              <li><Link to="/shop" className="text-green-200 hover:text-white transition-colors">资料商城</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-green-200">北京市海淀区中关村南大街5号</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-200">400-123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-200">info@rainforesteducation.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">订阅更新</h3>
            <p className="mb-4 text-green-200">
              订阅我们的新闻通讯，获取最新的考研资讯和优惠信息。
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center text-green-300 text-sm">
          <p>© 2026 雨林教育 版权所有 | 京ICP备12345678号-1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;