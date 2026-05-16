import { LegalLayout } from '@/components/LegalLayout/LegalLayout';
import styles from '@/components/LegalLayout/LegalLayout.module.css';
import { siteConfig } from '@/site.config';

export const metadata = {
  title: 'Cookie Policy',
  description: `Cookie Policy for ${siteConfig.brand.legalName}`,
};

export default function CookiePolicy() {
  return (
    <LegalLayout subtitle="Tracking & Cookies" title="Cookie Policy">
      <h2>1. Introduction</h2>
      <p>
        {siteConfig.brand.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies on this website (the &ldquo;Service&rdquo;). By using the Service, you consent to the use of cookies outlining our policy.
      </p>
      <p>
        Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.
      </p>

      <h2>2. What are Cookies</h2>
      <p>
        Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
      </p>
      <p>
        Cookies can be &ldquo;persistent&rdquo; or &ldquo;session&rdquo; cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
      </p>

      <h2>3. How we use cookies</h2>
      <p>
        When you use and access the Service, we may place a number of cookies files in your web browser.
      </p>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li><strong>To enable certain functions of the Service:</strong> We use both session and persistent cookies on the Service.</li>
        <li><strong>To provide analytics:</strong> We may use cookies to track information on how the Service is used so that we can make improvements.</li>
        <li><strong>To store your preferences:</strong> We may use cookies to remember your settings and preferences.</li>
      </ul>

      <h2>4. Third-party cookies</h2>
      <p>
        In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service.
      </p>

      <h2>5. What are your choices regarding cookies</h2>
      <p>
        If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
      </p>

      <h2>6. Contact Information</h2>
      <p>
        If you have any questions or comments about this Cookie Policy, please contact us:
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
