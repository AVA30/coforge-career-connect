import { Button } from "@/components/ui/button";
import { Building2, LogIn, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Coforge</h1>
              <p className="text-sm text-muted-foreground">Internal Job Portal</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Job Openings
            </Link>
            <Link to="/candidates" className="text-foreground hover:text-primary transition-colors">
              Candidates
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/login")}
              className="hidden sm:flex"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Admin Login
            </Button>
            <Button
              size="sm"
              onClick={() => navigate("/apply")}
              className="bg-gradient-primary hover:bg-primary-dark text-white"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;