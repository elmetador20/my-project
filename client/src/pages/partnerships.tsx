import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, Briefcase, Handshake } from "lucide-react";

export default function Partnerships() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Strategic <span className="text-primary">Partnerships</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Collaborating with leading universities, EdTech platforms, and employers to provide the best opportunities for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Universities */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Universities</CardTitle>
                <CardDescription>
                  Partnering with leading educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We collaborate with top universities to provide students with exclusive resources and opportunities to bridge the gap between academia and industry.
                </p>
              </CardContent>
            </Card>

            {/* EdTech Platforms */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4">EdTech Platforms</CardTitle>
                <CardDescription>
                  Collaborating with leading online learning providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our partnerships with top EdTech platforms ensure our users get access to high-quality courses and certifications at preferential rates.
                </p>
              </CardContent>
            </Card>

            {/* Employers */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Employers</CardTitle>
                <CardDescription>
                  Connecting with industry-leading companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We work with forward-thinking employers who are looking for skilled talent, creating pathways for our users to land their dream jobs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Featured Partners</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              We're proud to work with these organizations to bring you the best opportunities.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">University A</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">EdTech B</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Company C</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Institute D</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Learning E</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Corp F</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Academy G</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Tech H</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partner Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Partner With Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Discover the benefits of becoming a LeapSkill partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For Universities</h3>
                  <p className="text-gray-500 mt-2">
                    Enhance your career services, improve student outcomes, and gain insights into skill gaps among your graduates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For EdTech Platforms</h3>
                  <p className="text-gray-500 mt-2">
                    Reach motivated learners specifically looking for your courses to address their skill gaps and career goals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For Employers</h3>
                  <p className="text-gray-500 mt-2">
                    Access a pool of candidates who are actively upskilling themselves based on industry needs and requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For Scholarship Providers</h3>
                  <p className="text-gray-500 mt-2">
                    Connect with deserving students who match your scholarship criteria and are committed to their professional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Interested in becoming a partner?</h2>
            <p className="max-w-[700px] md:text-lg">
              Join our growing network of educational institutions, EdTech platforms, and employers.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}