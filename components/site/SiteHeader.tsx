import { Logo } from "./Logo";

/** Logo-only header overlaid on the hero photograph. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-site flex h-20 items-center md:h-24">
        <Logo tone="light" />
      </div>
    </header>
  );
}
