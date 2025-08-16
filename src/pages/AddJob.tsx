import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    jobId: `JOB-${Date.now()}`,
    title: "",
    description: "",
    designation: "",
    location: "",
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    skillsRequired: [] as string[],
    languagesKnown: [] as string[],
    department: "",
    jobType: "",
  });

  const skillOptions = [
    "Java", "Python", "JavaScript", "React", "Angular", "Node.js", "Spring Boot",
    "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Git",
    "Agile", "Scrum", "Product Management", "UI/UX Design", "Figma"
  ];

  const languageOptions = [
    "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi"
  ];

  const locations = [
    "Pune, India", "Bangalore, India", "Mumbai, India", "Delhi, India", 
    "Chennai, India", "Noida, India", "Hyderabad, India"
  ];

  const designations = [
    "Software Developer", "Senior Software Developer", "Software Architect",
    "Product Manager", "Senior Product Manager", "UI/UX Designer",
    "DevOps Engineer", "Data Analyst", "Business Analyst", "Project Manager"
  ];

  const departments = [
    "Technology", "Product Management", "Design", "Operations", 
    "Human Resources", "Finance", "Marketing", "Sales"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.designation || !formData.location) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Job Posted Successfully!",
      description: "The job posting has been created and is now live.",
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 2000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skillsRequired: prev.skillsRequired.includes(skill)
        ? prev.skillsRequired.filter(s => s !== skill)
        : [...prev.skillsRequired, skill]
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languagesKnown: prev.languagesKnown.includes(language)
        ? prev.languagesKnown.filter(l => l !== language)
        : [...prev.languagesKnown, language]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/dashboard")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-foreground">Add New Job Posting</h1>
          <p className="text-muted-foreground mt-2">
            Create a new internal job opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Job Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jobId">Job ID</Label>
                    <Input
                      id="jobId"
                      value={formData.jobId}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="e.g., Senior Software Developer"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Provide a detailed description of the role, responsibilities, and requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="designation">Designation *</Label>
                    <Select value={formData.designation} onValueChange={(value) => handleInputChange("designation", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {designations.map((designation) => (
                          <SelectItem key={designation} value={designation}>
                            {designation}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Experience and Salary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Years of Experience</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        placeholder="Min years"
                        value={formData.minExperience}
                        onChange={(e) => handleInputChange("minExperience", e.target.value)}
                      />
                      <span className="flex items-center">to</span>
                      <Input
                        placeholder="Max years"
                        value={formData.maxExperience}
                        onChange={(e) => handleInputChange("maxExperience", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Salary Range (₹ LPA)</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        placeholder="Min"
                        value={formData.minSalary}
                        onChange={(e) => handleInputChange("minSalary", e.target.value)}
                      />
                      <span className="flex items-center">to</span>
                      <Input
                        placeholder="Max"
                        value={formData.maxSalary}
                        onChange={(e) => handleInputChange("maxSalary", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <Label>Required Skills</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={formData.skillsRequired.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <Label>Languages Known</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                    {languageOptions.map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox
                          id={`lang-${language}`}
                          checked={formData.languagesKnown.includes(language)}
                          onCheckedChange={() => handleLanguageToggle(language)}
                        />
                        <Label htmlFor={`lang-${language}`} className="text-sm">
                          {language}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/admin/dashboard")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-primary hover:bg-primary-dark text-white"
                  >
                    Post Job
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddJob;