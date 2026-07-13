import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Services() {
  const servicesList = [
    {
      id: "piling",
      title: "Piling Services",
      subtitle: "Structural Integrity",
      description:
        "Expert piling solutions tailored for Kerala's unique terrain. We utilize advanced machinery and specialized engineering techniques to ensure a rock-solid foundation for any structure, from coastal residences to inland high-rises.",
      icon: "foundation",
      features: [
        "Hydraulic Rotary Piling",
        "Bored Cast-in-Situ Piles",
        "Terrain-Specific Ground Stabilization",
      ],
      image:
        "https://res.cloudinary.com/sorumlx6/image/upload/v1783454328/piling_ycifxt.webp",
    },
    {
      id: "large-scale",
      title: "Large-Scale Construction",
      subtitle: "Commercial & Luxury",
      description:
        "From corporate IT parks like the BEO Software Park to hospitals, theatres, commercial complexes, and luxury residences, we deliver large-scale projects with precision. Combining timeless design with modern functionality, we create spaces built for quality, efficiency, and lasting impact.",
      icon: "corporate_fare",
      features: [
        "High-Rise Commercial Plazas",
        "Premium Multi-Family Apartments",
        "Corporate Headquarters & Software Parks",
        "Hospitals,Theatres",
        "Commercial Complexes",
      ],
      image:
        "https://res.cloudinary.com/sorumlx6/image/upload/v1783449301/BEO-Software-park-Building-Kakkanad-Ernakulam_etooyy.webp",
    },
  ];

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
        <FadeIn className="relative z-10 text-center px-margin-mobile md:px-0">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] block mb-4 font-bold">
            Our Expertise
          </span>
          <h1 className="font-display-lg text-[32px] md:text-5xl lg:text-[64px] text-on-surface mb-6 font-bold leading-tight">
            High-End Construction Services
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <FadeIn
                key={service.id}
                direction={isEven ? "right" : "left"}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Image (reordered on desktop based on even/odd) */}
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ${isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                  <div className="absolute inset-0 bg-on-background/10 z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"
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
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Leading Architects List */}
      <section className="py-16 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="mb-10">
            <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface font-bold mb-3">
              Our Leading Architects — Kochi, Kerala
            </h2>
            <div className="w-16 h-0.5 bg-secondary"></div>
          </FadeIn>
          <FadeIn direction="up">
            <div className="overflow-x-auto rounded-xl border border-outline-variant/20 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-on-background text-white">
                    <th className="text-left px-6 py-4 font-label-md uppercase tracking-widest text-[11px]">Name</th>
                    <th className="text-left px-6 py-4 font-label-md uppercase tracking-widest text-[11px]">Firm / Designation</th>
                    <th className="text-left px-6 py-4 font-label-md uppercase tracking-widest text-[11px]">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Ar. Mathew", firm: "Mathew & Saira Architects", phone: "9847045554" },
                    { name: "Ar. Jibu John", firm: "Jibu & Thomas Architects", phone: "9846064916" },
                    { name: "Ar. Anuj", firm: "Kumar Group Total Designers", phone: "9846246464" },
                    { name: "Ar. Jayanandh Killikar", firm: "Kilikkar Architects", phone: "9447024510" },
                    { name: "Mr. Muhammed Aslam", firm: "Entrepreneur", phone: "9895556667" },
                    { name: "Mr. Sarji Muhammedali", firm: "CEO Citrus Informatics", phone: "9847054179" },
                    { name: "Mr. Varghese Nettikadan", firm: "Sparkle Homes", phone: "9447036618" },
                    { name: "Mr. Arun Vijayakumar", firm: "Ansvara Properties", phone: "8086257475" },
                    { name: "Mr. George Panicker", firm: "SL. Ventures, Palarivatom", phone: "9447013547" },
                    { name: "Mr. Jossy Joseph", firm: "Central Excise Kochi", phone: "9447209225" },
                    { name: "Mr. Raju", firm: "Central Excise Kochi", phone: "9447326115" },
                    { name: "Mrs. Gleena Arun", firm: "Exe. Engineer KSEB", phone: "9496009133" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-outline-variant/20 transition-colors duration-200 hover:bg-secondary/5 ${i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}`}
                    >
                      <td className="px-6 py-4 font-body-md text-on-surface font-semibold whitespace-nowrap">{row.name}</td>
                      <td className="px-6 py-4 font-body-md text-on-surface-variant">{row.firm}</td>
                      <td className="px-6 py-4 font-body-md text-secondary font-medium whitespace-nowrap">
                        <a href={`tel:${row.phone}`} className="hover:underline">{row.phone}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-low">
        <FadeIn direction="up" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-3xl">
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
        </FadeIn>
      </section>
    </main>
  );
}
