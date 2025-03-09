import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  Clock, 
  Award, 
  Tag, 
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock course data
const courseData = [
  {
    id: 1,
    title: "Understanding TypeScript",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    description: "Learn TypeScript from scratch and build robust applications with this comprehensive guide.",
    skillsCovered: ["TypeScript", "JavaScript", "Web Development"],
    duration: "15 hours",
    level: "Beginner",
    price: 12.99,
    rating: 4.7,
    tags: ["TypeScript", "Programming"],
    category: "Development",
    platform: "Udemy",
    image: "https://img-c.udemycdn.com/course/240x135/947098_cbd3_2.jpg"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    provider: "Coursera",
    instructor: "AWS Training",
    description: "Prepare for the AWS Solutions Architect certification and learn cloud deployment strategies.",
    skillsCovered: ["AWS", "Cloud Computing", "Architecture"],
    duration: "30 hours",
    level: "Intermediate",
    price: 39.99,
    rating: 4.9,
    tags: ["AWS", "Cloud"],
    category: "Cloud",
    platform: "Coursera",
    image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
  },
  {
    id: 3,
    title: "Docker & Kubernetes: The Complete Guide",
    provider: "PW Skills",
    instructor: "Stephen Grider",
    description: "Master containerization technologies with hands-on projects and exercises.",
    skillsCovered: ["Docker", "Kubernetes", "DevOps"],
    duration: "22 hours",
    level: "Intermediate",
    price: 24.99,
    rating: 4.8,
    tags: ["Docker", "Kubernetes", "DevOps"],
    category: "DevOps",
    platform: "PW Skills",
    image: "https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg"
  },
  {
    id: 4,
    title: "The Complete CI/CD Pipeline",
    provider: "Unacademy",
    instructor: "Jessica Davis",
    description: "Build robust CI/CD pipelines using GitHub Actions, Jenkins, and more.",
    skillsCovered: ["CI/CD", "DevOps", "Testing"],
    duration: "18 hours",
    level: "Advanced",
    price: 29.99,
    rating: 4.6,
    tags: ["DevOps", "CI/CD"],
    category: "DevOps",
    platform: "Unacademy",
    image: "https://img-c.udemycdn.com/course/240x135/3508192_73e2_3.jpg"
  },
  {
    id: 5,
    title: "React Native - The Practical Guide",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    description: "Build native mobile apps with React, expanding your frontend development skills.",
    skillsCovered: ["React Native", "Mobile Development", "JavaScript"],
    duration: "26 hours",
    level: "Intermediate",
    price: 14.99,
    rating: 4.7,
    tags: ["React", "Mobile"],
    category: "Development",
    platform: "Udemy",
    image: "https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg"
  },
  {
    id: 6,
    title: "Microservices Architecture Masterclass",
    provider: "Coursera",
    instructor: "Sam Williams",
    description: "Design and implement scalable microservices architectures with industry best practices.",
    skillsCovered: ["Microservices", "System Design", "API Design"],
    duration: "20 hours",
    level: "Advanced",
    price: 49.99,
    rating: 4.5,
    tags: ["Architecture", "Microservices"],
    category: "Architecture",
    platform: "Coursera",
    image: "https://img-c.udemycdn.com/course/240x135/3124212_9b36_4.jpg"
  }
];

// Function to render star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < fullStars
              ? "text-yellow-400 fill-yellow-400"
              : i === fullStars && hasHalfStar
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function CourseRecommendations() {
  const [courses, setCourses] = useState(courseData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [userInfo, setUserInfo] = useState(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Get user info from sessionStorage
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Filter courses based on search term and filters
  useEffect(() => {
    let filteredCourses = courseData;
    
    // Apply search filter
    if (searchTerm) {
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skillsCovered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply category filter
    if (categoryFilter !== "all") {
      filteredCourses = filteredCourses.filter(course => 
        course.category === categoryFilter
      );
    }
    
    // Apply platform filter
    if (platformFilter !== "all") {
      filteredCourses = filteredCourses.filter(course => 
        course.platform === platformFilter
      );
    }
    
    setCourses(filteredCourses);
  }, [searchTerm, categoryFilter, platformFilter]);
  
  // Available categories and platforms
  const categories = ["Development", "Cloud", "DevOps", "Architecture"];
  const platforms = ["Udemy", "Coursera", "PW Skills", "Unacademy"];

  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Button variant="outline" size="sm" className="mb-4" onClick={() => navigate("/career-roadmap")}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Roadmap
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Recommended Courses
              </h1>
              <p className="mt-2 text-gray-500">
                Courses tailored to help you fill your skill gaps and reach your goal: {userInfo?.careerGoal || "Software Engineering role"}
              </p>
            </div>

            {/* Search and filters */}
            <div className="mb-8 bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search courses, skills, or keywords..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={platformFilter} onValueChange={setPlatformFilter}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      {platforms.map(platform => (
                        <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <Card key={course.id} className="h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        {course.platform}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        <div className="flex justify-between items-center">
                          <p>{course.instructor}</p>
                          <StarRating rating={course.rating} />
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {course.skillsCovered.map((skill, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {course.level}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between items-center">
                      <div className="font-bold text-lg">${course.price}</div>
                      <Button>
                        <span>Enroll Now</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 py-10 text-center">
                  <p className="text-gray-500">No courses found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>

            {/* Premium subscription upsell */}
            <div className="mt-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center text-primary">
                    Unlock All Premium Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <p className="text-gray-600">
                      Get full access to personalized course recommendations, mentorship opportunities, 
                      and exclusive discounts on all courses.
                    </p>
                    <Button className="w-full sm:w-auto">
                      Upgrade to Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Button variant="outline" onClick={() => navigate("/career-roadmap")}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Roadmap
              </Button>
              <Button onClick={() => navigate("/")}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}