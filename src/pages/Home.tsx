import { useState } from "react";
import Header from "@/components/layout/Header";
import JobCard from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for jobs
  const jobs = [
    {
      id: "1",
      title: "Senior Software Developer",
      department: "Technology",
      location: "Pune, India",
      experience: "3-5 years",
      salary: "₹8-12 LPA",
      postedDate: "2 days ago",
      applicants: 24,
      skills: ["Java", "Spring Boot", "React", "AWS", "Microservices"],
      type: "Full-time" as const,
    },
    {
      id: "2",
      title: "Product Manager",
      department: "Product Management",
      location: "Bangalore, India",
      experience: "4-7 years",
      salary: "₹15-20 LPA",
      postedDate: "1 week ago",
      applicants: 18,
      skills: ["Product Strategy", "Agile", "Analytics", "User Research"],
      type: "Full-time" as const,
    },
    {
      id: "3",
      title: "DevOps Engineer",
      department: "Technology",
      location: "Noida, India",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      postedDate: "3 days ago",
      applicants: 32,
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
      type: "Full-time" as const,
    },
    {
      id: "4",
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      experience: "2-5 years",
      salary: "₹5-8 LPA",
      postedDate: "5 days ago",
      applicants: 15,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
      type: "Full-time" as const,
    },
  ];

  const handleApply = (jobId: string) => {
    navigate(`/apply?jobId=${jobId}`);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Advance Your Career at Coforge
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Discover internal opportunities designed for your growth and expertise
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">{jobs.length}</div>
              <div className="text-white/80">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{jobs.reduce((acc, job) => acc + job.applicants, 0)}</div>
              <div className="text-white/80">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-white/80">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-white/80">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by role, department, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Internal Opportunities?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground text-sm">Advance within the organization you know and trust</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Known Culture</h3>
              <p className="text-muted-foreground text-sm">Leverage your understanding of company values</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Faster Transition</h3>
              <p className="text-muted-foreground text-sm">Quick onboarding with existing relationships</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Recognition</h3>
              <p className="text-muted-foreground text-sm">Your contributions are already valued</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Current Openings</h2>
            <Badge variant="secondary" className="bg-primary text-white">
              {filteredJobs.length} positions available
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;