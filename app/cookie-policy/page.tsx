import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Smart Solar Energy',
  description: 'Cookie Policy for Smart Solar Energy And Electricals (PVT) LTD',
};

export default function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
        <p className="mb-6">
          Smart Solar Energy And Electricals (PVT) LTD ("we", "us", or "our") uses cookies on the smartsolar.lk website (the "Service"). By using the Service, you consent to the use of cookies outlining our policy.
        </p>
        <p className="mb-6">
          Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. What are Cookies</h2>
        <p className="mb-6">
          Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>
        <p className="mb-6">
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. How Smart Solar Energy uses cookies</h2>
        <p className="mb-6">
          When you use and access the Service, we may place a number of cookies files in your web browser.
        </p>
        <p className="mb-6">
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>To enable certain functions of the Service:</strong> We use both session and persistent cookies on the Service.</li>
          <li><strong>To provide analytics:</strong> We may use cookies to track information on how the Service is used so that we can make improvements. We may also use cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.</li>
          <li><strong>To store your preferences:</strong> We may use cookies to remember your settings and preferences, such as your language preference or whether you have been shown certain pages.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Third-party cookies</h2>
        <p className="mb-6">
          In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. What are your choices regarding cookies</h2>
        <p className="mb-6">
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Contact Information</h2>
        <p className="mb-6">
          If you have any questions or comments about this Cookie Policy, please contact us at:
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
