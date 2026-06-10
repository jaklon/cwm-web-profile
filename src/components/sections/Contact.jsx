import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  MapPin, Phone, Mail, Globe,
  Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { company } from '../../data/company';

const CONTACT_ITEMS = [
  {
    icon:  MapPin,
    label: 'Office Address',
    value: company.contact.address,
    color: 'text-green-600',
    bg:    'bg-green-100 border-green-200',
    href:  null,
  },
  {
    icon:  Phone,
    label: 'Phone',
    value: company.contact.phone.join(' / '),
    color: 'text-cyan-600',
    bg:    'bg-cyan-100 border-cyan-200',
    href:  `tel:${company.contact.phone[0].replace(/[^0-9+]/g, '')}`,
  },
  {
    icon:  Mail,
    label: 'Email',
    value: company.contact.email,
    color: 'text-violet-600',
    bg:    'bg-violet-100 border-violet-200',
    href:  `mailto:${company.contact.email}`,
  },
  {
    icon:  Globe,
    label: 'Website',
    value: company.contact.website,
    color: 'text-amber-600',
    bg:    'bg-amber-100 border-amber-200',
    href:  null,
  },
];

function ContactForm() {
  const [status, setStatus] = useState('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1400));
    console.log('Form data:', data);
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass = (hasError) => `
    w-full px-4 py-3 rounded-xl text-sm text-slate-900
    bg-slate-50 border transition-all duration-200 outline-none
    placeholder:text-slate-400
    focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200
    ${hasError
      ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
      : 'border-slate-300'}
  `;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h4 className="text-lg font-bold text-slate-900">Message Sent!</h4>
        <p className="text-sm text-slate-600 max-w-xs">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className={inputClass(!!errors.name)}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            className={inputClass(!!errors.email)}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
          Company / Organization
        </label>
        <input
          type="text"
          placeholder="PT. Example Indonesia"
          className={inputClass(false)}
          {...register('company')}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          className={inputClass(!!errors.subject) + ' cursor-pointer'}
          {...register('subject', { required: 'Please select a subject' })}
          defaultValue=""
        >
          <option value="" disabled className="bg-white">Select a topic…</option>
          <option value="bsf"           className="bg-white">Automatic BSF Breeding</option>
          <option value="rdf"           className="bg-white">RDF Briquette &amp; BBJP</option>
          <option value="geocell"       className="bg-white">Industrial Geocell Material</option>
          <option value="gasification"  className="bg-white">Gasification Power Plant</option>
          <option value="partnership"   className="bg-white">Partnership Inquiry</option>
          <option value="other"         className="bg-white">Other</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your waste management needs or project requirements…"
          className={inputClass(!!errors.message) + ' resize-none'}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Message must be at least 20 characters' },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="
          w-full flex items-center justify-center gap-2
          py-3.5 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-green-600 to-emerald-600
          hover:from-green-500 hover:to-emerald-500
          shadow-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]
          transition-all duration-300 active:scale-[0.98]
          disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
        "
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Get In Touch"
          title="Contact"
          titleGradient="Us"
          subtitle="Ready to transform your waste streams into value? Reach out to our team for a consultation or partnership inquiry."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <AnimatedSection direction="left" className="space-y-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, color, bg, href }) => {
              const inner = (
                <div className={`
                  flex items-start gap-4 p-5 rounded-2xl
                  bg-gray-50 border border-slate-200
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md hover:border-slate-300
                  ${href ? 'cursor-pointer' : ''}
                `}>
                  <div className={`
                    w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0
                    ${bg}
                  `}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                      {label}
                    </p>
                    <p className={`text-sm leading-relaxed break-words ${href ? `hover:${color}` : 'text-slate-700'} transition-colors`}>
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block group">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-gray-50 h-52 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center mx-auto mb-3">
                  <MapPin size={18} className="text-green-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Jakarta, Indonesia</p>
                <p className="text-xs text-slate-500 mt-1">Pondok Kelapa, Duren Sawit</p>
                <p className="text-xs text-slate-400 mt-3">Jakarta 13450</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest">
                  Send a Message
                </h3>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
