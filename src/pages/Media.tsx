import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaCard from "@/components/MediaCard";
import { Music, Image as ImageIcon, Video, Headphones } from "lucide-react";

const Media = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Mock data - to be replaced with real data
  const audioFiles = [
    { id: 1, title: "freestyle", type: "audio" as const },
  ];

  const imageFiles = [
    { id: 2, title: "Photo 1", type: "image" as const },
    { id: 3, title: "Photo 2", type: "image" as const },
    { id: 4, title: "Photo 3", type: "image" as const },
  ];

  const videoFiles = [
    { id: 5, title: "Vidéo 1", type: "video" as const },
  ];

  const allFiles = [...audioFiles, ...imageFiles, ...videoFiles];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <Music className="mb-1 inline h-8 w-8 text-primary" /> Galerie de Médias
            </h1>
            <p className="text-muted-foreground">
              Explorez vos fichiers audio, photos et vidéos
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="inline-flex h-auto flex-wrap gap-2 bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Tout
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Headphones className="h-4 w-4" />
                Audio
              </TabsTrigger>
              <TabsTrigger
                value="images"
                className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <ImageIcon className="h-4 w-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Video className="h-4 w-4" />
                Vidéos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {audioFiles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-primary" />
                      Lecteur audio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {audioFiles.map((file) => (
                      <div key={file.id} className="rounded-lg bg-secondary/50 p-4">
                        <p className="mb-2 font-medium">{file.title}</p>
                        <audio controls className="w-full">
                          <source src={`/media/${file.title}.mp3`} type="audio/mpeg" />
                          Votre navigateur ne supporte pas la lecture audio.
                        </audio>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    Galerie Photos & Vidéos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...imageFiles, ...videoFiles].map((file) => (
                      <MediaCard
                        key={file.id}
                        type={file.type}
                        title={file.title}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audio">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    Fichiers Audio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {audioFiles.map((file) => (
                    <div key={file.id} className="rounded-lg bg-secondary/50 p-4">
                      <p className="mb-2 font-medium">{file.title}</p>
                      <audio controls className="w-full">
                        <source src={`/media/${file.title}.mp3`} type="audio/mpeg" />
                        Votre navigateur ne supporte pas la lecture audio.
                      </audio>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {imageFiles.map((file) => (
                      <MediaCard
                        key={file.id}
                        type={file.type}
                        title={file.title}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="videos">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Vidéos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {videoFiles.map((file) => (
                      <MediaCard
                        key={file.id}
                        type={file.type}
                        title={file.title}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Media;
