import { Card, CardContent } from "@/components/ui/card";
import { Image, Video, Music, File } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaCardProps {
  type: "image" | "video" | "audio" | "document";
  title: string;
  thumbnail?: string;
  onClick?: () => void;
  className?: string;
}

const MediaCard = ({ type, title, thumbnail, onClick, className }: MediaCardProps) => {
  const icons = {
    image: Image,
    video: Video,
    audio: Music,
    document: File,
  };

  const Icon = icons[type];

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Icon className="h-16 w-16 text-primary/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="p-3">
          <p className="truncate text-sm font-medium">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
