import Link from "next/link";

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
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzFdGNN9-vgdfc-PbSDtKgtWE-NMCmpfhqIjjiwOcJClNkn9_YUf-cFN7G0bGQ4rpGam46xZoI96yB-P818z5pL1G96wjwq9fe3TIHS_PSfT7xjOta1kV5ezyAZNNPjnt5bLF-NK6_lLXIEMdpAtvrckOUdZ-5wzTrXPQkFHbbGaiHLlgZYRFE3H7zT-0z1H8zuSumqVaUxCEYu9ByO3Pq8TLmfiGrmB8rMOvxTgMxqOGiOGBTLgnm1c0xIwRSWrx8K8dMleGh6Rw')",
            }}
          ></div>
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] uppercase tracking-widest mb-6 rounded-sm">
              Established Excellence
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[64px] text-white leading-tight font-bold mb-8">
              Building Trust. <br />
              Creating Landmarks.
            </h1>
            <p className="font-body-lg text-white/90 mb-10 max-w-lg leading-relaxed">
              Redefining the horizon of Kochi with architectural precision and unwavering commitment to quality. We
              don't just build structures; we craft legacies.
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
          </div>
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
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">25+</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Years Exp
            </span>
          </div>
          <div>
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">150+</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Projects
            </span>
          </div>
          <div>
            <span className="block font-display-lg text-2xl md:text-3xl text-secondary font-bold">12M</span>
            <span className="font-label-md text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface-variant">
              Sq. Ft
            </span>
          </div>
        </div>
      </section>



      {/* Iconic Projects Showcase */}
      <section className="py-24 bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-4">Portfolio</span>
            <h2 className="font-display-lg text-headline-lg font-bold mb-6">Iconic Landmarks</h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-white/60 font-body-md max-w-xl mx-auto">
              A selection of our most prestigious architectural contributions across the urban landscape of Kochi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Project 1 */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="Souparnika Anaswara Builders Project"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQu5maQzl1-mff5pRxRLNenl6YfjVi7q8Ok8qFQV0Uvfph1Vh8yj6F9XL8X8-dKrPyoCj3bn8NRtvj5KLRg7O5Qxq-WrGHIaVQfDi-bZ1GFcdpIPBcKFlUuubRvF0ee83lPI2kzxhu11MIfU9-lOwCrCdpeWigZOELTohcrQ05XZu6ob3C0_GcsmWMsmrRed89XIvLOatFfmgdW1GESCbvYBPw3bV1I7Fh61T0UaTDK2deOd-orCLRIMm8rUGH1NqfCOA1x58aFVM"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">Anaswara Souparnika</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Elamakkara, Kochi</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="Residential Villa Panampilly Nagar"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI9wfXWIdA-Bx-LTcAPZO0lNGiIRhN13tX0egy8rkahHlXX1wfuVceOqFQR0Sbs6jPkcaHH_QjeV60c2OJeDK6kXU4bm4KHQtXSPyYmQlOkxVVk_84l6qtRy5utGbiFhtQK-lGh39VTys4Z3GnWo5GdkO8CTyo2hYiaF_PTQxjqb__Z5T-qmsBiOSaUVPzUrPL9SNt4VBH684qvVbD_NvkWwPeiDQaXJOwtDKRt_BkneKm-rdjoXVa32G_7gBHQKUPH4wwz4jBrSQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">Luxury Villa</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Panampilly Nagar</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="Parekkattu Plaza Project"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKumx-l-GZGMpcrz6l7jST7kaRyAMlVz6j19bulJM0dItyu6RBH5wnct2gb6yAMSDThjLpsKmYAwTPiibgtvf4MnT7dmSEuBvM03sBkiSQ2-QT5ntae1QqI_Bzl6lu8WTxKcgIPX6EHghhfTwu-t4jBqfW98KvTCF_UIEdr7eV79eENl46k0rSn18XJej8XN0xsP72X8YiBNCC8x08EDJKLpxMD-KOWc8Qx7EIQ0L0o25WPMjAPHdhLhswVNZzMqAV4Tu0rGE6icE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">Parekkattu Plaza</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Elamkulam, Ernakulam</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[300px] md:h-auto">
              <img
                alt="BEO Software Park Building"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MLWeOyznAcBeRdldBJyt8WUqdmL7-pXDzoqQyslo1Vc6VYj4q6qzDWV2TMz3VyKZcJio-04PE2yFPpwR4iOPamP1CBnWGsfsHLqbdRJjgKUUgb0lvTNzxUsWBPQ-DY27MO6EvjFd50PNaRNaJ4sP37ndiUw8Zf7RiHtflVTGmNcFnJ1_ieJED8nJNvaYX4ARWPnIl-rVpI8LImtgHZII9EJwfPXdM5PsodZGeIBccG690EhrY2IQwyR2kJ81iRcZP2Eeitb1nro"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-white mb-2 text-2xl font-bold">BEO Software Park</h3>
                <p className="text-secondary font-label-md uppercase tracking-widest">Kakkanad, Ernakulam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Seamless Process */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mb-16">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-4">Workflow</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 font-bold">Our Seamless Process</h2>
            <div className="w-16 h-0.5 bg-secondary mb-4"></div>
            <p className="font-body-md text-on-surface-variant">
              We've refined our construction workflow over two decades to ensure maximum transparency and zero friction
              for our clients.
            </p>
          </div>
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-outline-variant/50 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  01
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Consultation
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Understanding your vision, requirements, and budget through deep architectural dialogue.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  02
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Design &amp; Planning
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Creating detailed blueprints, 3D visualizations, and obtaining all necessary statutory approvals.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  03
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Construction
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Groundbreaking and rigorous execution of structure and masonry under expert supervision.
                </p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center font-display-lg text-[20px] mb-8 ring-8 ring-surface-container-low font-bold">
                  04
                </div>
                <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-4 font-bold">
                  Handover
                </h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Final quality audits, interior finishing, and the ceremonial delivery of your landmark property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-secondary p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl">
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
          </div>
        </div>
      </section>
    </main>
  );
}
