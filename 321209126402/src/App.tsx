import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<div className="text-center text-xl p-8">关于我们 - Coming Soon</div>} />
        <Route path="/courses" element={<div className="text-center text-xl p-8">课程介绍 - Coming Soon</div>} />
        <Route path="/teachers" element={<div className="text-center text-xl p-8">师资力量 - Coming Soon</div>} />
        <Route path="/testimonials" element={<div className="text-center text-xl p-8">成功案例 - Coming Soon</div>} />
        <Route path="/contact" element={<div className="text-center text-xl p-8">联系我们 - Coming Soon</div>} />
      </Routes>
    </AuthContext.Provider>
  );
}
