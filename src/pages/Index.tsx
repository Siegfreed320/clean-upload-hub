import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Music, Image, Video, Upload, FolderOpen, Lock } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Music,
      title: "Musique",
      description: "Écoutez vos MP3 en streaming",
      path: "/media",
    },
    {
      icon: Image,
      title: "Photos",
      description: "Visualisez vos images",
      path: "/media",
    },
    {
      icon: Video,
      title: "Vidéos",
      description: "Regardez vos vidéos",
      path: "/media",
    },
    {
      icon: Upload,
      title: "Upload",
      description: "Ajoutez de nouveaux fichiers",
      path: "/upload",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container relative px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="rounded-full bg-gradient-to-br from-primary to-accent p-4 shadow-glow">
                  <FolderOpen className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Bienvenue sur votre{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Espace Multimédia
                </span>
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Écoutez de la musique, visualisez des photos & vidéos, et gérez vos fichiers
                via un espace sécurisé et moderne.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/media">
                  <Button size="lg" className="gap-2 shadow-lg hover:shadow-glow">
                    <Music className="h-5 w-5" />
                    Écouter
                  </Button>
                </Link>
                <Link to="/media">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Image className="h-5 w-5" />
                    Regarder
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Navigation rapide</h2>
              <p className="text-muted-foreground">
                Accédez rapidement à toutes les fonctionnalités
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link key={feature.title} to={feature.path}>
                    <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className="mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all group-hover:shadow-glow">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container px-4">
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Espace sécurisé</h3>
                    <p className="text-sm text-muted-foreground">
                      Connexion requise pour uploader et administrer
                    </p>
                  </div>
                </div>
                <Link to="/login">
                  <Button size="lg" variant="default" className="gap-2">
                    Se connecter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
