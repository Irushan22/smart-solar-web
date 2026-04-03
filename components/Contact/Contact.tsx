'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{7,15}$/.test(data.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!data.service) {
      newErrors.service = 'Please select a service';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // Clear error on change if the field was touched
    if (touched[field]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [field]: newErrors[field],
      }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate sending
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
        setTouched({});
        setErrors({});

        // Auto-hide success after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const getInputClass = (field: keyof FormData) => {
    if (errors[field] && touched[field]) return `${styles.formInput} ${styles.formInputError}`;
    return styles.formInput;
  };

  const getTextareaClass = () => {
    if (errors.message && touched.message) return `${styles.formTextarea} ${styles.formTextareaError}`;
    return styles.formTextarea;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* ── Left: Contact Info ── */}
          <div className={styles.infoColumn}>
            <div className={styles.header}>
              <span className={styles.subtitle}>GET IN TOUCH</span>
              <h2 className={styles.title}>
                Start Your <span className={styles.highlight}>Solar Journey</span>
              </h2>
              <p className={styles.headerDescription}>
                Ready to switch to clean energy? Contact us for a free consultation
                and custom solar solution tailored to your needs.
              </p>
            </div>


            <div className={styles.infoCard} style={{ animationDelay: '0.2s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Call Us</span>
                <span className={styles.infoCardText}>
                  076 828 3962<br />
                  Mon – Fri, 8am – 6pm
                </span>
              </div>
            </div>

            <div className={styles.infoCard} style={{ animationDelay: '0.3s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Email Us</span>
                <span className={styles.infoCardText}>
                  info@smartsolar.lk<br />
                  support@smartsolar.lk
                </span>
              </div>
            </div>

            <div className={styles.infoCard} style={{ animationDelay: '0.4s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Business Hours</span>
                <span className={styles.infoCardText}>
                  Monday – Friday: 8:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 2:00 PM
                </span>
              </div>
            </div>


          </div>

          {/* ── Right: Contact Form ── */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    className={getInputClass('firstName')}
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    onBlur={() => handleBlur('firstName')}
                  />
                  {errors.firstName && touched.firstName && (
                    <span className={styles.errorText}>{errors.firstName}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    className={getInputClass('lastName')}
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    onBlur={() => handleBlur('lastName')}
                  />
                  {errors.lastName && touched.lastName && (
                    <span className={styles.errorText}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    className={getInputClass('email')}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                  />
                  {errors.email && touched.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    className={getInputClass('phone')}
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                  />
                  {errors.phone && touched.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service Interested In</label>
                <select
                  className={getInputClass('service')}
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  onBlur={() => handleBlur('service')}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="maintenance">Solar Maintenance</option>
                  <option value="storage">Energy Storage</option>
                  <option value="ev">EV Charging</option>
                  <option value="consultation">Free Consultation</option>
                </select>
                {errors.service && touched.service && (
                  <span className={styles.errorText}>{errors.service}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={getTextareaClass()}
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                ></textarea>
                {errors.message && touched.message && (
                  <span className={styles.errorText}>{errors.message}</span>
                )}
              </div>

              {isSuccess && (
                <div className={styles.successMessage}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                </div>
              )}

              <button type="submit" className={styles.formSubmit} disabled={isSending}>
                {isSending ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
