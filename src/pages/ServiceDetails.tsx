import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from '@/pages/NotFound';
import { 
  Check, Code, Database, Bot, LineChart, Braces, Server, 
  BarChart, Brain, Cpu, GitBranch, CheckCircle, ArrowRight, Clock, Users, Target, Zap, Shield
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Contact from '@/components/Contact';

interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface Process {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CaseStudy {
  title: string;
  description: string;
  result: string;
  image: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  heroImage: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: Process[];
  caseStudies: CaseStudy[];
}

const servicesData: Record<string, ServiceData> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    description: 'Professional custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: <Code className="w-10 h-10 text-mavintel-accent" />,
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Responsive Design',
        description: 'Mobile-first, responsive websites that look great on all devices and screen sizes.',
        icon: <Code className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'E-commerce Solutions',
        description: 'Full-featured online stores with secure payment processing and inventory management.',
        icon: <Server className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Content Management Systems',
        description: 'Easy-to-use CMS platforms that let you update your website content without technical knowledge.',
        icon: <Database className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Progressive Web Apps',
        description: 'Fast, reliable web applications that work offline and provide app-like experiences.',
        icon: <Zap className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: 'Fast Loading Times',
        description: 'Optimized websites that load quickly, improving user experience and SEO rankings.'
      },
      {
        title: 'SEO Optimized',
        description: 'Built with search engine optimization in mind to help your business get discovered online.'
      },
      {
        title: 'Secure & Reliable',
        description: 'Industry-standard security practices to keep your data and your customers safe.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Websites that grow with your business, handling increased traffic and functionality.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Requirement Analysis',
        description: 'We understand your business goals, target audience, and technical requirements.',
        icon: <Target className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 2,
        title: 'Design & Planning',
        description: 'Create wireframes, mockups, and project roadmap for your approval.',
        icon: <Braces className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build your website using modern frameworks and best coding practices.',
        icon: <Code className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Thorough testing across devices and browsers, then deploy to production.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 5,
        title: 'Support & Maintenance',
        description: 'Ongoing support, updates, and optimization to keep your site running smoothly.',
        icon: <Shield className="w-6 h-6 text-mavintel-accent" />
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform',
        description: 'Built a complete online store with payment gateway integration and inventory management.',
        result: '150% increase in online sales within 6 months.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'graphic-designing': {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    description: 'Creative and professional graphic design services to enhance your brand identity and visual communication across all platforms.',
    icon: <Braces className="w-10 h-10 text-mavintel-purple" />,
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Logo & Brand Identity',
        description: 'Unique logo designs and complete brand identity packages that make your business stand out.',
        icon: <Target className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Social Media Graphics',
        description: 'Eye-catching graphics for social media posts, covers, and advertisements.',
        icon: <Users className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'Print Design',
        description: 'Professional designs for business cards, brochures, flyers, and other print materials.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'UI/UX Design',
        description: 'User-friendly interface designs for websites and mobile applications.',
        icon: <Braces className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: 'Strong Brand Identity',
        description: 'Create a memorable brand that resonates with your target audience.'
      },
      {
        title: 'Professional Image',
        description: 'High-quality designs that establish credibility and trust with customers.'
      },
      {
        title: 'Better Engagement',
        description: 'Visually appealing designs that capture attention and drive engagement.'
      },
      {
        title: 'Consistent Branding',
        description: 'Cohesive visual identity across all your marketing materials.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Brief & Research',
        description: 'Understand your brand, industry, and design preferences.',
        icon: <Target className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 2,
        title: 'Concept Development',
        description: 'Create initial design concepts for your review and feedback.',
        icon: <Brain className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 3,
        title: 'Design Refinement',
        description: 'Refine chosen concept based on your feedback and preferences.',
        icon: <Braces className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 4,
        title: 'Final Delivery',
        description: 'Deliver final designs in all required formats and resolutions.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-purple" />
      }
    ],
    caseStudies: [
      {
        title: 'Restaurant Brand Identity',
        description: 'Complete brand identity design including logo, menu, and marketing materials.',
        result: 'Increased brand recognition by 80% in local market.',
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.',
    icon: <LineChart className="w-10 h-10 text-mavintel-cyan" />,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'SEO Optimization',
        description: 'Improve your search engine rankings and drive organic traffic to your website.',
        icon: <BarChart className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Social Media Marketing',
        description: 'Engaging social media campaigns that build community and drive conversions.',
        icon: <Users className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Content Marketing',
        description: 'Create valuable content that attracts, engages, and converts your target audience.',
        icon: <Bot className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'Paid Advertising (PPC)',
        description: 'Strategic paid advertising campaigns on Google, Facebook, and other platforms.',
        icon: <Target className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: 'Increased Visibility',
        description: 'Get found by more potential customers through improved online presence.'
      },
      {
        title: 'Higher ROI',
        description: 'Data-driven strategies that maximize return on your marketing investment.'
      },
      {
        title: 'Better Customer Engagement',
        description: 'Build relationships with your audience through targeted content.'
      },
      {
        title: 'Measurable Results',
        description: 'Track and analyze campaign performance with detailed analytics and reports.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Market Research',
        description: 'Analyze your target audience, competitors, and market opportunities.',
        icon: <LineChart className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create a customized digital marketing strategy aligned with your goals.',
        icon: <Target className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 3,
        title: 'Campaign Execution',
        description: 'Launch and manage campaigns across selected digital channels.',
        icon: <Zap className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 4,
        title: 'Optimization & Reporting',
        description: 'Continuously optimize campaigns and provide detailed performance reports.',
        icon: <BarChart className="w-6 h-6 text-mavintel-cyan" />
      }
    ],
    caseStudies: [
      {
        title: 'B2B Lead Generation',
        description: 'SEO and content marketing campaign for software company.',
        result: '300% increase in qualified leads within 4 months.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || 'web-development'];

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block p-3 rounded-full bg-white/5 mb-6">
                  {service.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-gradient">{service.title}</span>
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  {service.description}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden neo-blur aspect-video"
              >
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4"
              >
                Key Features
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">What We Offer</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/80">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-purple/10 text-mavintel-purple text-sm font-medium mb-4"
              >
                Business Impact
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">Measurable Results</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/5">
                      <Check className="w-6 h-6 text-mavintel-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/80">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-cyan/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-cyan/10 text-mavintel-cyan text-sm font-medium mb-4"
              >
                Our Process
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">How We Work</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-6 relative"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4"
              >
                Case Studies
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">Success Stories</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group rounded-2xl neo-blur overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-foreground/80 mb-4">{study.description}</p>
                    <div className="flex items-center gap-2 text-mavintel-accent font-medium">
                      <Check className="w-5 h-5" />
                      <span>{study.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;
