interface LoaderParams {
  src: string;
  width: number;
  quality?: number;
}

/** Requests a compressed, auto-format Unsplash image at exactly the width the browser needs. */
export default function unsplashLoader({ src, width, quality }: LoaderParams): string {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
}
