import { LegalLayout } from '@/components/LegalLayout/LegalLayout';
import styles from '@/components/LegalLayout/LegalLayout.module.css';
import { siteConfig } from '@/site.config';

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.brand.legalName}`,
};

export default function TermsOfService() {
  return (
    <LegalLayout subtitle="Legal" title="Terms of Service">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {siteConfig.brand.legalName} provides users with access to a rich collection of resources, including various communications tools and contact forms to request free consultations for residential or commercial solar.
      </p>

      <h2>3. Privacy Policy</h2>
      <p>
        Registration Data and certain other information about you is subject to our Privacy Policy. For more information, see our full <a href="/privacy-policy">privacy policy</a>.
      </p>

      <h2>4. User Conduct</h2>
      <p>You agree to not use the Service to:</p>
      <ul>
        <li>Upload, post, email or otherwise transmit any Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, or obscene.</li>
        <li>Harm minors in any way.</li>
        <li>Impersonate any person or entity.</li>
        <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted.</li>
      </ul>

      <h2>5. Modifications to Service</h2>
      <p>
        {siteConfig.brand.name} reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that {siteConfig.brand.name} shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
      </p>

      <h2>6. Contact Information</h2>
      <p>
        If you have any questions or comments about these Terms of Service, you can contact us:
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
