import React from 'react';

export const metadata = {
  title: 'Cookie Policy | Smart Solar Energy',
  description: 'Cookie Policy for Smart Solar Energy And Electricals (PVT) LTD',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#14294A]">Cookie Policy</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">1. Introduction</h2>
        <p className="mb-6">
          Smart Solar Energy And Electricals (PVT) LTD ("we", "us", or "our") uses cookies on the smartsolar.lk website (the "Service"). By using the Service, you consent to the use of cookies outlining our policy.
        </p>
        <p className="mb-6">
          Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">2. What are Cookies</h2>
        <p className="mb-6">
          Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>
        <p className="mb-6">
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">3. How Smart Solar Energy uses cookies</h2>
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

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">4. Third-party cookies</h2>
        <p className="mb-6">
          In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">5. What are your choices regarding cookies</h2>
        <p className="mb-6">
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">6. Contact Information</h2>
        <p className="mb-6">
          If you have any questions or comments about this Cookie Policy, please contact us at:
          <br /><br />
          <strong>Smart Solar Energy And Electricals (PVT) LTD</strong><br />
          Email: info@smartsolar.lk<br />
          Phone: 076 828 3962
        </p>
      </div>
    </main>
  );
}
