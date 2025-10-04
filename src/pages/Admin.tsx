import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Settings, FileText, Image, Music, Video, Trash2, ExternalLink, Plus } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  // Mock data - to be replaced with real data
  const files = [
    { id: 4, type: "photo", title: "170c2ad686fb6e202d324529d977a78a0e7c1c4e_hq", filename: "170c2ad686fb6e202d324529d977a78a0e7c1c4e_hq" },
    { id: 3, type: "photo", title: "téléchargement.gif", filename: "téléchargement.gif" },
    { id: 2, type: "photo", title: "4563b8edf54e2dc437e1b75d13129708.jpg", filename: "4563b8edf54e2dc437e1b75d13129708.jpg" },
    { id: 1, type: "audio", title: "freestyle", filename: "freestyle.mp3" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "audio":
        return <Music className="h-4 w-4" />;
      case "photo":
        return <Image className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "audio":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
      case "photo":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "video":
        return "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  const handleDelete = (id: number) => {
    toast.error("Fonctionnalité de suppression à implémenter");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">
                <Settings className="mb-1 inline h-8 w-8 text-primary" /> Administration
              </h1>
              <p className="text-muted-foreground">
                Gérez tous vos fichiers multimédias
              </p>
            </div>
            
            <Link to="/upload">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Ajouter un média
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Liste des fichiers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">ID</TableHead>
                      <TableHead className="w-32">Type</TableHead>
                      <TableHead>Titre</TableHead>
                      <TableHead>Fichier</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {files.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell className="font-medium">{file.id}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getTypeBadgeColor(file.type)}>
                            <span className="flex items-center gap-1">
                              {getTypeIcon(file.type)}
                              {file.type}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{file.title}</TableCell>
                        <TableCell>
                          <a
                            href="#"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {file.filename}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                            onClick={() => handleDelete(file.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex justify-between">
                <p className="text-sm text-muted-foreground">
                  Total : {files.length} fichier(s)
                </p>
                <Link to="/media">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Voir la galerie
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
