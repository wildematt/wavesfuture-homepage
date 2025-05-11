// src/App.tsx

import React, { useEffect, useRef } from 'react';
import './App.css';
import bgVideo from './assets/bgvideo.mp4';

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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-11 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-12">
              <div className="text-2xl font-semibold text-black tracking-tight">Wavesfuture</div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#mission" className="text-gray-700 hover:text-blue-600 transition duration-300">Mission</a>
                <a href="#innovations" className="text-gray-700 hover:text-blue-600 transition duration-300">Innovations</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 transition duration-300">Products</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
              </div>
            </div>
            <div>
              {/* 移除了Get Started按钮 */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="mission" className="pt-20 bg-white overflow-hidden relative min-h-screen flex items-center">
        {/* 视频背景 */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            src={bgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-screen h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </div>
        
        {/* 内容 */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 animate-on-scroll">
                We're building the future of <span className="text-blue-600">intelligent industry</span>
              </h1>
              <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 animate-on-scroll">
                Pioneering AI technologies that empower e-commerce, agriculture, and logistics with smarter, more connected solutions.
              </p>
              <div className="mt-10 animate-on-scroll">
                {/* 移除了Explore our technologies按钮 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="innovations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              And the technologies that make it possible
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "AI-Powered E-commerce",
                description: "Creating intelligent product visuals in seconds—boosting click-through rates and sales with automated image generation and smart layout tools.",
                image: "https://images.unsplash.com/photo-1664447973006-ac31f9fdfac2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Smart Sales Enablement",
                description: "Equipping merchants with AI-driven tools for content creation, visual optimization, and digital merchandising—turning traffic into revenue.",
                image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Advanced R&D Capabilities",
                description: "We develop AI and automation solutions that transform digital commerce—optimizing everything from agricultural traceability to warehouse and packaging automation.",
                image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col animate-on-scroll">
                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                <div className="mt-4">
                  {/* 移除了Explore more按钮 */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Products
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>

          {/* 案例展示 1 */}
          <div className="flex flex-col md:flex-row items-center mb-32 animate-on-scroll">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="text-sm font-medium text-blue-600 mb-2">P/1</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Booost-your productivity, efficiency, quality
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                your productivity, efficiency, quality
              </p>
              <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
                了解更多案例
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/casestudy.png" 
                  alt="Software Interface" 
                  className="w-full h-auto transform scale-105"
                />
              </div>
            </div>
          </div>

          {/* 案例展示 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center animate-on-scroll">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <div className="text-sm font-medium text-blue-600 mb-2">P/2</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How Figma Academy used our platform to earn $300k with a design course
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                我们的学习平台帮助内容创作者构建高质量的线上课程，通过智能工具简化内容制作流程，提高学习体验和转化率。
              </p>
              <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
                了解更多案例
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/didi.jpg" 
                  alt="Design Course Interface" 
                  className="w-full h-auto transform scale-105"
                />
              </div>
            </div>
          </div>

          {/* 案例展示 3 */}
          <div className="flex flex-col md:flex-row items-center mt-32 animate-on-scroll">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="text-sm font-medium text-blue-600 mb-2">P/3</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How Booost uses AI to power software design + subscriptions
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                我们的AI驱动设计工具简化了创意流程，提升工作效率并降低成本，让您的设计团队能够专注于创新。
              </p>
              <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
                了解更多案例
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Software Interface" 
                  className="w-full h-auto transform scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* 使用bgxx.jpg作为背景图片 */}
        <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none">
          <img 
            src="/bgxx.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6 animate-on-scroll">
              Fuel growth with Wavesfuture's proven expertise and trusted reliability
            </h2>
            <div className="h-1 w-24 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">8</div>
              <div className="text-lg text-white opacity-90">Global offices</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">450</div>
              <div className="text-lg text-white opacity-90">Employees</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">1,200+</div>
              <div className="text-lg text-white opacity-90">Carriers</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">80+</div>
              <div className="text-lg text-white opacity-90">Tech & platform partners</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">20,000+</div>
              <div className="text-lg text-white opacity-90">Paid customers</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">8B+</div>
              <div className="text-lg text-white opacity-90">Tracked shipments</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">11M+</div>
              <div className="text-lg text-white opacity-90">Returns processed</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-lg text-white opacity-90">Sales channels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">
              Customer Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              Innovating together with industry-leading companies
            </p>
          </div>
          
          {/* 第一行logo */}
          <div className="flex justify-between items-center mb-24 max-w-7xl mx-auto">
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://img.alicdn.com/imgextra/i2/O1CN01vyfjJF1XOCcubJJ4k_!!6000000002913-2-tps-704-280.png" alt="Genting" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://img.alicdn.com/imgextra/i1/O1CN01JNXSHD1y8AMFT0gAf_!!6000000006533-2-tps-704-280.png" alt="J&T Cargo" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://img.alicdn.com/imgextra/i1/O1CN01JS3BHU1zUtetis1S2_!!6000000006718-2-tps-704-280.png" alt="Charles & Keith" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://img.alicdn.com/imgextra/i2/O1CN01akgik31V83QnC5T8d_!!6000000002607-2-tps-704-280.png" alt="Kepi Kenangan" className="max-h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 bg-[#F6F7FB] relative">
        {/* 背景图片 - 右下角对齐 */}
        <div className="absolute bottom-0 right-0 w-[1000px] h-[300px] overflow-hidden z-0">
          <img 
            src="/world.jpg" 
            alt="World Map Background" 
            className="w-full h-full object-contain absolute bottom-0 right-0"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Get in touch with us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Have questions about our products or technologies? We're here to help you connect and explore the possibilities.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="p-8 rounded-lg h-full animate-on-scroll">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">Room 01, 2nd Floor, Research Building, Plot D-12<br/>Information Industry Park, Qixing District, Guilin City</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-600">2445008914@qq.com</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-gray-600">+(44) 7827 167562</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-semibold text-black tracking-tight mb-4">Wavesfuture</div>
              <p className="text-gray-400 max-w-md">
                Pioneering AI technologies that empower e-commerce, agriculture, and logistics with smarter, more connected solutions.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Products</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 block hover:text-blue-600 transition duration-300">Booost</a>
                <a href="#" className="text-gray-400 block hover:text-blue-600 transition duration-300">Immersive VR Headset</a>
                <a href="#" className="text-gray-400 block hover:text-blue-600 transition duration-300">AI Assistants</a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#mission" className="text-gray-400 block hover:text-blue-600 transition duration-300">Mission</a>
                <a href="#innovations" className="text-gray-400 block hover:text-blue-600 transition duration-300">Innovations</a>
                <a href="#products" className="text-gray-400 block hover:text-blue-600 transition duration-300">Products</a>
                <a href="#about" className="text-gray-400 block hover:text-blue-600 transition duration-300">About</a>
                <a href="#contact" className="text-gray-400 block hover:text-blue-600 transition duration-300">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="text-gray-400">
              <p>© 2020-2025 Wavesfuture. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;