import React from "react";
import { motion } from "framer-motion";
import Header from "../landing/Header";
import Footer from "../landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050510] overflow-hidden">
      <Header logo="NoteDrop" twitterLink="https://x.com/jiecrypto0" />

      <main className="flex-grow py-16 px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
        >
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                1. Introduction
              </h2>
              <p>
                Welcome to NoteDrop. We respect your privacy and are committed
                to protecting your personal data. This privacy policy will
                inform you about how we look after your personal data when you
                visit our website and tell you about your privacy rights and how
                the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                2. Data We Collect
              </h2>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together as
                follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Identity Data: includes first name, last name, username or
                  similar identifier.
                </li>
                <li>
                  Contact Data: includes email address and telephone numbers.
                </li>
                <li>
                  Technical Data: includes internet protocol (IP) address, your
                  login data, browser type and version, time zone setting and
                  location, browser plug-in types and versions, operating system
                  and platform, and other technology on the devices you use to
                  access this website.
                </li>
                <li>
                  Usage Data: includes information about how you use our
                  website, products and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                3. How We Use Your Data
              </h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                5. Data Retention
              </h2>
              <p>
                We will only retain your personal data for as long as reasonably
                necessary to fulfill the purposes we collected it for, including
                for the purposes of satisfying any legal, regulatory, tax,
                accounting or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                6. Your Legal Rights
              </h2>
              <p>
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to request access, correction, erasure, restriction,
                transfer, to object to processing, to portability of data and
                (where the lawful ground of processing is consent) to withdraw
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the "Last Updated" date at the top of
                this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:{" "}
                <span className="text-blue-400">privacy@notedrop.com</span>
              </p>
            </section>

            <div className="pt-4 text-sm text-slate-400">
              Last Updated: November 15, 2023
            </div>
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

export default PrivacyPolicy;
