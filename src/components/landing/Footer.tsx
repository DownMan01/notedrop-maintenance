import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Twitter, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  newsletterTitle?: string;
  copyrightText?: string;
  twitterLink?: string;
}

const Footer = ({
  newsletterTitle = "Join the NoteDrop community",
  copyrightText = "© 2023 NoteDrop. All rights reserved.",
  twitterLink = "https://x.com/jiecrypto0",
}: FooterProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-16 bg-gradient-to-b from-[#050510] to-[#0a0a2e] border-t border-purple-500/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl"></div>

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0.5px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div variants={item} className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NoteDrop
            </h2>
            <p className="text-slate-300 mb-6 max-w-md">
              The ultimate Web3 airdrop database. Track, discover, and stay
              updated on the latest cryptocurrency opportunities.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors group border border-blue-500/30"
              >
                <Twitter size={18} className="text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">
                  Follow us on Twitter
                </span>
                <ExternalLink
                  size={14}
                  className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={item} className="md:col-span-7">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {newsletterTitle}
            </h3>
            <p className="text-slate-300 mb-4">
              Be the first to know about new airdrops, features, and exclusive
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white rounded-lg"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group relative overflow-hidden rounded-lg">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div variants={item} className="text-slate-400 text-sm">
            {copyrightText}
          </motion.div>

          <motion.div variants={item} className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
