// src/App.tsx

import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">企业名称</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">首页</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">服务</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">关于我们</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">联系我们</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              引领创新，驱动未来
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              我们致力于为客户提供最优质的服务和解决方案，助力企业实现数字化转型
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务特色 */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              我们的服务
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              为您提供全方位的解决方案
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "技术咨询",
                description: "专业的技术团队为您提供最佳实践建议",
                icon: "💡"
              },
              {
                title: "软件开发",
                description: "定制化的软件解决方案，满足您的业务需求",
                icon: "💻"
              },
              {
                title: "数据分析",
                description: "深度的数据挖掘和分析，助力决策优化",
                icon: "📊"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              关于我们
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              十年专注，只为更好的服务
            </p>
          </div>
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              我们是一家致力于技术创新的企业，拥有专业的研发团队和丰富的项目经验。
              自成立以来，我们始终坚持以客户需求为导向，提供高质量的解决方案。
              我们的目标是帮助更多企业实现数字化转型，在竞争激烈的市场中保持领先优势。
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">联系方式</h3>
              <div className="text-gray-300">
                <p>电话：123-456-7890</p>
                <p>邮箱：contact@company.com</p>
                <p>地址：某某市某某区某某街道123号</p>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">快速链接</h3>
              <div className="space-y-2">
                <a href="#home" className="text-gray-300 block hover:text-white">首页</a>
                <a href="#services" className="text-gray-300 block hover:text-white">服务</a>
                <a href="#about" className="text-gray-300 block hover:text-white">关于我们</a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">关注我们</h3>
              <div className="space-y-2 text-gray-300">
                <p>微信公众号：企业名称</p>
                <p>微博：@企业名称</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">© 2024 企业名称. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
