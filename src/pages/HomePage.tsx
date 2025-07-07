import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/layout/Hero';
import { Button } from '@/components/ui/button';
import { Star, ChevronRight, Users, Award, TrendingUp, Zap } from 'lucide-react';

const HomePage = () => {
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
      features: ["Monthly content calendars", "Creative captions & brand voice", "Community engagement", "Insights & growth tracking"]
    },
    {
      icon: Award,
      title: "Content Creation", 
      description: "We turn ideas into stunning visuals that connect with your audience and drive action.",
      features: ["Product photos & videos", "Reels, TikToks & UGC-style content", "Personal branding shoots", "Content days & visual planning"]
    },
    {
      icon: TrendingUp,
      title: "Website Design & Development",
      description: "Your website is your digital HQ. Let's make it powerful and beautiful.",
      features: ["Company websites", "Portfolio & landing pages", "Mobile-first & responsive design", "Clean UI/UX"]
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "We bring the right message to the right audience — at the right time.",
      features: ["Instagram & TikTok Ads", "Google Ads & campaign strategy", "Funnel setup & email marketing", "Targeted reach & conversion"]
    }
  ];

  const testimonials = [
    {
      name: "Style Age Clinic",
      location: "Dubai",
      text: "Vexa Creative has completely transformed our brand presence online. From content creation to digital marketing, their work is consistently creative, strategic, and results-driven.",
      rating: 5
    },
    {
      name: "Amira K.",
      location: "Founder of Aesthé",
      text: "Working with Vexa Creative feels like having an in-house creative team. They deeply understand our vision and always deliver content that's fresh, on-brand, and visually stunning.",
      rating: 5
    },
    {
      name: "Saeed R.",
      location: "CEO of Root Wellness UAE",
      text: "We chose Vexa because we needed more than just a social media agency—we needed a creative partner. They handled everything from website design to full digital campaigns.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Where Brands Come to Life"
        subtitle="From bold visuals to digital campaigns — we help brands grow, connect, and stand out."
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-gradient text-lg px-8 py-4">
            Let's Work Together <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Hero>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We don't just create content.
              <br />
              <span className="text-gradient-vexa">We build magnetic brands.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VEXA Creative is a full-service digital agency based in Dubai, dedicated to helping brands grow 
              and glow in the digital space. We specialize in visual storytelling, digital strategy, and high-performing content.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Whether you're launching a new brand, building your online presence, or looking to scale your 
              business — VEXA is your creative partner in this digital era.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">Our style?</div>
                <div className="text-gray-600">Clean. Modern. Bold.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">Our mission?</div>
                <div className="text-gray-600">Make your brand unforgettable.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">120+</div>
                <div className="text-gray-600">Happy Clients Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you grow online through creative content and smart strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-button rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-button rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Clients <span className="text-gradient-vexa">Across the Globe</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to have worked with over 120+ clients across industries — from beauty and wellness to tech and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white p-6 rounded-2xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VEXA Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why VEXA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900">Aesthetic-first, result-driven</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900">Clean & bold visuals</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900">Young, global-minded creative team</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900">One-stop creative house</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg md:col-span-2 lg:col-span-2">
                <div className="text-lg font-semibold text-gray-900">Based in Dubai — working worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's take your brand to the next level.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
                Let's Work Together <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;