import Link from "next/link";

export default function About() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] block mb-4 font-bold">
            Established 1998
          </span>
          <h1 className="font-display-lg text-[32px] md:text-5xl lg:text-[64px] text-on-surface mb-6 font-bold leading-tight">
            Building Tomorrow's Heritage
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* The Starline Legacy */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] block">Our Story</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">The Starline Legacy</h2>
          <div className="w-16 h-0.5 bg-secondary"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            For over two decades, Starline Constructions has been synonymous with architectural excellence and
            uncompromising quality. What began as a boutique firm in Kochi has evolved into a powerhouse of innovation,
            shaping the skyline with structures that stand the test of time.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our journey is defined by a meticulous attention to detail and a passion for creating spaces that inspire.
            Every beam we place and every stone we set is a testament to our commitment to craftsmanship and the legacy
            of our clients.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <div className="font-headline-md text-3xl md:text-4xl text-secondary font-bold">250+</div>
              <div className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mt-1 font-semibold">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="font-headline-md text-3xl md:text-4xl text-secondary font-bold">25+</div>
              <div className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mt-1 font-semibold">
                Years Excellence
              </div>
            </div>
          </div>
        </div>

        <div className="relative group p-4">
          {/* Offset Border Frame */}
          <div className="absolute -inset-1 border border-secondary/30 translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 rounded-lg"></div>
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container shadow-2xl rounded-lg">
            <img
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
              alt="Starline Legacy Architectural Focus"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxb0bi9kKxEr-xamPgP9XLsMFxMjaYeveUi8VR44EDRJQbhnQ7d1PBEUXGi2fQV7maRPK8WHtcskM-sqEwiDGmNCqhhbkhwqkSQdlkH_Kd48sOQVCT7fCEWmMgA3PboxmyKXPABThgkCfCHISovJvs__ilqi8ad0GqDla6UCc6b8-Qw7C_R3TEF2pZ0RSgk1zKyOGnrIgzoFfDyggiRonWtLTvluotDIDI7ByQTLLqiDgFXREBiQaKm4tLNt0gBXmmOSPlf4tQFs"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission (Bento Style) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Vision (Col Span 7) */}
            <div className="md:col-span-7 bg-white p-8 md:p-12 atmospheric-shadow flex flex-col justify-center border-l-4 border-secondary rounded-xl">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 self-start">
                visibility
              </span>
              <h3 className="font-headline-lg text-3xl mb-6 font-bold">Our Vision</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
                "To be the global benchmark for sustainable architectural luxury, where every structure we build becomes
                a landmark of human ingenuity and environmental harmony."
              </p>
            </div>

            {/* Mission (Col Span 5) */}
            <div className="md:col-span-5 bg-secondary text-on-secondary p-8 md:p-12 flex flex-col justify-center shadow-lg rounded-xl">
              <span className="material-symbols-outlined text-on-secondary/80 text-5xl mb-6 self-start">
                rocket_launch
              </span>
              <h3 className="font-headline-md text-3xl mb-6 font-bold">Our Mission</h3>
              <p className="font-body-md text-body-md text-on-secondary/90 leading-relaxed">
                To deliver world-class construction solutions through innovative engineering, ethical practices, and a
                relentless focus on client satisfaction, ensuring that Starline remains a name trusted for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation of Trust */}
      <section className="py-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-4">Our Values</span>
        <h2 className="font-headline-lg text-headline-lg font-bold mb-4">Foundation of Trust</h2>
        <div className="w-16 h-0.5 bg-secondary mx-auto mb-6"></div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-16">
          Our core values aren't just words on a wall; they are the pillars that support every project we undertake.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Transparency */}
          <div className="group p-8 bg-surface hover:bg-white transition-all duration-300 atmospheric-shadow rounded-xl border border-transparent hover:border-outline-variant/20">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">
                account_balance
              </span>
            </div>
            <h4 className="font-headline-md text-2xl mb-4 font-semibold">Transparency</h4>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We believe in open communication. From budgets to timelines, our clients are kept informed at every stage of
              the building process.
            </p>
          </div>

          {/* Sustainability */}
          <div className="group p-8 bg-surface hover:bg-white transition-all duration-300 atmospheric-shadow rounded-xl border border-transparent hover:border-outline-variant/20">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">
                eco
              </span>
            </div>
            <h4 className="font-headline-md text-2xl mb-4 font-semibold">Sustainability</h4>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Building for the future means protecting the present. We integrate eco-friendly materials and energy-efficient
              designs into every legacy we build.
            </p>
          </div>

          {/* Innovation */}
          <div className="group p-8 bg-surface hover:bg-white transition-all duration-300 atmospheric-shadow rounded-xl border border-transparent hover:border-outline-variant/20">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">
                lightbulb
              </span>
            </div>
            <h4 className="font-headline-md text-2xl mb-4 font-semibold">Innovation</h4>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              The status quo is our starting point. We utilize cutting-edge construction technology to solve complex
              architectural challenges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-on-background text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(119,90,25,0.15),transparent)] pointer-events-none"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-4xl md:text-5xl lg:text-[64px] font-bold mb-8 leading-tight">
            Ready to Build Your Legacy?
          </h2>
          <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto mb-12">
            Partner with Starline Constructions to transform your architectural dreams into lasting concrete realities.
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-secondary text-on-secondary px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer">
                Start a Conversation
              </button>
            </Link>
            <Link href="/projects">
              <button className="w-full sm:w-auto border border-white/30 text-white px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-all duration-300 cursor-pointer">
                View Our Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
