'use client';

import { FormEvent, useState } from 'react';

type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});

  const validateField = (name: keyof ContactFormFields, value: string): string | null => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : null;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : null;
      case 'phone':
        return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value.replace(/\s/g, ''))
          ? 'Please enter a valid phone number'
          : null;
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : null;
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : null;
      default:
        return null;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormFields;
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error || undefined }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormFields;

    if (errors[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error || undefined }));
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields: ContactFormFields = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    const newErrors: Partial<ContactFormFields> = {};
    let hasErrors = false;

    (Object.keys(fields) as Array<keyof ContactFormFields>).forEach((key) => {
      const error = validateField(key, fields[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      setStatus('error');
      setStatusMessage('Please fix the errors above');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setStatusMessage(data.message || 'Thank you for your inquiry. We will get back to you within 24 hours.');
      event.currentTarget.reset();
      setErrors({});
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">
          Name <span className="required" aria-hidden="true">*</span>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          {errors.name && (
            <p id="name-error" className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </label>

        <label htmlFor="email">
          Email <span className="required" aria-hidden="true">*</span>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          {errors.email && (
            <p id="email-error" className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </label>
      </div>

      <div className="form-row">
        <label htmlFor="phone">
          Phone <span className="required" aria-hidden="true">*</span>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="+91 XXXXX XXXXX"
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          {errors.phone && (
            <p id="phone-error" className="field-error" role="alert">
              {errors.phone}
            </p>
          )}
        </label>

        <label htmlFor="subject">
          Subject <span className="required" aria-hidden="true">*</span>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            required
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            placeholder="Product inquiry, partnership, etc."
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          {errors.subject && (
            <p id="subject-error" className="field-error" role="alert">
              {errors.subject}
            </p>
          )}
        </label>
      </div>

      <label htmlFor="message">
        Message <span className="required" aria-hidden="true">*</span>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          placeholder="Please share your product requirement, quantity, destination, and expected timeline for a faster response."
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <p id="message-error" className="field-error" role="alert">
            {errors.message}
          </p>
        )}
        <p id="message-hint" className="field-hint">
          Include product details, quantity, destination, and timeline for a faster response.
        </p>
      </label>

      <button
        className="btn btn-primary w-full sm:w-auto"
        type="submit"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>

      <div className={`form-status ${status}`} role="status" aria-live="polite">
        {statusMessage && (
          <p className={status === 'success' ? 'success' : status === 'error' ? 'error' : ''}>
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
