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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Wavesfuture</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#mission" className="text-gray-700 hover:text-blue-600 transition duration-300">Mission</a>
              <a href="#technologies" className="text-gray-700 hover:text-blue-600 transition duration-300">Technologies</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition duration-300">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="mission" className="pt-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 animate-on-scroll">
                We're building the future of <span className="text-blue-600">human connection</span>
              </h1>
              <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 animate-on-scroll">
                Pioneering technologies that connect people in meaningful ways and shape the future of digital interaction.
              </p>
              <div className="mt-10 animate-on-scroll">
                <a href="#technologies" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                  Explore our technologies
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[70vh] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="Digital Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 bg-white">
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
                title: "Artificial Intelligence",
                description: "Advanced AI systems that understand and enhance human interactions while making technology more intuitive and accessible.",
                image: "https://images.unsplash.com/photo-1680697964095-9bebe66b6dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Extended Reality",
                description: "Immersive technologies that blend digital and physical worlds, creating new dimensions for work, education, and social connection.",
                image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Digital Infrastructure",
                description: "Robust systems that power the backbone of digital communication, ensuring reliable and seamless connectivity worldwide.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Banner */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-on-scroll">
            Our innovations give people new ways to connect
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 animate-on-scroll">
            Through AI, extended reality, and advanced digital solutions, we're creating technologies that help people build meaningful connections.
          </p>
          <div className="mt-10 animate-on-scroll">
            <a href="#products" className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-300">
              Discover our products
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Shop the latest devices and expand your world
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col animate-on-scroll">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Glasses" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Smart Vision Glasses</h3>
              <p className="text-xl text-gray-600 mb-6">Capture, share and stay in the moment, completely hands-free.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Shop now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col animate-on-scroll">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1622979135240-caa6648190b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="VR Headset" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Immersive VR Headset</h3>
              <p className="text-xl text-gray-600 mb-6">Dive into the wonder of mixed reality with our newest technology.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Shop now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Banner */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Connect in new ways with our products
              </h2>
              <p className="text-xl text-gray-600 mb-8 animate-on-scroll">
                Our technologies are designed to enhance human connection and create meaningful experiences.
              </p>
              <div className="space-x-4 animate-on-scroll">
                <a href="#technologies" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                  Explore our technologies
                </a>
                <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
                  Go to Help Center
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People connecting" 
                className="rounded-lg shadow-lg animate-on-scroll"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              And we're committed to making a positive impact
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Safety and expression",
                description: "Protecting your voice and helping you connect and share safely",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data and privacy",
                description: "Giving you control over your privacy and protecting your information",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Responsible innovation",
                description: "Building for the future with privacy and safety in mind",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col animate-on-scroll">
                <div className="rounded-lg overflow-hidden aspect-video mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-16">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Meet our leadership
              </h2>
              <p className="text-xl text-gray-600 animate-on-scroll">
                Wavesfuture's leaders are guiding our company as mixed reality and AI evolve, helping to create the next evolution of digital connection.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 animate-on-scroll">
                Get to know our leadership
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "John Anderson",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Mitchell",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Michael Chen",
                role: "Chief Product Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Amelia Rodriguez",
                role: "Chief Marketing Officer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((leader, index) => (
              <div key={index} className="flex flex-col animate-on-scroll">
                <div className="rounded-lg overflow-hidden aspect-square mb-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Get in touch with us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Have questions about our products or technologies? We're here to help you connect and explore the possibilities.
            </p>
          </div>

          <div className="md:flex md:gap-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="bg-gray-100 p-8 rounded-lg h-full animate-on-scroll">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">123 Innovation Drive, Suite 100<br/>Technology Park, CA 94103</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-600">contact@wavesfuture.com</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-6 animate-on-scroll">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" placeholder="Your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Your message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">Wavesfuture</div>
              <p className="text-gray-600 max-w-md">
                Pioneering technologies that connect people in meaningful ways and shape the future of digital interaction.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Products</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">Smart Vision Glasses</a>
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">Immersive VR Headset</a>
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">AI Assistants</a>
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">Developers</a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#mission" className="text-gray-600 block hover:text-blue-600 transition duration-300">Mission</a>
                <a href="#about" className="text-gray-600 block hover:text-blue-600 transition duration-300">About</a>
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">Careers</a>
                <a href="#" className="text-gray-600 block hover:text-blue-600 transition duration-300">News</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="text-gray-600">
              <p>© 2024 Wavesfuture. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
