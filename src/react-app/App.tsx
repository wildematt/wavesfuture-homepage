// src/App.tsx

import React, { useEffect, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050816]">
      {/* 导航栏 */}
      <nav className="bg-[#050816]/80 backdrop-blur-md fixed w-full z-10 border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">企业名称</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition duration-300">首页</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition duration-300">项目</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition duration-300">服务</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition duration-300">关于我们</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition duration-300">联系我们</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section id="home" className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#050816] opacity-70"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Tech Background" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 ref={titleRef} className="text-5xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 sm:text-6xl md:text-7xl animate-on-scroll">
              引领创新，驱动未来
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-on-scroll">
              我们致力于为客户提供最优质的服务和解决方案，助力企业实现数字化转型
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow animate-on-scroll">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 md:py-4 md:text-lg md:px-10 transition duration-300">
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent"></div>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="py-24 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 sm:text-4xl mb-2">
              我们的项目
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-300">
              探索我们的创新技术解决方案
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "智能识别系统",
                description: "基于深度学习的计算机视觉技术，实现高精度目标识别和分类",
                image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                tags: ["人工智能", "计算机视觉", "深度学习"]
              },
              {
                title: "云端数据处理平台",
                description: "高性能分布式计算框架，支持PB级数据的实时处理和分析",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                tags: ["云计算", "大数据", "实时分析"]
              },
              {
                title: "区块链资产管理",
                description: "安全可靠的区块链技术应用，为数字资产提供透明且不可篡改的管理系统",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                tags: ["区块链", "金融科技", "安全"]
              }
            ].map((project, index) => (
              <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition duration-300 animate-on-scroll">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-blue-900/50 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务特色 */}
      <section id="services" className="py-24 bg-[#0a101f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 sm:text-4xl mb-2">
              我们的服务
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-300">
              为您提供全方位的解决方案
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "技术咨询",
                description: "专业的技术团队为您提供最佳实践建议，帮助您规划技术路线和架构选择",
                icon: "💡",
                gradient: "from-purple-400 to-blue-500"
              },
              {
                title: "软件开发",
                description: "定制化的软件解决方案，满足您的业务需求，从概念到交付的全流程支持",
                icon: "💻",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                title: "数据分析",
                description: "深度的数据挖掘和分析，助力决策优化，发现业务洞察和市场机会",
                icon: "📊",
                gradient: "from-blue-400 to-indigo-500"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition duration-300 animate-on-scroll">
                <div className={`text-5xl mb-6 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                    了解更多
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-24 bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 sm:text-4xl mb-2">
              关于我们
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-300">
              十年专注，只为更好的服务
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover rounded-xl shadow-xl animate-on-scroll"
              />
            </div>
            <div className="md:col-span-3 flex flex-col justify-center animate-on-scroll">
              <p className="text-gray-300 leading-relaxed mb-6">
                我们是一家致力于技术创新的企业，拥有专业的研发团队和丰富的项目经验。
                自成立以来，我们始终坚持以客户需求为导向，提供高质量的解决方案。
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                我们的团队由顶尖的工程师、设计师和产品专家组成，他们拥有多年的行业经验和卓越的技术能力。
                我们专注于人工智能、云计算、大数据和区块链等前沿技术领域，不断探索创新应用。
              </p>
              <p className="text-gray-300 leading-relaxed">
                我们的目标是帮助更多企业实现数字化转型，在竞争激烈的市场中保持领先优势。
                通过我们的技术和服务，帮助客户解决复杂问题，实现业务增长。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#0a101f] border-t border-blue-600/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">联系方式</h3>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  123-456-7890
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contact@company.com
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  某某市某某区某某街道123号
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">快速链接</h3>
              <div className="space-y-2">
                <a href="#home" className="text-gray-400 block hover:text-cyan-400 transition duration-300">首页</a>
                <a href="#projects" className="text-gray-400 block hover:text-cyan-400 transition duration-300">项目</a>
                <a href="#services" className="text-gray-400 block hover:text-cyan-400 transition duration-300">服务</a>
                <a href="#about" className="text-gray-400 block hover:text-cyan-400 transition duration-300">关于我们</a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 企业名称. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
