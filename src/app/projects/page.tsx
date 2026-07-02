"use client";

import { useState } from "react";

interface Project {
  id: string;
  title: string;
  location: string;
  category: "residential" | "commercial";
  image: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");

  const projectsData: Project[] = [
    {
      id: "anaswara",
      title: "Anaswara Souparnika",
      location: "Elamakkara, Kochi",
      category: "residential",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQu5maQzl1-mff5pRxRLNenl6YfjVi7q8Ok8qFQV0Uvfph1Vh8yj6F9XL8X8-dKrPyoCj3bn8NRtvj5KLRg7O5Qxq-WrGHIaVQfDi-bZ1GFcdpIPBcKFlUuubRvF0ee83lPI2kzxhu11MIfU9-lOwCrCdpeWigZOELTohcrQ05XZu6ob3C0_GcsmWMsmrRed89XIvLOatFfmgdW1GESCbvYBPw3bV1I7Fh61T0UaTDK2deOd-orCLRIMm8rUGH1NqfCOA1x58aFVM",
    },
    {
      id: "luxury-villa",
      title: "Luxury Residential Villa",
      location: "Panampilly Nagar, Ernakulam",
      category: "residential",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBI9wfXWIdA-Bx-LTcAPZO0lNGiIRhN13tX0egy8rkahHlXX1wfuVceOqFQR0Sbs6jPkcaHH_QjeV60c2OJeDK6kXU4bm4KHQtXSPyYmQlOkxVVk_84l6qtRy5utGbiFhtQK-lGh39VTys4Z3GnWo5GdkO8CTyo2hYiaF_PTQxjqb__Z5T-qmsBiOSaUVPzUrPL9SNt4VBH684qvVbD_NvkWwPeiDQaXJOwtDKRt_BkneKm-rdjoXVa32G_7gBHQKUPH4wwz4jBrSQ",
    },
    {
      id: "parekkattu",
      title: "Parekkattu Plaza",
      location: "Karikkamuri, Elamkulam",
      category: "commercial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKumx-l-GZGMpcrz6l7jST7kaRyAMlVz6j19bulJM0dItyu6RBH5wnct2gb6yAMSDThjLpsKmYAwTPiibgtvf4MnT7dmSEuBvM03sBkiSQ2-QT5ntae1QqI_Bzl6lu8WTxKcgIPX6EHghhfTwu-t4jBqfW98KvTCF_UIEdr7eV79eENl46k0rSn18XJej8XN0xsP72X8YiBNCC8x08EDJKLpxMD-KOWc8Qx7EIQ0L0o25WPMjAPHdhLhswVNZzMqAV4Tu0rGE6icE",
    },
    {
      id: "beo-software",
      title: "BEO Software Park",
      location: "Kakkanad, Ernakulam",
      category: "commercial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5MLWeOyznAcBeRdldBJyt8WUqdmL7-pXDzoqQyslo1Vc6VYj4q6qzDWV2TMz3VyKZcJio-04PE2yFPpwR4iOPamP1CBnWGsfsHLqbdRJjgKUUgb0lvTNzxUsWBPQ-DY27MO6EvjFd50PNaRNaJ4sP37ndiUw8Zf7RiHtflVTGmNcFnJ1_ieJED8nJNvaYX4ARWPnIl-rVpI8LImtgHZII9EJwfPXdM5PsodZGeIBccG690EhrY2IQwyR2kJ81iRcZP2Eeitb1nro",
    },
    {
      id: "apartment-elamakkara",
      title: "Apartment Building Complex",
      location: "Elamakkara, Kochi",
      category: "residential",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLtMpPUejUDbHq5y6HPitUj43mPq2Uv1lS9AY38J6OE2i7bvIGnaRJaSbkKWNU0XEXha8-6ICAZgdBOB5AbFNVUooa35xapxlVB7gZiJzAbi_M9dGbzl5J_MDlm5WrVl2pcsfkXhlOS7f3SRGD4rtM6yMrF-Cb8R78lSOa68JDodLKGMyXvDz_zk9vtSIu07PQGxbipbkzzX5GNPYgHSCkwKtGrZRGJmdo3P8eVVMEg0_bqsagVGTtAJqVTsAPrOL1NuNebvBmDd",
    },
    {
      id: "edacheril",
      title: "Edacheril Commercial Hub",
      location: "Edapally, Kochi",
      category: "commercial",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLvAce3Q0TaWHDxNSm3bhc6-BEl065NpBpRxnNhCW760lck_sjh7vY2LjGqKyRvqwsgNUZQ8wyVFnqN06edSuu2uvNY-AYgq-YXYlGaIzKD2wUfwMauQYVk5PFu2wHKifqbcQW2RM8Ql2jW5w7Aaa2dhmOPN2sUVZuEBq79-73W7vs8DQ-gfDeKDt1ECDBoafqZghoXqt9HjQALOShOb-s3ysosdDWPPQdgNgyrFshHHppPvLYARawvcUo1wpN7Itqi9VeTLfB3QOg",
    },
    {
      id: "commercial-palarivattom",
      title: "Commercial Palarivattom Office",
      location: "Palarivattom, Ernakulam",
      category: "commercial",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLuXsMbZ_dm_19Ga1jdfCSCTkNogZX5QYEABS-z3KNVh7ZjaHuTwx9fKIb4UsBkz3NfIQ14JaZDPA0yK8UssDSgdcOCZOyN9UNzDYePL2kezAQsM_pE-r7Sy3prx8wie_r6ZKSzUhmic0sQ-1Mfz7dZk7wh8KdsTj4zDa5qiiJGSn2UCry7o8Qt18jhFKGzGBgsUt-MRw1L8Ep6l9ZO-2caT50PJlA9FUFgiy1Lv0NZmBv6FXGgKw_klVrsSH09b2VfzI88hRkMd",
    },
    {
      id: "vismaya-kaloor",
      title: "Good People Vismaya Complex",
      location: "Kaloor, Kochi",
      category: "residential",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLvHXX4ot9ihBfLTzkpiFW4OLlSbNmZYUIzgOMoPBuapRqf8wKeswgBkyTFD3qbmwVtD76mD6PnpW-JLhdJzLT5cpK-ArDa8dKxXtb2dZHUotNzcxl6ZS2mbN3kO8jq-7GwKAIYFtJs0ICTxlqmUnkOenkmgLBMlnV-JEApGCHm-xLV4bVrDUw3C7KT0tkf0uayvXjaA3YUASGlTZHPtPjytVN3fCpC6Nk1053zZ1fEMjhIB70tiJ57fx8a8OWpc2Ke-EKSBo9CFWw",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] block mb-4 font-bold">
            Our Portfolio
          </span>
          <h1 className="font-display-lg text-[32px] md:text-5xl lg:text-[64px] text-on-surface mb-6 font-bold leading-tight">
            Iconic Landmarks Built
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 font-label-md text-xs uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
              filter === "all"
                ? "bg-secondary text-on-secondary font-bold"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("residential")}
            className={`px-6 py-2 font-label-md text-xs uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
              filter === "residential"
                ? "bg-secondary text-on-secondary font-bold"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setFilter("commercial")}
            className={`px-6 py-2 font-label-md text-xs uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
              filter === "commercial"
                ? "bg-secondary text-on-secondary font-bold"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface-container animate-in fade-in zoom-in-95 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-headline-md text-white text-xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-secondary font-label-md text-xs uppercase tracking-widest">
                  {project.location}
                </p>
                <span className="absolute top-4 right-4 bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
