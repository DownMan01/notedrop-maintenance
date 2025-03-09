import React from "react";
import { motion } from "framer-motion";
import Header from "../landing/Header";
import Footer from "../landing/Footer";

const TermsOfService = () => {
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
            Terms of Service
          </h1>

          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using NoteDrop, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from
                using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily access the materials on
                NoteDrop's website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Modify or copy the materials;</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display;
                </li>
                <li>
                  Attempt to reverse engineer any software contained on
                  NoteDrop's website;
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                3. Disclaimer
              </h2>
              <p>
                The materials on NoteDrop's website are provided on an 'as is'
                basis. NoteDrop makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                4. Limitations
              </h2>
              <p>
                In no event shall NoteDrop or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on NoteDrop's website,
                even if NoteDrop or a NoteDrop authorized representative has
                been notified orally or in writing of the possibility of such
                damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on NoteDrop's website could include
                technical, typographical, or photographic errors. NoteDrop does
                not warrant that any of the materials on its website are
                accurate, complete or current. NoteDrop may make changes to the
                materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                6. Links
              </h2>
              <p>
                NoteDrop has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by NoteDrop
                of the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                7. Modifications
              </h2>
              <p>
                NoteDrop may revise these terms of service for its website at
                any time without notice. By using this website you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
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

export default TermsOfService;
