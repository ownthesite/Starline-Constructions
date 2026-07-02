
import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      id: "residential",
      title: "Residential Construction",
      subtitle: "Bespoke Premium Homes",
      description:
        "We specialize in designing and building high-end, custom-crafted villas and luxury residential spaces. From architectural layout to the final structural detail, we create homes that represent stability, exclusivity, and modern sophistication.",
      icon: "home_work",
      features: [
        "Architectural Villa Crafting",
        "Multi-Storey Premium Apartments",
        "Custom Masonry & Wooden Detailing",
        "Eco-Friendly Materials Integration",
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzFdGNN9-vgdfc-PbSDtKgtWE-NMCmpfhqIjjiwOcJClNkn9_YUf-cFN7G0bGQ4rpGam46xZoI96yB-P818z5pL1G96wjwq9fe3TIHS_PSfT7xjOta1kV5ezyAZNNPjnt5bLF-NK6_lLXIEMdpAtvrckOUdZ-5wzTrXPQkFHbbGaiHLlgZYRFE3H7zT-0z1H8zuSumqVaUxCEYu9ByO3Pq8TLmfiGrmB8rMOvxTgMxqOGiOGBTLgnm1c0xIwRSWrx8K8dMleGh6Rw",
    },
    {
      id: "commercial",
      title: "Commercial Engineering",
      subtitle: "Corporate Hubs & Plazas",
      description:
        "Our commercial services focus on constructing professional corporate headquarters, software parks, and modern business hubs. We ensure fast timelines, rigorous compliance, and structural integrity suited for institutional operations.",
      icon: "business",
      features: [
        "High-Rise Commercial Plazas",
        "Software Park IT Complexes",
        "Statutory & Local Clearances",
        "Post-Tensioned Slab Construction",
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5MLWeOyznAcBeRdldBJyt8WUqdmL7-pXDzoqQyslo1Vc6VYj4q6qzDWV2TMz3VyKZcJio-04PE2yFPpwR4iOPamP1CBnWGsfsHLqbdRJjgKUUgb0lvTNzxUsWBPQ-DY27MO6EvjFd50PNaRNaJ4sP37ndiUw8Zf7RiHtflVTGmNcFnJ1_ieJED8nJNvaYX4ARWPnIl-rVpI8LImtgHZII9EJwfPXdM5PsodZGeIBccG690EhrY2IQwyR2kJ81iRcZP2Eeitb1nro",
    },
    {
      id: "consulting",
      title: "Architectural & Planning Consultation",
      subtitle: "Design & Project Blueprinting",
      description:
        "Get comprehensive design and project blueprinting services. We work closely with leading visualizers to formulate 3D elevations, spatial planning models, and structural drafting that balance light, space, and materials.",
      icon: "architecture",
      features: [
        "Spatial Planning & Layouts",
        "3D Elevation Visualizations",
        "Structural Drafting & Auditing",
        "Detailed Project Budgeting",
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAwxb0bi9kKxEr-xamPgP9XLsMFxMjaYeveUi8VR44EDRJQbhnQ7d1PBEUXGi2fQV7maRPK8WHtcskM-sqEwiDGmNCqhhbkhwqkSQdlkH_Kd48sOQVCT7fCEWmMgA3PboxmyKXPABThgkCfCHISovJvs__ilqi8ad0GqDla6UCc6b8-Qw7C_R3TEF2pZ0RSgk1zKyOGnrIgzoFfDyggiRonWtLTvluotDIDI7ByQTLLqiDgFXREBiQaKm4tLNt0gBXmmOSPlf4tQFs",
    },
  ];

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] block mb-4 font-bold">
            Our Expertise
          </span>
          <h1 className="font-display-lg text-[32px] md:text-5xl lg:text-[64px] text-on-surface mb-6 font-bold leading-tight">
            High-End Construction Services
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image (reordered on desktop based on even/odd) */}
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="absolute inset-0 bg-on-background/10 z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className={`space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <span className="font-label-md text-secondary uppercase tracking-wider text-xs block font-bold">
                        {service.subtitle}
                      </span>
                      <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface font-bold mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="w-16 h-0.5 bg-secondary"></div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 items-center text-on-surface font-body-md text-sm">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/contact">
                      <button className="bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md uppercase tracking-wider hover:scale-105 duration-300 shadow-md cursor-pointer">
                        Get Service Estimate
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-3xl">
          <h2 className="font-display-lg text-headline-lg font-bold mb-6">Need a Specialized Building Solution?</h2>
          <p className="font-body-md text-on-surface-variant mb-10 leading-relaxed">
            Whether you are looking to reconstruct an existing property, design a custom eco-friendly interior layout,
            or obtain safety and licensing clearances, we are here to consult.
          </p>
          <Link href="/contact">
            <button className="bg-on-background text-white px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-lg cursor-pointer">
              Contact our Experts
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
