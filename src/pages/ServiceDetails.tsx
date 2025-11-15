import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  'web-app': {
    id: 'web-app',
    title: 'AI-Powered Web & App Development',
    description: 'Custom web applications and mobile experiences powered by advanced AI algorithms and machine learning, designed to deliver exceptional user experiences and business results.',
    icon: <Code className="w-10 h-10 text-mavintel-accent" />,
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Intelligent UI/UX Design',
        description: 'AI-driven interfaces that adapt to user behavior and preferences, delivering personalized experiences that improve engagement and conversion.',
        icon: <Braces className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'AI-Driven Content Generation',
        description: 'Automated content creation and optimization systems that produce high-quality, relevant content tailored to your audience.',
        icon: <Bot className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Smart Personalization Systems',
        description: 'Advanced algorithms that analyze user behavior to deliver highly personalized experiences that increase engagement and conversion rates.',
        icon: <Brain className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Automated Testing & Optimization',
        description: 'AI-powered testing frameworks that continuously monitor and optimize application performance, usability, and conversion paths.',
        icon: <GitBranch className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: '35% Increase in User Engagement',
        description: 'AI-powered interfaces adapt to user behavior, creating more engaging and intuitive experiences.'
      },
      {
        title: '42% Higher Conversion Rates',
        description: 'Smart personalization and optimization algorithms significantly improve conversion performance.'
      },
      {
        title: '50% Faster Development Cycles',
        description: 'AI-assisted development and automated testing accelerate time to market for new features.'
      },
      {
        title: '28% Reduction in Support Requests',
        description: 'Intelligent interfaces and predictive assistance reduce user confusion and support needs.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Analysis',
        description: 'We analyze your business goals, user needs, and technical requirements to create a comprehensive development strategy.',
        icon: <Clock className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 2,
        title: 'AI Strategy Integration',
        description: 'Our team identifies optimal AI implementation opportunities within your application architecture.',
        icon: <Code className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 3,
        title: 'Intelligent Design',
        description: 'We create adaptable, AI-driven interface designs that respond to user behavior and preferences.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 4,
        title: 'Development & AI Integration',
        description: 'Our developers build your application with integrated machine learning models and AI components.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 5,
        title: 'Testing & Optimization',
        description: 'We use AI-powered testing frameworks to ensure performance, usability, and conversion optimization.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent" />
      },
      {
        step: 6,
        title: 'Deployment & Continuous Learning',
        description: 'After launch, your application continues to learn and improve based on real user interactions.',
        icon: <ArrowRight className="w-6 h-6 text-mavintel-accent" />
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform Transformation',
        description: 'Implemented AI-powered recommendation engine and personalized shopping experiences.',
        result: '42% increase in conversion rate and 37% improvement in customer retention.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Mobile App Enhancement',
        description: 'Added AI features to existing mobile app for better user engagement.',
        result: '65% increase in user engagement and 28% higher app store rating.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'business': {
    id: 'business',
    title: 'Automated Business Solutions',
    description: 'Transform your business processes with intelligent automation that continuously learns and improves, increasing efficiency and reducing operational costs.',
    icon: <Database className="w-10 h-10 text-mavintel-purple" />,
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Workflow Automation',
        description: 'Intelligent systems that streamline complex business processes, reducing manual work and increasing operational efficiency.',
        icon: <GitBranch className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'Document Processing AI',
        description: 'Advanced machine learning models that extract, analyze, and process information from documents with high accuracy.',
        icon: <Server className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Predictive Maintenance',
        description: 'AI systems that predict equipment failures before they occur, minimizing downtime and maintenance costs.',
        icon: <Cpu className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Intelligent Resource Allocation',
        description: 'Optimization algorithms that ensure optimal allocation of human and material resources across your organization.',
        icon: <BarChart className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: '65% Reduction in Manual Tasks',
        description: 'Automated workflows eliminate repetitive tasks, allowing your team to focus on strategic initiatives.'
      },
      {
        title: '43% Lower Operational Costs',
        description: 'Process optimization and predictive capabilities significantly reduce operational expenses.'
      },
      {
        title: '78% Faster Document Processing',
        description: 'AI-powered document analysis dramatically accelerates information extraction and processing.'
      },
      {
        title: '39% Improved Resource Utilization',
        description: 'Intelligent allocation ensures your resources are deployed where they create maximum value.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Process Assessment',
        description: 'We analyze your current business processes to identify automation opportunities and potential efficiency gains.',
        icon: <Clock className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 2,
        title: 'Solution Design',
        description: 'Our team designs a custom automation solution tailored to your specific business needs and objectives.',
        icon: <Code className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 3,
        title: 'AI Model Development',
        description: 'We develop and train machine learning models specific to your business processes and data types.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 4,
        title: 'Integration & Implementation',
        description: 'Our engineers integrate the automated solution with your existing systems and workflows.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 5,
        title: 'Testing & Validation',
        description: 'We rigorously test the solution to ensure accuracy, reliability, and performance under real-world conditions.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-purple" />
      },
      {
        step: 6,
        title: 'Deployment & Continuous Improvement',
        description: 'After deployment, we monitor performance and continuously refine the system based on operational feedback.',
        icon: <ArrowRight className="w-6 h-6 text-mavintel-purple" />
      }
    ],
    caseStudies: [
      {
        title: 'Manufacturing Process Automation',
        description: 'Implemented AI-driven quality control and predictive maintenance.',
        result: '65% reduction in quality defects and 43% decrease in downtime.',
        image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'HR Process Optimization',
        description: 'Automated recruitment and employee onboarding processes.',
        result: '52% faster hiring process and 31% cost reduction in HR operations.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'analytics': {
    id: 'analytics',
    title: 'Intelligent Data Analytics',
    description: 'Extract meaningful insights from your data with advanced analytics powered by cutting-edge AI, enabling data-driven decision making across your organization.',
    icon: <LineChart className="w-10 h-10 text-mavintel-cyan" />,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Predictive Analytics',
        description: 'Advanced algorithms that forecast future trends and outcomes based on historical data and market indicators.',
        icon: <BarChart className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'Real-time Data Visualization',
        description: 'Interactive dashboards that present complex data in intuitive, actionable visualizations updated in real-time.',
        icon: <LineChart className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Pattern Recognition',
        description: 'Machine learning models that identify hidden patterns and correlations in large, complex datasets.',
        icon: <Brain className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Actionable Business Intelligence',
        description: 'Insights delivered in context with clear recommendations for business actions and strategic decisions.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: '58% More Accurate Forecasting',
        description: 'AI-powered predictive models significantly outperform traditional forecasting approaches.'
      },
      {
        title: '47% Faster Decision Making',
        description: 'Real-time insights and clear visualizations accelerate the decision-making process.'
      },
      {
        title: '67% Improved Data Utilization',
        description: 'Advanced analytics extract more value from existing data assets and sources.'
      },
      {
        title: '32% Reduction in Business Risk',
        description: 'Data-driven decisions based on comprehensive analytics reduce uncertainty and risk.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Data Assessment',
        description: 'We evaluate your data sources, quality, and structure to determine the best analytics approach.',
        icon: <Clock className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 2,
        title: 'Model Development',
        description: 'Our data scientists develop custom analytics models tailored to your specific business needs.',
        icon: <Code className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 3,
        title: 'Dashboard Creation',
        description: 'We build intuitive, interactive dashboards that present insights in clear, actionable formats.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 4,
        title: 'Integration & Training',
        description: 'We integrate the analytics solution with your systems and train your team on its use.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 5,
        title: 'Performance Monitoring',
        description: 'We continuously monitor and optimize the analytics system for maximum effectiveness.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        step: 6,
        title: 'Continuous Improvement',
        description: 'Regular updates and refinements ensure your analytics solution evolves with your business.',
        icon: <ArrowRight className="w-6 h-6 text-mavintel-cyan" />
      }
    ],
    caseStudies: [
      {
        title: 'Healthcare Analytics',
        description: 'Implemented predictive analytics for patient care optimization.',
        result: '28% reduction in readmission rates and 15% decrease in costs.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Retail Analytics',
        description: 'Added AI-powered inventory and sales forecasting.',
        result: '35% reduction in stockouts and 22% increase in sales.',
        image: 'https://images.unsplash.com/photo-1556742393-75e8fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'ai': {
    id: 'ai',
    title: 'Generative AI & Chatbot Integration',
    description: 'Enhance customer engagement with AI-powered conversational interfaces and generative models that deliver personalized, helpful interactions at scale.',
    icon: <Bot className="w-10 h-10 text-mavintel-accent-light" />,
    heroImage: 'https://images.unsplash.com/photo-1677685384675-1428232b2cdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      {
        title: 'Custom AI Assistants',
        description: 'Tailor-made virtual assistants designed to reflect your brand voice and meet your specific business needs.',
        icon: <Bot className="w-6 h-6 text-mavintel-accent" />
      },
      {
        title: 'Multi-lingual Support',
        description: 'AI systems that can communicate fluently in multiple languages, expanding your global reach.',
        icon: <Braces className="w-6 h-6 text-mavintel-purple" />
      },
      {
        title: 'Context-aware Responses',
        description: 'Advanced NLP models that understand context and user intent to provide relevant, helpful responses.',
        icon: <Brain className="w-6 h-6 text-mavintel-cyan" />
      },
      {
        title: 'Integration with Business Systems',
        description: 'Seamless connection with your CRM, ERP, and other systems for consistent, informed interactions.',
        icon: <Server className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    benefits: [
      {
        title: '70% Faster Customer Service',
        description: 'AI assistants provide immediate responses to customer inquiries, reducing wait times.'
      },
      {
        title: '45% Increased Engagement',
        description: 'Interactive, conversational interfaces drive higher user engagement and satisfaction.'
      },
      {
        title: '60% Cost Reduction in Support',
        description: 'Automation of routine inquiries significantly reduces customer support costs.'
      },
      {
        title: '24/7 Global Availability',
        description: 'AI assistants provide consistent service across all time zones and languages.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Conversational Design',
        description: 'We design the conversational flow and personality of your AI assistant to match your brand and objectives.',
        icon: <Clock className="w-6 h-6 text-mavintel-accent-light" />
      },
      {
        step: 2,
        title: 'Knowledge Base Development',
        description: 'Our team creates a comprehensive knowledge base that powers your AI assistant\'s responses.',
        icon: <Code className="w-6 h-6 text-mavintel-accent-light" />
      },
      {
        step: 3,
        title: 'NLP Model Training',
        description: 'We train and fine-tune language models to understand your specific industry terminology and context.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent-light" />
      },
      {
        step: 4,
        title: 'System Integration',
        description: 'Our engineers connect your AI assistant with relevant business systems and data sources.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent-light" />
      },
      {
        step: 5,
        title: 'Testing & Refinement',
        description: 'We conduct extensive testing across various scenarios to ensure accurate, helpful responses.',
        icon: <CheckCircle className="w-6 h-6 text-mavintel-accent-light" />
      },
      {
        step: 6,
        title: 'Deployment & Continuous Learning',
        description: 'After launch, your AI assistant continues to learn and improve from actual user interactions.',
        icon: <ArrowRight className="w-6 h-6 text-mavintel-accent-light" />
      }
    ],
    caseStudies: [
      {
        title: 'Financial Services Chatbot',
        description: 'Implemented AI-powered virtual assistant for customer service.',
        result: '52% improvement in query resolution time and 31% cost reduction.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'E-commerce AI Assistant',
        description: 'Added AI-powered shopping assistant to e-commerce platform.',
        result: '45% increase in customer satisfaction and 38% higher conversion rate.',
        image: 'https://images.unsplash.com/photo-1556742393-75e8fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || 'web-app'];

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
