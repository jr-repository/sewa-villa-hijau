import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/layout/Hero';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Globe, ChevronRight, Quote } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering work that exceeds expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true partners in their success journey."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we create is designed to achieve measurable business outcomes."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our international experience helps brands succeed in diverse markets."
    }
  ];

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "10+ years of experience in brand strategy and visual storytelling."
    },
    {
      name: "Omar Hassan",
      role: "Digital Marketing Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in growth marketing and data-driven campaign optimization."
    },
    {
      name: "Layla Mansour",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialist in creating compelling narratives that drive engagement."
    },
    {
      name: "Khalid Rashed",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Full-stack developer with expertise in modern web technologies."
    }
  ];

  const stats = [
    { number: "120+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Countries Served" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About VEXA Creative"
        subtitle="We don't just create content. We build magnetic brands."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  VEXA Creative was born from a simple yet powerful vision: to help brands tell their stories 
                  in ways that truly resonate with their audience. Founded in Dubai in 2019, we started as a 
                  small team of passionate creatives who believed that every brand deserves to shine.
                </p>
                <p>
                  What began as a boutique creative studio has evolved into a full-service digital agency, 
                  but our core mission remains unchanged. We're here to bridge the gap between brands and 
                  their audiences through authentic storytelling, stunning visuals, and strategic thinking.
                </p>
                <p>
                  Today, we're proud to work with over 120 clients across 15+ countries, from startups 
                  finding their voice to established brands looking to reinvent themselves in the digital space.
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="VEXA Creative Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900">2019</div>
                  <div className="text-gray-600">Founded in Dubai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-vexa mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4 bg-gradient-button rounded-xl w-fit mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The creative minds behind VEXA's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              "Our mission is to make your brand unforgettable. We believe every brand has a unique story 
              worth telling, and we're here to help you tell it in the most compelling way possible."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-lg px-8 py-4">
                Work With Us <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Based in Dubai */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Based in Dubai — Trusted Worldwide
            </h2>
            <p className="text-xl mb-8 opacity-90">
              From our headquarters in the heart of Dubai, we serve clients across the globe, 
              bringing international perspective to every project.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;