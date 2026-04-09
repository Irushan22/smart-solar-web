import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Smart Solar Energy',
  description: 'Privacy Policy for Smart Solar Energy And Electricals (PVT) LTD',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 relative bg-[#0B192C] text-white overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#73b042] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#73b042] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#73b042] hover:text-white transition-colors mb-8 group font-medium"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
        
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-12 backdrop-blur-md shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
        <p className="mb-6">
          Smart Solar Energy And Electricals (PVT) LTD ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. The Data We Collect</h2>
        <p className="mb-6">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Identity Data</strong> includes your first name and last name.</li>
          <li><strong>Contact Data</strong> includes your email address and telephone number collected via our contact and consultation forms.</li>
          <li><strong>Inquiry Data</strong> includes your selected service of interest (e.g., Residential Solar, Commercial Solar, Maintenance) and your messages.</li>
          <li><strong>Calculator Data</strong> includes physical inputs such as roof dimensions (width and length) and current monthly energy usage (Units) provided to our Solar Calculator.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and location.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. How We Use Your Data</h2>
        <p className="mb-6">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>To respond to your inquiries and provide free consultations based on the details you submit via our contact forms.</li>
          <li>To provide accurate estimates and solar potential using our Solar Calculator based on your specific energy usage and roof dimensions.</li>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Data Security</h2>
        <p className="mb-6">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          <br /><br />
          <strong>Smart Solar Energy And Electricals (PVT) LTD</strong><br />
          No: 125, Aluthwaththa,<br />
          Amunugama, Gunnapana, Kandy<br />
          Email: info@smartsolar.lk<br />
          Phone: 076 828 3962
        </p>
          </div>
        </div>
      </div>
    </main>
  );
}
