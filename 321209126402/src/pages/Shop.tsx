import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<{product: Product, quantity: number}[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const categories: Category[] = [
    { id: "all", name: "全部", count: 120 },
    { id: "political", name: "政治", count: 30 },
    { id: "english", name: "英语", count: 25 },
    { id: "math", name: "数学", count: 35 },
    { id: "computer", name: "计算机", count: 20 },
    { id: "package", name: "套装资料", count: 10 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "考研政治历年真题解析（2010-2026）",
      category: "political",
      description: "包含近16年考研政治真题及详细解析，帮助考生了解命题规律和解题技巧。",
      price: 59.9,
      discountPrice: 49.9,
      image: "https://via.placeholder.com/300x200?text=Political+Exam",
      rating: 4.8,
      reviews: 1245,
      isBestSeller: true
    },
    {
      id: 2,
      name: "考研英语词汇红宝书（乱序版）",
      category: "english",
      description: "考研英语核心词汇5500，乱序编排，记忆更高效，附赠同步练习册。",
      price: 49.9,
      image: "https://via.placeholder.com/300x200?text=English+Vocabulary",
      rating: 4.7,
      reviews: 987
    },
    {
      id: 3,
      name: "考研英语阅读100篇",
      category: "english",
      description: "精选100篇考研英语阅读文章，难度与真题一致，包含详细解析和长难句分析。",
      price: 45.9,
      discountPrice: 39.9,
      image: "https://via.placeholder.com/300x200?text=English+Reading",
      rating: 4.6,
      reviews: 856,
      isNew: true
    },
    {
      id: 4,
      name: "高等数学辅导讲义（上下册）",
      category: "math",
      description: "全面覆盖高等数学知识点，例题丰富，讲解透彻，适合各层次考生。",
      price: 69.9,
      image: "https://via.placeholder.com/300x200?text=Advanced+Math",
      rating: 4.9,
      reviews: 1567,
      isBestSeller: true
    },
    {
      id: 5,
      name: "线性代数辅导讲义",
      category: "math",
      description: "系统讲解线性代数知识点，重点突出，例题典型，帮助考生快速掌握。",
      price: 39.9,
      image: "https://via.placeholder.com/300x200?text=Linear+Algebra",
      rating: 4.7,
      reviews: 789
    },
    {
      id: 6,
      name: "概率论与数理统计辅导讲义",
      category: "math",
      description: "深入浅出讲解概率论与数理统计知识点，配套大量习题和解析。",
      price: 39.9,
      discountPrice: 34.9,
      image: "https://via.placeholder.com/300x200?text=Probability",
      rating: 4.6,
      reviews: 654
    },
    {
      id: 7,
      name: "数据结构高分笔记",
      category: "computer",
      description: "计算机考研数据结构核心考点总结，图文并茂，易于理解和记忆。",
      price: 79.9,
      image: "https://via.placeholder.com/300x200?text=Data+Structure",
      rating: 4.8,
      reviews: 892,
      isBestSeller: true
    },
    {
      id: 8,
      name: "计算机组成原理辅导讲义",
      category: "computer",
      description: "系统讲解计算机组成原理知识点，结合考研真题，帮助考生理解和掌握。",
      price: 69.9,
      discountPrice: 59.9,
      image: "https://via.placeholder.com/300x200?text=Computer+Organization",
      rating: 4.7,
      reviews: 567,
      isNew: true
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    
    // Show cart after adding item
    setShowCart(true);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.discountPrice || item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <Layout>
      {/* Shop Header */}
      <section className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">资料商城</h1>
          <p className="text-green-200">精心挑选的考研复习资料，助您一臂之力</p>
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-green-50 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-green-800 mb-4">分类导航</h2>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
                          selectedCategory === category.id 
                            ? "bg-green-600 text-white" 
                            : "hover:bg-green-100 text-green-800"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="bg-white text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h2 className="text-xl font-bold text-green-800 mb-4">价格筛选</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800">最低价</span>
                      <input 
                        type="number" 
                        className="w-24 px-2 py-1 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="0"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-800">最高价</span>
                      <input 
                        type="number" 
                        className="w-24 px-2 py-1 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="200"
                      />
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      应用筛选
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:w-3/4">
              {/* Shop Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-green-800">
                    {selectedCategory === "all" ? "全部资料" : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    共找到 {filteredProducts.length} 个产品
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <select className="bg-green-50 border border-green-200 text-green-800 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>推荐排序</option>
                    <option>价格从低到高</option>
                    <option>价格从高到低</option>
                    <option>评分最高</option>
                    <option>最新上架</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-green-100"
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
                      {product.discountPrice && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          优惠
                        </div>
                      )}
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          新品
                        </div>
                      )}
                      {product.isBestSeller && !product.isNew && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                          畅销
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          {product.discountPrice ? (
                            <div className="flex items-center">
                              <span className="text-green-600 font-bold text-xl">¥{product.discountPrice}</span>
                              <span className="text-gray-400 line-through text-sm ml-2">¥{product.price}</span>
                            </div>
                          ) : (
                            <span className="text-green-600 font-bold text-xl">¥{product.price}</span>
                          )}
                        </div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          加入购物车
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm">
                  <a href="#" className="px-3 py-2 text-green-800 bg-white border border-green-200 rounded-l-md hover:bg-green-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="px-3 py-2 text-white bg-green-600 border border-green-600 hover:bg-green-700 transition-colors">1</a>
                  <a href="#" className="px-3 py-2 text-green-800 bg-white border border-green-200 hover:bg-green-50 transition-colors">2</a>
                  <a href="#" className="px-3 py-2 text-green-800 bg-white border border-green-200 hover:bg-green-50 transition-colors">3</a>
                  <span className="px-3 py-2 text-gray-400 bg-white border border-green-200">...</span>
                  <a href="#" className="px-3 py-2 text-green-800 bg-white border border-green-200 hover:bg-green-50 transition-colors">10</a>
                  <a href="#" className="px-3 py-2 text-green-800 bg-white border border-green-200 rounded-r-md hover:bg-green-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: showCart ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-green-800">购物车 ({getCartItemCount()})</h2>
          <button 
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">购物车是空的</h3>
            <p className="text-gray-600 mb-4">快去添加一些考研资料吧！</p>
            <button 
              onClick={() => setShowCart(false)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              继续购物
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 pb-4 border-b border-gray-100">
                    <div className="w-20 h-20 bg-green-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 opacity-50">
                          <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 line-clamp-1">{item.product.name}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-green-600 font-medium">
                          ¥{item.product.discountPrice || item.product.price}
                        </div>
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:text-gray-700"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 min-w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="mt-2 text-red-500 hover:text-red-700 text-sm"
                      >
                        移除
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">小计</span>
                <span className="font-semibold">¥{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">运费</span>
                <span className="font-semibold">¥0.00</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold">总计</span>
                <span className="text-lg font-bold text-green-600">¥{getCartTotal().toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3">
                去结算
              </button>
              <button 
                onClick={() => setShowCart(false)}
                className="w-full bg-transparent hover:bg-green-50 text-green-700 border border-green-500 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                继续购物
              </button>
            </div>
          </>
        )}
      </motion.div>

      {/* Overlay */}
      {showCart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowCart(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </Layout>
  );
};

export default Shop;