import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface LearnMoreSectionProps {
  title?: string;
  sections?: {
    title: string;
    content: string;
  }[];
}

const LearnMoreSection = ({
  title = "Learn More About NoteDrop",
  sections = [
    {
      title: "What is NoteDrop?",
      content:
        "NoteDrop is a comprehensive Web3 airdrop database that helps you track, discover, and stay updated on the latest cryptocurrency airdrops. Our platform provides real-time information, analytics, and notifications to ensure you never miss an opportunity in the crypto space.",
    },
    {
      title: "How does it work?",
      content:
        "Our platform aggregates data from multiple blockchain networks to provide you with accurate and timely information about upcoming, ongoing, and past airdrops. You can filter by blockchain, token type, project category, and more to find exactly what you're looking for. Set up personalized alerts to be notified when new opportunities matching your criteria become available.",
    },
    {
      title: "Why choose NoteDrop?",
      content:
        "NoteDrop stands out with its user-friendly interface, comprehensive database, and powerful filtering tools. We verify all listed airdrops to minimize scam risks, provide detailed project information to help you make informed decisions, and offer portfolio tracking to monitor your airdrop earnings. Our community features also allow you to connect with other crypto enthusiasts and share insights.",
    },
    {
      title: "When will NoteDrop launch?",
      content:
        "We're working hard to bring NoteDrop to you soon! Our team is currently finalizing the platform features and ensuring everything works seamlessly. Sign up with your email to be the first to know when we launch and to receive exclusive early access benefits.",
    },
  ],
}: LearnMoreSectionProps) => {
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
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-[1000px] mx-auto px-6 py-10 bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.2)] border border-purple-500/20"
    >
      <motion.h2
        variants={item}
        className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      <Accordion type="single" collapsible className="w-full">
        {sections.map((section, index) => (
          <motion.div key={index} variants={item}>
            <AccordionItem
              value={`item-${index}`}
              className="border-purple-500/20"
            >
              <AccordionTrigger className="text-white hover:text-purple-400 transition-colors py-4">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-purple-500/10">
                  <p>{section.content}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div variants={item} className="mt-8 text-center">
        <p className="text-sm text-slate-400">
          Have more questions? Follow us on social media or sign up for our
          newsletter to stay updated.
        </p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl"></div>
    </motion.section>
  );
};

export default LearnMoreSection;
