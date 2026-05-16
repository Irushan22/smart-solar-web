import { LegalLayout } from '@/components/LegalLayout/LegalLayout';
import styles from '@/components/LegalLayout/LegalLayout.module.css';
import { siteConfig } from '@/site.config';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.brand.legalName}`,
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout subtitle="Your Privacy" title="Privacy Policy">
      <h2>1. Introduction</h2>
      <p>
        {siteConfig.brand.legalName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
      </p>

      <h2>2. The Data We Collect</h2>
      <p>
        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
      </p>
      <ul>
        <li><strong>Identity Data</strong> includes your first name and last name.</li>
        <li><strong>Contact Data</strong> includes your email address and telephone number collected via our contact and consultation forms.</li>
        <li><strong>Inquiry Data</strong> includes your selected service of interest (e.g., Residential Solar, Commercial Solar, Maintenance) and your messages.</li>
        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and location.</li>
        <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      </p>
      <ul>
        <li>To respond to your inquiries and provide free consultations based on the details you submit via our contact forms.</li>
        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        <li>Where we need to comply with a legal obligation.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy or our privacy practices, please contact us:
      </p>
      <div className={styles.contactBlock}>
        <p><strong>{siteConfig.brand.legalName}</strong></p>
        <p>{siteConfig.contact.address.line1}</p>
        <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.region} {siteConfig.contact.address.postalCode}</p>
        <p>Email: <a href={`mailto:${siteConfig.contact.emails.primary}`}>{siteConfig.contact.emails.primary}</a></p>
        <p>Phone: <a href={siteConfig.contact.phone.href}>{siteConfig.contact.phone.display}</a></p>
      </div>
    </LegalLayout>
  );
}
