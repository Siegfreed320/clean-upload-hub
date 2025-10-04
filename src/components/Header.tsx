import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, Upload, Settings, LogIn, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/media", label: "Médias", icon: FolderOpen },
    { path: "/upload", label: "Uploader", icon: Upload },
    { path: "/admin", label: "Admin", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <FolderOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden font-bold md:inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Espace Multimédia
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-2 transition-all",
                    active && "bg-primary/10 text-primary hover:bg-primary/15"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Connexion</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
