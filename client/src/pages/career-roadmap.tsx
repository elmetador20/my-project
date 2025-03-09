import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, GraduationCap, Award, Clock, Briefcase, CheckCircle, XCircle } from "lucide-react";

// Mock roadmap data
const roadmapSteps = [
  {
    id: 1,
    title: "Build TypeScript Foundations",
    description: "Develop a strong understanding of TypeScript to enhance your existing JavaScript skills.",
    duration: "4-6 weeks",
    type: "Learning",
    recommendations: [
      "Complete TypeScript Fundamentals course",
      "Convert an existing JavaScript project to TypeScript",
      "Practice with TypeScript exercises and challenges"
    ],
    completed: false
  },
  {
    id: 2,
    title: "Learn Cloud Deployment",
    description: "Gain experience with AWS to deploy and manage applications in the cloud.",
    duration: "6-8 weeks",
    type: "Skill Development",
    recommendations: [
      "Complete AWS Certified Cloud Practitioner certification",
      "Deploy a small application on AWS services",
      "Learn about serverless architecture with AWS Lambda"
    ],
    completed: false
  },
  {
    id: 3,
    title: "Master Containerization",
    description: "Learn Docker and container orchestration to improve your deployment workflow.",
    duration: "4-6 weeks",
    type: "Technical Skill",
    recommendations: [
      "Complete Docker fundamentals course",
      "Containerize an existing application",
      "Learn Kubernetes basics for orchestration"
    ],
    completed: false
  },
  {
    id: 4,
    title: "Implement CI/CD Pipelines",
    description: "Set up continuous integration and deployment workflows for efficient development.",
    duration: "3-4 weeks",
    type: "DevOps",
    recommendations: [
      "Learn GitHub Actions or Jenkins for CI/CD",
      "Set up automated testing in your pipeline",
      "Implement deployment automation for your projects"
    ],
    completed: false
  },
  {
    id: 5,
    title: "Internship or Project Work",
    description: "Apply your new skills in a real-world setting to gain practical experience.",
    duration: "3-6 months",
    type: "Experience",
    recommendations: [
      "Look for internships in your target companies",
      "Contribute to open-source projects",
      "Build a comprehensive portfolio project"
    ],
    completed: false
  }
];

// Icons for roadmap types
const typeIcons = {
  "Learning": <GraduationCap className="h-5 w-5" />,
  "Skill Development": <Award className="h-5 w-5" />,
  "Technical Skill": <CheckCircle className="h-5 w-5" />,
  "DevOps": <Clock className="h-5 w-5" />,
  "Experience": <Briefcase className="h-5 w-5" />
};

export default function CareerRoadmap() {
  const [userInfo, setUserInfo] = useState(null);
  const [roadmap, setRoadmap] = useState(roadmapSteps);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Get user info from sessionStorage
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const toggleStepCompletion = (id) => {
    setRoadmap(roadmap.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="outline" size="sm" className="mb-4" onClick={() => navigate("/analysis-results")}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analysis
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Your Career Roadmap
              </h1>
              <p className="mt-2 text-gray-500">
                A personalized pathway to achieve your goal: {userInfo?.careerGoal || "Software Engineering role"}
              </p>
            </div>

            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Roadmap steps */}
              <div className="space-y-8">
                {roadmap.map((step, index) => (
                  <div key={step.id} className="relative">
                    <Card className={`relative pl-14 md:pl-16 transition-colors ${step.completed ? 'border-green-400 bg-green-50' : ''}`}>
                      {/* Step number circle */}
                      <div className={`absolute left-5 md:left-6 top-6 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-500 text-white' : 'bg-primary text-white'
                      }`}>
                        {step.completed ? <CheckCircle className="h-4 w-4" /> : index + 1}
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl flex items-center">
                              {step.title}
                            </CardTitle>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <span className="flex items-center mr-3">
                                {typeIcons[step.type]}
                                <span className="ml-1">{step.type}</span>
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {step.duration}
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant={step.completed ? "outline" : "ghost"} 
                            size="sm"
                            onClick={() => toggleStepCompletion(step.id)}
                            className={step.completed ? "text-green-600 border-green-600 hover:bg-green-50" : ""}
                          >
                            {step.completed ? "Completed" : "Mark Complete"}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Recommendations:</h4>
                          <ul className="space-y-1">
                            {step.recommendations.map((rec, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center">
              <Button variant="outline" onClick={() => navigate("/analysis-results")}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analysis
              </Button>
              <Button onClick={() => navigate("/course-recommendations")}>
                View Course Recommendations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}