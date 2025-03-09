import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, BarChart2, BookOpen, CheckCircle, Zap, ChevronRight, LucideIcon, Upload, BookOpenCheck, GraduationCap, LineChart, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

// Interactive feature component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="w-14 h-14 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'students' | 'educators' | 'employers'>('students');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm w-fit">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">AI-Powered Career Platform</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Bridging the Gap Between <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Education & Industry
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-[600px]">
                AI-powered career guidance that helps students identify skill gaps and find personalized learning paths to succeed in today's job market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8" asChild>
                    <Link href="/resume-upload" className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Upload Resume
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800 text-white" asChild>
                    <Link href="/features" className="flex items-center gap-2">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 p-4 bg-blue-900/40 border border-blue-800/50 rounded-lg max-w-md"
              >
                <p className="text-blue-200">
                  Click the <strong>Upload Resume</strong> button to get started with your AI-powered career analysis!
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 backdrop-blur-sm z-10"></div>
                {/* We'll use a mockup UI for the career analysis dashboard */}
                <div className="bg-gray-800 p-6 rounded-xl relative z-20">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-white">Your Career Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Skills Analysis</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">JavaScript</span>
                            <span className="text-sm text-gray-400">85%</span>
                          </div>
                          <div className="h-2 bg-gray-600 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">React</span>
                            <span className="text-sm text-gray-400">70%</span>
                          </div>
                          <div className="h-2 bg-gray-600 rounded-full">
                            <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Node.js</span>
                            <span className="text-sm text-gray-400">65%</span>
                          </div>
                          <div className="h-2 bg-gray-600 rounded-full">
                            <div className="h-2 bg-purple-500 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Market Demand</h4>
                        <div className="flex justify-between">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">85%</div>
                            <div className="text-xs text-gray-400">Match Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">12</div>
                            <div className="text-xs text-gray-400">Top Skills</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Career Path</h4>
                        <div className="text-sm text-white">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span>Frontend Developer</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            <span>Full Stack Developer</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                            <span>DevOps Engineer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg text-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Ready to take the next step?</h4>
                          <p className="text-sm text-white/80">Unlock your full career potential</p>
                        </div>
                        <Button size="sm" className="bg-white text-blue-600 border-0 hover:bg-gray-100">Start Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gray-950 text-white" id="how-it-works">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 backdrop-blur-sm w-fit mb-4">
              <BookOpenCheck className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Simple 3-Step Process</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              How LeapSkill Works
            </h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Our AI-powered platform analyzes your skills and career aspirations to provide truly personalized guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connected line through steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Step 1 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl relative z-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-lg">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Resume</h3>
                <p className="text-gray-300">
                  Our AI analyzes your resume to identify your current skills, education history, and career aspirations, creating a comprehensive profile.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl relative z-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-6 shadow-lg">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                <h3 className="text-2xl font-bold text-white mb-4">Gap Analysis</h3>
                <p className="text-gray-300">
                  Using real-time industry data, we identify skill gaps between your current profile and requirements for your target roles and career path.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl relative z-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center mb-6 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Roadmap</h3>
                <p className="text-gray-300">
                  Receive a personalized learning path with course recommendations, skill-building exercises, and career milestones tailored to your goals.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8 py-6 rounded-lg text-lg"
              asChild
            >
              <Link href="/resume-upload" className="flex items-center gap-2">
                Start Your Career Journey Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mb-4">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Powerful Features</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Why Choose LeapSkill
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Our platform offers unique advantages to help you advance your career with confidence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={BarChart2}
              title="AI-Driven Analysis"
              description="Our advanced AI analyzes your skills against real industry job requirements to identify the most valuable gaps to fill."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={BookOpen}
              title="Personalized Learning"
              description="Get learning recommendations tailored to your specific career goals, background, and preferred learning style."
              delay={0.2}
            />
            
            <FeatureCard 
              icon={LineChart}
              title="Skills Dashboard"
              description="Track your progress with an interactive dashboard showing skill development and market alignment over time."
              delay={0.3}
            />
            
            <FeatureCard 
              icon={Users}
              title="Industry Connections"
              description="Connect with professionals and mentors in your desired field who can provide guidance and networking opportunities."
              delay={0.4}
            />
            
            <FeatureCard 
              icon={GraduationCap}
              title="Scholarship Matching"
              description="Discover funding opportunities that align with your background, needs, and career direction to support your education."
              delay={0.5}
            />
            
            <FeatureCard 
              icon={Award}
              title="Career Roadmap"
              description="Receive a detailed, step-by-step career plan with milestones and achievements to guide your professional journey."
              delay={0.6}
            />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-blue-700"
              asChild
            >
              <Link href="/features" className="flex items-center gap-2">
                Explore All Features
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-600/50 to-purple-800/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">transform</span> your career?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Join thousands of students who have unlocked their true potential and found their perfect career path with LeapSkill.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg text-lg px-8 py-6 rounded-lg" 
                  asChild
                >
                  <Link href="/resume-upload" className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Start Free Analysis
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="pt-6 flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>Free skill analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>Personalized recommendations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}