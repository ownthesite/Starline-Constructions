import Link from "next/link";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/50 to-transparent z-10"></div>
          {/* Hero background image */}
          <div
            className="w-full h-full bg-cover bg-center opacity-80"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/sorumlx6/image/upload/v1783454327/hero_wdzavf.webp')",
            }}
          ></div>
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <FadeIn className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] uppercase tracking-widest mb-6 rounded-sm">
              Established Excellence
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[64px] text-white leading-tight font-bold mb-8">
              Building Trust. <br />
              Creating Landmarks.
            </h1>
            <p className="font-body-lg text-white/90 mb-10 max-w-lg leading-relaxed">
              Redefining the horizon of Kochi with architectural precision and unwavering commitment to quality. We
              don&apos;t just build structures; we craft legacies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects">
                <button className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-4 font-label-md text-label-md uppercase tracking-[0.1em] hover:scale-105 duration-300 ease-out shadow-lg cursor-pointer">
                  Our Portfolio
                </button>
              </Link>
              <Link href="/about">
                <button className="w-full sm:w-auto border border-white text-white px-10 py-4 font-label-md text-label-md uppercase tracking-[0.1em] hover:bg-white hover:text-on-background transition-all duration-300 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Stats overlay (Desktop) */}
        <div className="absolute bottom-12 left-margin-desktop z-20 hidden lg:flex space-x-12">
          <div className="flex flex-col">
            <span className="font-display-lg text-[40px] text-secondary font-bold">25+</span>
            <span className="font-label-md text-white/70 uppercase text-[10px] tracking-widest">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[40px] text-secondary font-bold">150+</span>
            <span className="font-label-md text-white/70 uppercase text-[10px] tracking-widest">
              Projects Delivered
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[40px] text-secondary font-bold">12M</span>
            <span className="font-label-md text-white/70 uppercase text-[10px] tracking-widest">
              Sq. Ft Constructed
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section (Mobile & Tablet) */}
      <section className="lg:hidden bg-surface-container-lowest py-16 px-margin-mobile border-b border-outline-variant/20">
        <StaggerChildren className="grid grid-cols-3 gap-4 text-center">
          <FadeInChild direction="up">
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">25+</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Years Exp
            </span>
          </FadeInChild>
          <FadeInChild direction="up">
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">150+</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Projects
            </span>
          </FadeInChild>
          <FadeInChild direction="up">
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">12M</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Sq. Ft
            </span>
          </FadeInChild>
        </StaggerChildren>
      </section>

      {/* Core Specializations Section */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="mb-16">
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] uppercase tracking-widest mb-6 rounded-sm">
              Specialized Expertise
            </span>
            <h2 className="font-display-lg text-3xl md:text-headline-lg text-on-surface font-bold">
              Our Core Specializations
            </h2>
            <div className="w-16 h-0.5 bg-secondary mt-4"></div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Piling Services Tile */}
            <FadeInChild
              direction="up"
              className="bg-surface p-10 md:p-16 border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 group rounded-xl"
            >
              <div className="mb-8">
                <span className="material-symbols-outlined text-secondary text-[40px]">
                  foundation
                </span>
              </div>
              <h1 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-6 font-extrabold">
                Piling Services
              </h1>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8">
                Expert foundation piling solutions tailored for any unique terrain. We utilize advanced
                engineering and precision machinery to ensure your structure stands on a foundation of absolute
                integrity and lifelong stability.
              </p>
              <div className="h-[1px] w-12 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </FadeInChild>

            {/* Large-Scale Construction Tile */}
            <FadeInChild
              direction="up"
              className="bg-surface p-10 md:p-16 border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 group rounded-xl"
            >
              <div className="mb-8">
                <span className="material-symbols-outlined text-secondary text-[40px]">
                  apartment
                </span>
              </div>
              <h1 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-6 font-extrabold">
                Large-Scale Construction
              </h1>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8">
                From commercial complexes to luxury residential landmarks, we manage large-scale projects with
                architectural precision. Our decades of local expertise ensure seamless execution from
                groundbreaking to final handover.
              </p>
              <div className="h-[1px] w-12 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </FadeInChild>
          </StaggerChildren>
        </div>
      </section>

      {/* Iconic Projects Showcase */}
      <section className="py-24 bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="text-center mb-20">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-4">Portfolio</span>
            <h2 className="font-display-lg text-headline-lg font-bold mb-6">Iconic Landmarks</h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-white/60 font-body-md max-w-xl mx-auto">
              A selection of our most prestigious architectural contributions across the urban landscape of Kochi.
            </p>
          </FadeIn>
          <StaggerChildren staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            {/* Project 1 */}
            <FadeInChild direction="up" className="md:col-span-8 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="Souparnika Anaswara Builders Project"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://res.cloudinary.com/sorumlx6/image/upload/v1783449291/Anasvara-Souparnika-Anaswvara-Builders-Elamakkara-Kochi_x065pm.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">Anaswara Souparnika</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Elamakkara, Kochi</p>
              </div>
            </FadeInChild>

            {/* Project 2 */}
            <FadeInChild direction="up" className="md:col-span-4 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="Alpha Residence"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://res.cloudinary.com/sorumlx6/image/upload/v1783449296/Ar._Mathew_Saira_Residential_Bldng_of_Mr._MC_Raju_r5shq0.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">Alpha Residence</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Panampilly Nagar, Kochi</p>
              </div>
            </FadeInChild>
          </StaggerChildren>
        </div>
      </section>

      {/* Our Seamless Process */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="max-w-3xl mb-16">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-4">Workflow</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 font-bold">Our Seamless Process</h2>
            <div className="w-16 h-0.5 bg-secondary mb-4"></div>
            <p className="font-body-md text-on-surface-variant">
              We&apos;ve refined our construction workflow over two decades to ensure maximum transparency and zero friction
              for our clients.
            </p>
          </FadeIn>
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-outline-variant/50 z-0"></div>
            <StaggerChildren delay={0.2} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <FadeInChild direction="up" className="flex flex-col">
                <div className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  01
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Consultation
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Understanding your vision, requirements, and budget through deep architectural dialogue.
                </p>
              </FadeInChild>
              {/* Step 2 */}
              <FadeInChild direction="up" className="flex flex-col">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  02
                </div>
                <h4 className="font-label-md text-secondary uppercase tracking-widest mb-4 font-bold">
                  Construction
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Groundbreaking and rigorous execution of structure and masonry under expert supervision.
                </p>
              </FadeInChild>
              {/* Step 3 */}
              <FadeInChild direction="up" className="flex flex-col">
                <div className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  03
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Handover
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Final quality audits, interior finishing, and the ceremonial delivery of your landmark property.
                </p>
              </FadeInChild>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn direction="up" className="bg-secondary p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display-lg text-[32px] md:text-[40px] text-white leading-tight font-bold mb-6">
                Start Your Architectural Journey With Us Today.
              </h2>
              <p className="text-white/80 font-body-lg">
                Connect with our consultants to discuss your next residential or commercial project.
              </p>
            </div>
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919446090003?text=Hi%2C%20I'm%20interested%20in%20discussing%20a%20construction/architecture%20project%20with%20Starline%20Constructions."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full md:w-auto bg-on-background text-white px-12 py-5 font-label-md text-label-md uppercase tracking-[0.2em] hover:bg-white hover:text-on-background transition-all duration-500 shadow-xl cursor-pointer">
                  Enquire on WhatsApp
                </button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
