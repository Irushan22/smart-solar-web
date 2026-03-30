import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Smart Solar Energy',
  description: 'Privacy Policy for Smart Solar Energy And Electricals (PVT) LTD',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#14294A]">Privacy Policy</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">1. Introduction</h2>
        <p className="mb-6">
          Smart Solar Energy And Electricals (PVT) LTD ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">2. The Data We Collect</h2>
        <p className="mb-6">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">3. How We Use Your Data</h2>
        <p className="mb-6">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">4. Data Security</h2>
        <p className="mb-6">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">5. Contact Us</h2>
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
    </main>
  );
}
