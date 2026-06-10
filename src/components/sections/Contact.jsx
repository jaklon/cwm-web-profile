// TODO: run: npm install @emailjs/browser
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
    label: 'Alamat Kantor',
    value: company.contact.address,
    color: 'text-green-600',
    bg:    'bg-green-100 border-green-200',
    href:  null,
  },
  {
    icon:  Phone,
    label: 'Telepon',
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
    try {
      // Replace with your EmailJS credentials in .env:
      // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name:  data.name,
          from_email: data.email,
          company:    data.company || '-',
          subject:    data.subject,
          message:    data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = (hasError) => `
    w-full px-4 py-3 min-h-[44px] rounded-xl text-sm text-slate-900 dark:text-slate-100
    bg-slate-50 dark:bg-slate-800 border transition-all duration-200 outline-none
    placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:bg-white dark:focus:bg-slate-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900
    ${hasError
      ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
      : 'border-slate-300 dark:border-slate-600'}
  `;

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center">
          <AlertCircle size={32} className="text-red-600" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Gagal Terkirim</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
          Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung di{' '}
          <span className="font-medium text-slate-800 dark:text-slate-200">{company.contact.email}</span>.
        </p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Pesan Terkirim!</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
          Terima kasih telah menghubungi kami. Tim kami akan segera merespons.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Budi Santoso"
            className={inputClass(!!errors.name)}
            {...register('name', { required: 'Nama harus diisi' })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="budi@perusahaan.com"
            className={inputClass(!!errors.email)}
            {...register('email', {
              required: 'Email harus diisi',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Alamat email tidak valid' },
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
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
          Perusahaan / Organisasi
        </label>
        <input
          type="text"
          placeholder="PT. Contoh Indonesia"
          className={inputClass(false)}
          {...register('company')}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
          Subjek <span className="text-red-500">*</span>
        </label>
        <select
          className={inputClass(!!errors.subject) + ' cursor-pointer'}
          {...register('subject', { required: 'Silakan pilih subjek' })}
          defaultValue=""
        >
          <option value="" disabled className="bg-white dark:bg-slate-800">Pilih topik…</option>
          <option value="bsf"           className="bg-white dark:bg-slate-800">Budidaya BSF Otomatis</option>
          <option value="rdf"           className="bg-white dark:bg-slate-800">Briket RDF &amp; BBJP</option>
          <option value="geocell"       className="bg-white dark:bg-slate-800">Material Geocell Industri</option>
          <option value="gasification"  className="bg-white dark:bg-slate-800">Pembangkit Listrik Gasifikasi</option>
          <option value="wte-system"    className="bg-white dark:bg-slate-800">Pertanyaan Sistem WTE / TPST3R</option>
          <option value="partnership"   className="bg-white dark:bg-slate-800">Pertanyaan Kemitraan</option>
          <option value="other"         className="bg-white dark:bg-slate-800">Lainnya</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Ceritakan kebutuhan pengelolaan sampah atau persyaratan proyek Anda…"
          className={inputClass(!!errors.message) + ' resize-none'}
          {...register('message', {
            required: 'Pesan harus diisi',
            minLength: { value: 20, message: 'Pesan minimal 20 karakter' },
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
            Mengirim…
          </>
        ) : (
          <>
            <Send size={16} />
            Kirim Pesan
          </>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Hubungi Kami"
          title="Kontak"
          titleGradient="Kami"
          subtitle="Siap mengubah aliran sampah Anda menjadi nilai? Hubungi tim kami untuk konsultasi atau pertanyaan kemitraan."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <AnimatedSection direction="left" className="space-y-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, color, bg, href }) => {
              const inner = (
                <div className={`
                  flex items-start gap-4 p-5 rounded-2xl
                  bg-gray-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600
                  ${href ? 'cursor-pointer' : ''}
                `}>
                  <div className={`
                    w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0
                    ${bg}
                  `}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                      {label}
                    </p>
                    <p className={`text-sm leading-relaxed break-words ${href ? `hover:${color}` : 'text-slate-700 dark:text-slate-300'} transition-colors`}>
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

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-52">
              <iframe
                title="Lokasi Kantor CWM"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.9270!3d-6.2200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMTIuMCJTIDEwNsKwNTUnMzcuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                  Kirim Pesan
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
