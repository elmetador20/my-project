import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define form schema
const resumeFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  careerGoal: z.string().min(5, "Please describe your career goal in at least 5 characters"),
  resumeFile: z.any()
    .refine((file) => file?.length > 0, "Please upload your resume")
    .refine(
      (file) => file?.[0]?.type === "application/pdf" || 
                file?.[0]?.type === "application/msword" || 
                file?.[0]?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "File must be a PDF or Word document"
    )
});

type ResumeFormValues = z.infer<typeof resumeFormSchema>;

export default function ResumeUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      careerGoal: "",
    },
  });

  const onSubmit = async (data: ResumeFormValues) => {
    setIsUploading(true);
    
    // In a real app, we would upload the file to a server and process it
    // For now, we'll simulate a delay and then navigate to the results page
    setTimeout(() => {
      // Store the data in sessionStorage for access on other pages
      sessionStorage.setItem("userInfo", JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        careerGoal: data.careerGoal,
        resumeFilename: data.resumeFile[0].name
      }));
      
      setIsUploading(false);
      
      toast({
        title: "Resume uploaded successfully!",
        description: "Analyzing your resume and career goals...",
      });
      
      // Navigate to results page
      navigate("/analysis-results");
    }, 2000);
  };

  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Upload Your Resume
              </h1>
              <p className="mt-4 text-gray-500 md:text-lg">
                Let our AI analyze your skills and provide personalized career recommendations
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Career Analysis Form</CardTitle>
                <CardDescription>
                  Upload your resume and tell us about your career goals to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="careerGoal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Career Goal</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g., Software Engineer at Google, Data Scientist in healthcare, etc." 
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resumeFile"
                      render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                          <FormLabel>Upload Resume (PDF or DOC/DOCX)</FormLabel>
                          <FormControl>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                              <Input
                                type="file"
                                className="hidden"
                                id="resume-upload"
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={(e) => {
                                  onChange(e.target.files);
                                }}
                                {...rest}
                              />
                              <Label htmlFor="resume-upload" className="cursor-pointer">
                                {!value || value.length === 0 ? (
                                  <div className="flex flex-col items-center">
                                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                    <span className="text-gray-500">
                                      Drag and drop your resume here or click to browse
                                    </span>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center">
                                    <FileText className="h-10 w-10 text-primary mb-2" />
                                    <span className="text-primary font-medium">
                                      {value[0]?.name || "File selected"}
                                    </span>
                                    <span className="text-sm text-gray-500 mt-1">
                                      Click to change file
                                    </span>
                                  </div>
                                )}
                              </Label>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isUploading}>
                      {isUploading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Analyze Resume <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}