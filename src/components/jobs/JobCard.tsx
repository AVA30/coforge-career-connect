import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, DollarSign, Users } from "lucide-react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    experience: string;
    salary: string;
    postedDate: string;
    applicants: number;
    skills: string[];
    type: "Full-time" | "Part-time" | "Contract";
  };
  onApply: (jobId: string) => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
            <p className="text-muted-foreground mt-1">{job.department}</p>
          </div>
          <Badge variant="secondary" className="bg-gradient-primary text-white">
            {job.type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {job.location}
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Posted {job.postedDate}
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <DollarSign className="w-4 h-4 mr-2" />
            {job.salary}
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-2" />
            {job.applicants} applicants
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {job.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => onApply(job.id)}
          className="w-full bg-gradient-primary hover:bg-primary-dark text-white"
        >
          Apply for Position
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;