import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UploadZone from "@/components/UploadZone";
import { Upload as UploadIcon, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Upload = () => {
  const handleUpload = (files: File[]) => {
    // Mock upload - to be replaced with real upload logic
    console.log("Uploading files:", files);
    toast.success(`${files.length} fichier(s) uploadé(s) avec succès!`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-4xl px-4">
          <div className="mb-8">
            <Link to="/media">
              <Button variant="ghost" className="mb-4 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la galerie
              </Button>
            </Link>
            
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <UploadIcon className="mb-1 inline h-8 w-8 text-primary" /> Upload de médias
            </h1>
            <p className="text-muted-foreground">
              Ajoutez vos fichiers multimédias en toute sécurité
            </p>
          </div>

          <Card className="mb-6 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">ℹ️ Formats acceptés</h3>
              <p className="text-sm text-muted-foreground">
                Audio : MP3 • Images : JPG, PNG, GIF • Vidéos : MP4 • Documents : PDF
              </p>
            </CardContent>
          </Card>

          <UploadZone onUpload={handleUpload} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upload;
