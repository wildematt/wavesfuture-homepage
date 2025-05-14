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
            <div className="text-center max-w-5xl mx-auto">
              <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 animate-on-scroll">
              We are shaping the future using <span className="text-blue-600">AI to empower businesses.</span>
              </h1>
              <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 animate-on-scroll">
              Empowering industries like e-commerce, agriculture, and logistics with innovative AI technologies that enable smarter and more intuitive solutions.
              </p>
              <div className="mt-10 animate-on-scroll">
                {/* 移除了Explore our technologies按钮 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="innovations" className="pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technology combined with innovation makes anything possible
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "AI-Powered E-commerce Marketing Tool",
                description: "Creating intelligent product visuals in seconds-boosting click-through rates and sales with automated image generation and smart layout tools.",
                image: "https://images.unsplash.com/photo-1664447973006-ac31f9fdfac2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "AI-Powered Sales System",
                description: "Providing merchants with AI-driven tools for content creation, visual optimization, and digital marketing—turning traffic into revenue.",
                image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "AI-Powered Agricultural Solutions",
                description: "Our AI and automation technologies are transforming digital commerce—optimizing everything from agricultural traceability to warehouse and packaging automation.",
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
              Boost
              </h3>
              <p className="text-lg text-gray-600 mb-8">
              Boost is an AI platform that generates product text and images for e-commerce sites. It provides seamless workflows for merchants, enhancing productivity, efficiency, and quality of product content through AI technology.
              </p>
              <a href="https://www.booost.cc/" target="_blank" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
              Learn more
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
              FineTabs Al New Tab
              </h3>
              <p className="text-lg text-gray-600 mb-8">
              FineTabs is an innovative browser extension that leverages AI-powered tools and desktop widgets to help users customize and streamline their browser homepage, enhancing both aesthetics and the overall browsing experience.
              </p>
              <a href="https://finetabs.com/" target="_blank" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
                Learn more
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
              AI Thesis Formatter
              </h3>
              <p className="text-lg text-gray-600 mb-8">
              AI Thesis Formatter is a one-click tool that automatically formats your graduation paper to meet academic standards—adjusting fonts, spacing, citations, and more in minutes.
              </p>
              <a href="https://paper.finetabs.com/#/paper" target="_blank" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
              Learn more
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/air.png" 
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
            Drive your growth with Wavesfuture’s trusted expertise <br/> and dependable solutions.
            </h2>
            <div className="h-1 w-24 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2</div>
              <div className="text-lg text-white opacity-90">Global offices</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">20</div>
              <div className="text-lg text-white opacity-90">Employees</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-lg text-white opacity-90">Tech & platform partners</div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">20,000+</div>
              <div className="text-lg text-white opacity-90">Paid customers</div>
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1024px-Shopify_logo_2018.svg.png" width={150} alt="Shopify" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20250504041148" width={120} alt="Amazon" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1600px-Shopee.svg.png" width={140} alt="Shopee" className="max-h-48" />
            </div>
            
            <div className="flex-1 flex items-center justify-center animate-on-scroll">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AliExpress_2024.svg/2880px-AliExpress_2024.svg.png" alt="AliExpress_2024" width={150} className="max-h-48" />
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
            If you have any questions about our products or technologies, our team is here to support you and help you explore potential opportunities.
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
                    <span className="text-gray-600">contact@wavesfuture.com</span>
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
                <a href="https://www.booost.cc/" target='_blank' className="text-gray-400 block hover:text-blue-600 transition duration-300">Booost</a>
                <a href="https://finetabs.com/" target='_blank' className="text-gray-400 block hover:text-blue-600 transition duration-300">FineTabs</a>
                <a href="https://paper.finetabs.com/#/paper" target='_blank' className="text-gray-400 block hover:text-blue-600 transition duration-300">AI graduation thesis</a>
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
