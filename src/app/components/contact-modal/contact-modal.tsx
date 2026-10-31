'use client';
import '@/app/components/contact-modal/contact-modal.scss';
import { useEffect, useId, useRef, useState } from 'react';
import ContactForm from '../contact-form/contact-form';

type ContactModalProps = {
  text?: string;
  classes?: string;
};

export default function ContactModal({ text = 'Contact', classes }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const headingId = useId();

  // showModal() rather than the open attribute: it brings the focus trap,
  // Esc-to-close and backdrop with it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();

    // Outside the branches above: Esc closes the dialog itself, so by the time
    // onClose fires dialog.open is already false and neither branch runs.
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  return (
    <>
      <button
        type="button"
        className={`contact-modal__trigger ${classes ? classes : ''}`}
        onClick={() => setIsOpen(true)}
      >
        {text}
      </button>

      <dialog
        ref={dialogRef}
        className="contact-modal"
        aria-labelledby={headingId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
      >
        <div className="contact-modal__inner">
          <header className="contact-modal__header">
            <h2 id={headingId} className="contact-modal__heading">Get in touch</h2>
            <button
              type="button"
              className="contact-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact form"
            >
              ✕
            </button>
          </header>
          <ContactForm theme="dark" />
        </div>
      </dialog>
    </>
  );
}
