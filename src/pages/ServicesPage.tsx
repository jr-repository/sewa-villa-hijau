import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/layout/Hero';
import { Button } from '@/components/ui/button';
import { Users, Award, TrendingUp, Zap, Camera, Globe, PenTool, BarChart3, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "We build and manage your brand's social media — with strategy, storytelling, and consistency.",
      features: ["Monthly content calendars", "Creative captions & brand voice", "Community engagement", "Insights & growth tracking"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Camera,
      title: "Content Creation", 
      description: "We turn ideas into stunning visuals that connect with your audience and drive action.",
      features: ["Product photos & videos", "Reels, TikToks & UGC-style content", "Personal branding shoots", "Content days & visual planning"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Your website is your digital HQ. Let's make it powerful and beautiful.",
      features: ["Company websites", "Portfolio & landing pages", "Mobile-first & responsive design", "Clean UI/UX"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "We bring the right message to the right audience — at the right time.",
      features: ["Instagram & TikTok Ads", "Google Ads & campaign strategy", "Funnel setup & email marketing", "Targeted reach & conversion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const additionalServices = [
    {
      icon: PenTool,
      title: "Brand Identity Design",
      description: "Complete brand identity packages from logo to brand guidelines."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven strategies to scale your business online."
    },
    {
      icon: Award,
      title: "Creative Consulting",
      description: "Expert advice on creative direction and brand positioning."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="We help you grow online through creative content and smart strategy."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-gradient text-lg px-8 py-4">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Hero>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of digital services designed to elevate your brand
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-button rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-button rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="btn-gradient">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Specialized services to complement your digital growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4 bg-gradient-button rounded-xl w-fit mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">
              How we turn your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We deep dive into your brand, goals, and target audience" },
              { step: "02", title: "Strategy", description: "We create a comprehensive strategy tailored to your needs" },
              { step: "03", title: "Creation", description: "Our team brings your vision to life with stunning visuals" },
              { step: "04", title: "Growth", description: "We optimize and scale your digital presence continuously" }
            ].map((item, index) => (
              <div 
                key={item.step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)' }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to grow your brand?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
              Start Your Project <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;