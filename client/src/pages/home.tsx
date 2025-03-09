import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, BarChart2, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bridging the Gap Between <span className="text-primary">Education & Industry</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                AI-powered career guidance that helps students identify skill gaps and find personalized learning paths to succeed in today's job market.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/features">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How LeapSkill Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Our AI-powered platform analyzes your skills and goals to provide personalized recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Step 1: Upload Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our AI scans your resume to identify your current skills, education, and career goals.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Step 2: Skill Gap Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We identify missing skills that are in demand for your career path and would make you job-ready.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Step 3: Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive tailored recommendations for courses, internships, and scholarships to help you succeed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline">
              <Link href="/features" className="flex items-center">
                Learn More About Our Features <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Discover how LeapSkill can help you succeed in your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold">AI-Driven Career Analysis</h3>
                <p className="text-gray-500">
                  Our advanced AI analyzes industry trends and your skills to provide accurate guidance.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold">Personalized Learning Paths</h3>
                <p className="text-gray-500">
                  Get customized recommendations for courses and certifications that matter.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold">Real-Time Industry Data</h3>
                <p className="text-gray-500">
                  Access real-time data from LinkedIn, Coursera, and job portals for informed decisions.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold">Scholarship Suggestions</h3>
                <p className="text-gray-500">
                  Find scholarship opportunities that match your background and needs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to take the leap?</h2>
            <p className="max-w-[700px] md:text-lg">
              Join thousands of students who have transformed their careers with LeapSkill.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
              <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}