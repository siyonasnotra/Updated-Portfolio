import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Siyona Snotra. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
