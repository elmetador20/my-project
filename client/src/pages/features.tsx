import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Laptop, Database, Award } from "lucide-react";

export default function Features() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features to <span className="text-primary">Accelerate Your Career</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Discover how LeapSkill's AI-powered features can help you bridge the gap between education and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">AI-Driven Career Analysis</h2>
              <p className="text-gray-500">
                Our advanced AI scans your resume and analyzes your skills, experience, and education to provide detailed insights about your career path and potential.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comprehensive skill assessment based on your resume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Identify strengths and areas for improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Career path predictions based on current qualifications</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Personalized Learning Path</h2>
              <p className="text-gray-500">
                Receive custom-tailored learning recommendations that address your specific skill gaps and align with your career goals.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Curated course recommendations from top platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Step-by-step learning roadmap with milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Progress tracking and achievement badges</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Real-Time Industry Data</h2>
              <p className="text-gray-500">
                Stay informed with up-to-date industry insights and job market trends pulled from LinkedIn, Coursera, and leading job portals.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Live job market analytics for your field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Trending skills and certifications in your industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Salary insights and career growth projections</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Scholarship Suggestions</h2>
              <p className="text-gray-500">
                Discover scholarship and financial aid opportunities that match your background, needs, and career aspirations.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized scholarship matching based on your profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Application guidance and deadline reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Financial aid resources for economically weaker students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to experience these powerful features?</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Choose a plan that works for you and start your journey to professional success.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="/pricing">View Pricing Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}