import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock candidate data
  const candidates = [
    {
      id: "1",
      name: "Priya Sharma",
      employeeId: "CF12345",
      email: "priya.sharma@coforge.com",
      phone: "+91 9876543210",
      currentDepartment: "Technology",
      currentRole: "Software Developer",
      experience: "3.5 years",
      location: "Pune, India",
      skills: ["Java", "Spring Boot", "React", "AWS"],
      appliedFor: "Senior Software Developer",
      applicationDate: "2024-01-16",
      status: "Under Review"
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      employeeId: "CF12346",
      email: "rajesh.kumar@coforge.com",
      phone: "+91 9876543211",
      currentDepartment: "Product",
      currentRole: "Associate Product Manager",
      experience: "4 years",
      location: "Bangalore, India",
      skills: ["Product Strategy", "Analytics", "Agile", "SQL"],
      appliedFor: "Product Manager",
      applicationDate: "2024-01-15",
      status: "Shortlisted"
    },
    {
      id: "3",
      name: "Anita Patel",
      employeeId: "CF12347",
      email: "anita.patel@coforge.com",
      phone: "+91 9876543212",
      currentDepartment: "Technology",
      currentRole: "DevOps Engineer",
      experience: "2.5 years",
      location: "Mumbai, India",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      appliedFor: "Senior DevOps Engineer",
      applicationDate: "2024-01-14",
      status: "Interview Scheduled"
    },
    {
      id: "4",
      name: "Vikram Singh",
      employeeId: "CF12348",
      email: "vikram.singh@coforge.com",
      phone: "+91 9876543213",
      currentDepartment: "Design",
      currentRole: "UI Designer",
      experience: "3 years",
      location: "Delhi, India",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      appliedFor: "Senior UI/UX Designer",
      applicationDate: "2024-01-13",
      status: "Under Review"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-warning text-warning-foreground";
      case "Shortlisted":
        return "bg-primary text-primary-foreground";
      case "Interview Scheduled":
        return "bg-accent text-accent-foreground";
      case "Selected":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.currentDepartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.appliedFor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Candidate Applications</h1>
          <p className="text-muted-foreground mt-2">
            View and manage all internal job applications
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search by name, employee ID, department, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                Filter by Status
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">{candidates.length}</div>
              <div className="text-muted-foreground text-sm">Total Applications</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning">
                {candidates.filter(c => c.status === "Under Review").length}
              </div>
              <div className="text-muted-foreground text-sm">Under Review</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">
                {candidates.filter(c => c.status === "Shortlisted").length}
              </div>
              <div className="text-muted-foreground text-sm">Shortlisted</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-accent">
                {candidates.filter(c => c.status === "Interview Scheduled").length}
              </div>
              <div className="text-muted-foreground text-sm">Interviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Candidates List */}
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Candidate Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-lg font-semibold">{candidate.name}</h3>
                        <Badge className={getStatusColor(candidate.status)}>
                          {candidate.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {candidate.employeeId} • {candidate.currentRole}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {candidate.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {candidate.phone}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">Applied for: </span>
                          <span className="text-sm text-primary font-medium">{candidate.appliedFor}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Department: </span>
                          <span className="text-sm">{candidate.currentDepartment}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Experience: </span>
                          <span className="text-sm">{candidate.experience}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Applied on: </span>
                          <span className="text-sm">{candidate.applicationDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills and Actions */}
                  <div className="lg:w-80">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-primary-dark text-white">
                        Schedule Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No candidates found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Candidates;