'use client';
import '@/app/components/contact-form/contact-form.scss';
import { FormEvent, useId, useState } from 'react';

type ContactFormProps = {
  theme?: 'light' | 'dark';
  classes?: string;
};

export default function ContactForm({ theme = 'light', classes }: ContactFormProps) {
  const [status, setStatus] = useState<'sending' | 'success' | 'error' | null>(null);
  // The form renders more than once per page (nav modal + footer), so ids can't be fixed.
  const id = useId();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      fields[key] = value.toString();
    });

    try {
      // Posts to the static form declaration Netlify picked up at build time.
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fields).toString(),
      });

      setStatus(response.ok ? 'success' : 'error');
    } catch (error) {
      setStatus('error');
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <form
      className={`contact-form theme--${theme} ${classes ? classes : ''}`}
      name="Contact"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="Contact" />
      <input type="hidden" name="url" value={typeof window !== 'undefined' ? window.location.href : ''} />
      <p className="contact-form__honeypot">
        <label>
          Don’t fill this out if you’re human
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form__field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} name="Name" type="text" placeholder="Your name" required />
      </div>
      <div className="contact-form__field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} name="Email" type="email" placeholder="name@youremail.com" required />
      </div>
      <div className="contact-form__field contact-form__field--full">
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea id={`${id}-message`} name="Message" rows={5} placeholder="Tell me about your project" required />
      </div>

      <button
        type="submit"
        className={`button button--big button--primary ${status === 'sending' || status === 'success' ? 'button--disabled' : ''}`}
        disabled={status === 'sending' || status === 'success'}
      >
        {status === 'sending' ? 'Sending…' : status === 'success' ? 'Message sent' : 'Send message'}
      </button>

      {(status === 'success' || status === 'error') && (
        <p className="contact-form__message" role="status">
          {status === 'success'
            ? 'Thanks! I’ll be in touch shortly.'
            : 'Something went wrong. Please try again, or reach me on LinkedIn.'}
        </p>
      )}
    </form>
  );
}
