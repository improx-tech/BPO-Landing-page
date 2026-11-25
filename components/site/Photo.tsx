import Image from "next/image";
import { cn } from "@/lib/cn";
import { unsplashSource } from "@/lib/images";
import type { SitePhoto } from "@/content/site";

interface PhotoProps {
  photo: SitePhoto;
  /** Width / height ratio of the frame the photo fills. */
  aspect: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  zoom?: boolean;
}

/** Responsive, lazily loaded photograph with optional gentle hover zoom (needs a `group` parent). */
export function Photo({ photo, aspect, sizes, className, priority = false, zoom = false }: PhotoProps) {
  const width = 1600;
  return (
    <Image
      src={unsplashSource(photo.id)}
      alt={photo.alt}
      width={width}
      height={Math.round(width / aspect)}
      sizes={sizes}
      quality={72}
      preload={priority}
      loading={priority ? "eager" : "lazy"}
      className={cn("h-full w-full object-cover", zoom && "image-zoom", className)}
    />
  );
}
