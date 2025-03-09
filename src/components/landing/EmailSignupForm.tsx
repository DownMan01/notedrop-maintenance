import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

interface EmailSignupFormProps {
  onSubmit?: (email: string) => void;
  buttonText?: string;
  placeholderText?: string;
  successMessage?: string;
}

const EmailSignupForm = ({
  onSubmit = (email) => console.log(`Submitted email: ${email}`),
  buttonText = "Notify Me",
  placeholderText = "Enter your email",
  successMessage = "Thanks for signing up! We'll notify you when we launch.",
}: EmailSignupFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values.email);
    setIsSubmitted(true);
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto p-6 rounded-lg bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.2)] border border-purple-500/20"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mx-auto mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Success!</h3>
          <p className="text-slate-300">{successMessage}</p>
        </motion.div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
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
                        placeholder={placeholderText}
                        className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-purple-500/70 text-white"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-slate-400">
                    We'll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </form>
        </Form>
      )}
    </motion.div>
  );
};

export default EmailSignupForm;
