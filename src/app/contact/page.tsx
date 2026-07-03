import { FadeIn, StaggerChildren, FadeInChild } from "@/components/FadeIn";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/919446090003?text=Hi%2C%20I'm%20interested%20in%20discussing%20a%20construction%2Farchitecture%20project%20with%20Starline%20Constructions.";

  return (
    <main className="flex-grow pt-20 bg-surface">
      {/* ── Hero Text ─────────────────────────────────────────── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-4">
        <FadeIn>
          <span className="font-label-md text-xs text-secondary uppercase tracking-[0.3em] block mb-3 font-bold">
            Crafting Excellence
          </span>
          <h1 className="font-display-lg text-[38px] md:text-5xl lg:text-[56px] font-bold text-on-surface leading-tight mb-4">
            Start Your Legacy
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed text-sm">
            Every great structure begins with a conversation. Let us bring your
            architectural vision to life with precision, luxury, and timeless
            craftsmanship.
          </p>
        </FadeIn>
      </section>

      {/* ── Two-Column Layout ─────────────────────────────────── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Contact Details + Map ─────────────────── */}
          <div className="space-y-6">

            {/* Contact Info Card */}
            <FadeIn direction="left" delay={0.2} className="bg-white border border-outline-variant/30 rounded-xl p-8 space-y-7 atmospheric-shadow">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-secondary uppercase tracking-widest text-[10px] mb-1">
                    The Office
                  </p>
                  <p className="font-body-md text-on-surface text-sm leading-relaxed">
                    2nd Floor, Marian Abode Putharickal,
                    <br />
                    Parambithara Road, Panampilly Nagar,
                    <br />
                    Kochi, Kerala 682036
                  </p>
                </div>
              </div>

              <div className="h-px bg-outline-variant/30" />

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    call
                  </span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-secondary uppercase tracking-widest text-[10px] mb-1">
                    Direct Line
                  </p>
                  <a
                    href="tel:+919446090003"
                    className="font-body-md text-on-surface text-sm hover:text-secondary transition-colors"
                  >
                    +91 94460 90003
                  </a>
                  <p className="text-[10px] text-on-surface-variant mt-0.5 uppercase tracking-wider">
                    Available Mon – Sat, 9AM – 6PM
                  </p>
                </div>
              </div>

              <div className="h-px bg-outline-variant/30" />

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-secondary uppercase tracking-widest text-[10px] mb-1">
                    Email Inquiry
                  </p>
                  <a
                    href="mailto:info@starlineconstructions.com"
                    className="font-body-md text-on-surface text-sm hover:text-secondary transition-colors"
                  >
                    info@starlineconstructions.com
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* ── Google Map ───────────────────────────────────── */}
            <FadeIn direction="left" delay={0.3} className="relative rounded-xl overflow-hidden border border-outline-variant/30 atmospheric-shadow">
              {/* Map label overlay */}
              <div className="absolute bottom-0 left-0 z-10 m-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <p className="font-label-md font-bold text-on-surface text-[11px] uppercase tracking-wider">
                    Starline HQ
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    Panampilly Nagar, The heart of architectural innovation.
                  </p>
                </div>
              </div>

              <iframe
                title="Starline Constructions Location"
                src="https://maps.google.com/maps?q=Starline+constructions,Marian+Abode,Parambithara+Rd,Panampilly+Nagar,Kochi,Kerala&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: "block", filter: "grayscale(30%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </FadeIn>
          </div>

          {/* ── RIGHT: WhatsApp Enquiry Card ─────────────────── */}
          <FadeIn direction="right" delay={0.2} className="bg-white border border-outline-variant/30 rounded-xl p-8 md:p-10 atmospheric-shadow flex flex-col h-full">
            {/* Icon */}
            <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">
                chat_bubble
              </span>
            </div>

            <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface mb-3">
              Enquire via WhatsApp
            </h2>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-8">
              Connect with our architectural consultants instantly for your
              luxury project. Get immediate answers to your design and
              construction queries.
            </p>

            <StaggerChildren delay={0.2} staggerDelay={0.15} className="space-y-5 mb-10 flex-1">
              {[
                {
                  icon: "bolt",
                  title: "Instant Response",
                  desc: "Our team responds within 10 minutes during business hours.",
                },
                {
                  icon: "share_reviews",
                  title: "Share Plans & Blueprints",
                  desc: "Send site photos, sketches, or land dimensions directly.",
                },
                {
                  icon: "verified_user",
                  title: "Senior Expert Access",
                  desc: "Chat directly with senior management and design leads.",
                },
              ].map(({ icon, title, desc }) => (
                <FadeInChild key={title} direction="up" className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5 shrink-0">
                    {icon}
                  </span>
                  <div>
                    <p className="font-label-md font-bold text-on-surface text-sm">
                      {title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {desc}
                    </p>
                  </div>
                </FadeInChild>
              ))}
            </StaggerChildren>

            {/* CTA button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-secondary text-on-secondary py-4 rounded-lg font-label-md text-sm uppercase tracking-[0.15em] font-bold hover:opacity-90 hover:scale-[1.01] transition-all duration-300 shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                play_arrow
              </span>
              Start WhatsApp Chat
            </a>

            <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest mt-3">
              Typical response time: under 10 minutes
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
