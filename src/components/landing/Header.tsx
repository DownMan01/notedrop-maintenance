import React from "react";
import { Button } from "../ui/button";
import { Twitter } from "lucide-react";

interface HeaderProps {
  logo?: string;
  twitterLink?: string;
}

const Header = ({
  logo = "NoteDrop",
  twitterLink = "https://x.com/jiecrypto0",
}: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-16 bg-background/10 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {logo}
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10"
            asChild
          >
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
