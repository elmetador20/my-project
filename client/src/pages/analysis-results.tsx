import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle, FileText } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PDFGenerator } from "@/components/pdf-generator";

// Mock data for skills
const skillsData = [
  { name: "JavaScript", value: 85, category: "Present" },
  { name: "React", value: 70, category: "Present" },
  { name: "Node.js", value: 65, category: "Present" },
  { name: "TypeScript", value: 25, category: "Lacking" },
  { name: "AWS", value: 15, category: "Lacking" },
  { name: "Docker", value: 5, category: "Lacking" },
];

// Mock data for skills gap
const skillsGapData = [
  { name: "Hard Skills", present: 72, required: 85 },
  { name: "Soft Skills", present: 80, required: 75 },
  { name: "Experience", present: 45, required: 65 },
  { name: "Education", present: 85, required: 70 },
  { name: "Certifications", present: 30, required: 60 },
];

// Mock strengths and weaknesses
const strengthsData = [
  "Strong JavaScript fundamentals",
  "Excellent React component development",
  "Good understanding of frontend architecture",
  "Experience with RESTful APIs",
];

const weaknessesData = [
  "Limited TypeScript experience",
  "No cloud deployment experience",
  "Lacking containerization knowledge",
  "No CI/CD pipeline experience",
];

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];
const RADIAN = Math.PI / 180;

// Custom label for pie chart
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AnalysisResults() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, navigate] = useLocation();
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulation of data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Get user info from sessionStorage
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    return () => clearTimeout(timer);
  }, []);

  const handleNextPage = () => {
    navigate("/career-roadmap");
  };

  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Analyzing Your Resume & Career Goals</h2>
              <div className="space-y-4">
                <p className="text-gray-300">Our AI is processing your information...</p>
                <Progress value={60} className="w-full max-w-md mx-auto" />
                <p className="text-sm text-gray-400">This usually takes about 30 seconds</p>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <Button variant="outline" size="sm" className="mb-4" onClick={() => navigate("/resume-upload")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resume Upload
                  </Button>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Skills Analysis for {userInfo?.fullName || "User"}
                  </h1>
                  <p className="mt-2 text-gray-300">
                    Career Goal: {userInfo?.careerGoal || "Software Engineer"}
                  </p>
                </div>
                <PDFGenerator 
                  targetRef={reportRef} 
                  fileName={`leapskill-report-${userInfo?.fullName || 'user'}.pdf`}
                  userData={{
                    name: userInfo?.fullName || "User",
                    email: userInfo?.email,
                    careerGoal: userInfo?.careerGoal || "Software Engineer"
                  }}
                />
              </div>

              <div ref={reportRef}>
                <Tabs defaultValue="skillsGap" className="mb-12">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="skillsGap">Skills Gap</TabsTrigger>
                    <TabsTrigger value="skillsBreakdown">Skills Breakdown</TabsTrigger>
                    <TabsTrigger value="strengthsWeaknesses">Strengths & Weaknesses</TabsTrigger>
                  </TabsList>

                {/* Skills Gap Tab */}
                <TabsContent value="skillsGap" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Skills Gap Analysis</CardTitle>
                      <CardDescription>
                        This chart shows how your current skills match up with what's required for your target role.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={skillsGapData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="present" name="Your Skills" fill="#0088FE" />
                            <Bar dataKey="required" name="Required Skills" fill="#FF8042" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Skills Gap Summary</h3>
                        <p className="text-gray-600 mb-4">
                          Based on our analysis, you have a strong foundation in key areas but need to develop specific technical skills to reach your career goal.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-700 mb-2">Your Skills Score</h4>
                            <div className="text-3xl font-bold">68<span className="text-xl">/100</span></div>
                            <p className="text-sm text-blue-600 mt-1">Above average compared to peers</p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium text-orange-700 mb-2">Target Skills Score</h4>
                            <div className="text-3xl font-bold">85<span className="text-xl">/100</span></div>
                            <p className="text-sm text-orange-600 mt-1">Industry benchmark for your role</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Skills Breakdown Tab */}
                <TabsContent value="skillsBreakdown" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Skills Breakdown</CardTitle>
                      <CardDescription>
                        A closer look at your specific skills and how they contribute to your overall profile.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={skillsData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {skillsData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Skills Proficiency</h3>
                          <div className="space-y-4">
                            {skillsData.map((skill, index) => (
                              <div key={index}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">{skill.name}</span>
                                  <span className="text-sm text-gray-500">{skill.value}%</span>
                                </div>
                                <Progress value={skill.value} className="h-2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Strengths & Weaknesses Tab */}
                <TabsContent value="strengthsWeaknesses" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                          Your Strengths
                        </CardTitle>
                        <CardDescription>
                          These are the areas where you excel
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {strengthsData.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="text-green-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <XCircle className="text-red-500 mr-2 h-5 w-5" />
                          Areas for Improvement
                        </CardTitle>
                        <CardDescription>
                          Focus on developing these skills
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {weaknessesData.map((weakness, index) => (
                            <li key={index} className="flex items-start">
                              <XCircle className="text-red-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={() => navigate("/resume-upload")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={handleNextPage}>
                  View Career Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}