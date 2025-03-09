import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent <span className="text-primary">Pricing</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Choose the plan that works for you, upgrade or downgrade anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>Get started with essential features</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Free</span>
                  <span className="text-gray-500 ml-2">forever</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Resume analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic skill gap identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Limited course recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Access to learning resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="px-4 py-1 text-xs font-semibold bg-primary text-white rounded-full w-fit">RECOMMENDED</div>
                <CardTitle className="text-2xl mt-4">Premium</CardTitle>
                <CardDescription>Advanced features for serious career builders</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced AI career analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Personalized learning path with detailed roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full access to industry trends and insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Monthly mentorship session with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority access to scholarship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Exclusive job matches and application support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Premium</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Have questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Can I switch plans later?</h3>
              <p className="text-gray-500">
                Yes, you can upgrade or downgrade your plan at any time. Your billing will be adjusted accordingly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">How long is the free plan available?</h3>
              <p className="text-gray-500">
                Our Basic plan is free forever, with no hidden fees or expiration dates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer student discounts?</h3>
              <p className="text-gray-500">
                Yes, we offer a 50% discount to students with a valid university email address.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-500">
                Yes, you can cancel your subscription at any time with no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to accelerate your career?</h2>
            <p className="max-w-[700px] md:text-lg">
              Get started with LeapSkill today and take the first step towards your dream career.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}