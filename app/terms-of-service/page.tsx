import React from 'react';

export const metadata = {
  title: 'Terms of Service | Smart Solar Energy',
  description: 'Terms of Service for Smart Solar Energy And Electricals (PVT) LTD',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#14294A]">Terms of Service</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">2. Description of Service</h2>
        <p className="mb-6">
          Smart Solar Energy And Electricals (PVT) LTD provides users with access to a rich collection of resources, including various communications tools, solar energy calculators, and personalised content. You also understand and agree that the Service may include advertisements and that these advertisements are necessary for Smart Solar Energy to provide the Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">3. Privacy Policy</h2>
        <p className="mb-6">
          Registration Data and certain other information about you is subject to our Privacy Policy. For more information, see our full privacy policy here or on the respective link on the website footer.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">4. User Conduct</h2>
        <p className="mb-6">
          You agree to not use the Service to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Upload, post, email or otherwise transmit any Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, or obscene.</li>
          <li>Harm minors in any way.</li>
          <li>Impersonate any person or entity.</li>
          <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">5. Modifications to Service</h2>
        <p className="mb-6">
          Smart Solar Energy reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Smart Solar Energy shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E3E62]">6. Contact Information</h2>
        <p className="mb-6">
          If you have any questions or comments about these Terms of Service as outlined above, you can contact us at:
          <br /><br />
          <strong>Smart Solar Energy And Electricals (PVT) LTD</strong><br />
          Email: info@smartsolar.lk<br />
          Phone: 076 828 3962
        </p>
      </div>
    </main>
  );
}
