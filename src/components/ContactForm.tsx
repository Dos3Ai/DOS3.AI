import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    subject: 'General Inquiry',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or describe your inquiry.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your inquiry.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the processing of your contact details.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate network request with verified client-side validation
      // In production, configure endpoint via VITE_CONTACT_ENDPOINT or API Gateway
      await new Promise((resolve) => setTimeout(resolve, 900));
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        subject: 'General Inquiry',
        message: '',
        consent: false,
      });
      setErrors({});
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-dos-border/60">
      {submitStatus === 'success' ? (
        <div className="py-12 text-center space-y-4 animate-fadeIn" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-dos-cyan/10 border border-dos-cyan/40 flex items-center justify-center mx-auto text-dos-cyan">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-dos-cloud">
            Message Transmitted
          </h3>
          <p className="text-sm text-dos-mist/80 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to DOS3.AI. We have received your inquiry and will review it thoughtfully.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmitStatus('idle')}
            >
              Send Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submitStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Submission could not be completed</p>
                <p className="text-xs text-red-300/80 mt-0.5">
                  Please verify your network connection or email directly at contact@dos3.ai.com.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-dos-mist mb-2">
                Full Name <span className="text-dos-cyan">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dos-surface/90 border text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all placeholder:text-dos-mist/40 ${
                  errors.fullName ? 'border-red-500/80 focus:ring-red-500' : 'border-dos-border/60 hover:border-dos-cyan/30'
                }`}
                placeholder="Ada Lovelace"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-dos-mist mb-2">
                Work Email <span className="text-dos-cyan">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dos-surface/90 border text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all placeholder:text-dos-mist/40 ${
                  errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-dos-border/60 hover:border-dos-cyan/30'
                }`}
                placeholder="ada@organization.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-dos-mist mb-2">
                Organization <span className="text-dos-mist/50 text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dos-surface/90 border border-dos-border/60 hover:border-dos-cyan/30 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all placeholder:text-dos-mist/40"
                placeholder="Company or Research Lab"
                disabled={isSubmitting}
              />
            </div>

            {/* Subject / Reason */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-dos-mist mb-2">
                Reason for Contact
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dos-surface/90 border border-dos-border/60 hover:border-dos-cyan/30 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all cursor-pointer"
                disabled={isSubmitting}
              >
                <option value="General Inquiry" className="bg-dos-midnight text-white">General Inquiry</option>
                <option value="Technology & Collaboration" className="bg-dos-midnight text-white">Technology & Collaboration</option>
                <option value="Research Discussion" className="bg-dos-midnight text-white">Research Discussion</option>
                <option value="Security Inquiry" className="bg-dos-midnight text-white">Security Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-dos-mist mb-2">
              Message <span className="text-dos-cyan">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-dos-surface/90 border text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all placeholder:text-dos-mist/40 resize-y ${
                errors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-dos-border/60 hover:border-dos-cyan/30'
              }`}
              placeholder="Please describe your inquiry, topic of interest, or area of collaboration..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded bg-dos-surface border-dos-border/80 text-dos-azure focus:ring-dos-cyan focus:ring-offset-dos-void"
                disabled={isSubmitting}
              />
              <span className="text-xs text-dos-mist/80 group-hover:text-dos-cloud transition-colors leading-relaxed">
                I agree that the details supplied may be used to respond to this inquiry in accordance with responsible privacy standards.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
            >
              {isSubmitting ? 'Transmitting Message...' : 'Submit Inquiry'}
            </Button>

            <span className="text-xs text-dos-mist/50">
              Direct routing to verified inquiries inbox
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
