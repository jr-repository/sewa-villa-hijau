import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/layout/Hero';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Instagram, ChevronRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@vexacreative.com",
      link: "mailto:hello@vexacreative.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      link: "#"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@vexauae",
      link: "https://instagram.com/vexauae"
    }
  ];

  const services = [
    "Social Media Management",
    "Content Creation",
    "Website Design & Development",
    "Digital Marketing",
    "Brand Identity Design",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Let's take your brand to the next level."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
      />

      {/* Contact Info */}
      <section className="py-20">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4 bg-gradient-button rounded-xl w-fit mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <a 
                  href={info.link}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-gradient w-full py-4 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                <p className="text-gray-600 mb-8">
                  Ready to take your brand to the next level? We'd love to hear about your project 
                  and discuss how we can help you achieve your goals.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Timeline</h4>
                    <p className="text-gray-600">Most projects start within 1-2 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
                    <p className="text-gray-600">30-minute strategy call to discuss your needs</p>
                  </div>
                </div>

                {/* Dubai Map */}
                <div className="rounded-xl overflow-hidden h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6841313431!2d54.89784845395154!3d25.07640924056069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1706789012345!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope, but most projects are completed within 2-6 weeks from start to finish."
                },
                {
                  question: "Do you work with small businesses?",
                  answer: "Absolutely! We work with businesses of all sizes, from startups to established enterprises."
                },
                {
                  question: "What's included in your packages?",
                  answer: "Each package is customized to your needs. We'll discuss exactly what's included during our consultation."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes, we offer various retainer packages for ongoing social media management and marketing support."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
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
              Ready to start your project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free 30-minute consultation to discuss your brand goals
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
              Book Free Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;