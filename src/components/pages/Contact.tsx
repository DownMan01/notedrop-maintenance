import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  CheckCircle2,
  Mail,
  User,
  MessageSquare,
  Twitter,
} from "lucide-react";

import Header from "../landing/Header";
import Footer from "../landing/Footer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    // In a real app, this would send the form data to a backend service
    setIsSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050510] overflow-hidden">
      <Header logo="NoteDrop" twitterLink="https://x.com/jiecrypto0" />

      <main className="flex-grow py-16 px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <h2 className="text-xl font-semibold mb-6 text-white">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-slate-300">info@notedrop.com</p>
                    <p className="text-slate-300">support@notedrop.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-slate-300">Crypto Valley</p>
                    <p className="text-slate-300">Decentralized, Web3</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Twitter className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Social</h3>
                    <a
                      href="https://x.com/jiecrypto0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      @jiecrypto0
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-purple-500/10">
                <h3 className="text-white font-medium mb-2">Office Hours</h3>
                <p className="text-slate-300">Monday - Friday: 9am - 5pm UTC</p>
                <p className="text-slate-300">Saturday - Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 h-full flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-white">
                    Send a Message
                  </h2>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <div className="flex items-center relative">
                                <User className="absolute left-3 h-4 w-4 text-purple-400" />
                                <Input
                                  placeholder="Your name"
                                  className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <div className="flex items-center relative">
                                <Mail className="absolute left-3 h-4 w-4 text-purple-400" />
                                <Input
                                  placeholder="Your email address"
                                  className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Subject
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Message subject"
                                className="bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Message
                            </FormLabel>
                            <FormControl>
                              <div className="flex items-start relative">
                                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                                <Textarea
                                  placeholder="Your message"
                                  className="pl-10 min-h-[120px] bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group relative overflow-hidden mt-4"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a2e] to-[#1a0b2e] opacity-80"></div>

        {/* Animated mesh grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Crypto nodes - fewer than homepage for less distraction */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-blue-500 rounded-full opacity-30 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-purple-400 rounded-full opacity-20 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
