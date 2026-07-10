"use client";

import { useState } from "react";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/FadeIn";

interface ProjectItem {
  alt: string;
  src: string;
  title: string;
  location: string;
  architect: string;
  construction: string;
}

interface OngoingProject {
  slNo: string;
  name: string;
  client: string;
  architect: string;
  value: string;
}

interface CompletedProject {
  slNo: string;
  name: string;
  client: string;
  architect: string;
  valueYear: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos" | "clients">("pictures");
  const [searchQuery, setSearchQuery] = useState("");
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const projectsList: ProjectItem[] = [
    {
      alt: "Residential Villa Panampilly Nagar",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449309/Residential-villa-construction-Panampilly-Nagar-Ernakulam_ukhgew.webp",
      title: "Residential Villa Panampilly Nagar",
      location: "Panampilly Nagar",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "BEO Software Park Kakkanad",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449301/BEO-Software-park-Building-Kakkanad-Ernakulam_etooyy.webp",
      title: "BEO Software Park",
      location: "Kakkanadu",
      architect: "M/s. Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Good People Vismaya Kaloor",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449304/Good-people-Vismaya-Kaloor-Kochi_wbhksj.webp",
      title: "Good People Vismaya",
      location: "Kaloor",
      architect: "M/s Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Residential Building of Mr. Cherian Varghese",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449307/Residential_Building_of_Mr._Cherian_Varghese_Kadavanthra_Kallupaalam_tjh9o6.webp",
      title: "Residential Building of Mr. Cherian Varghese",
      location: "Kadavanthra Kallupaalam",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "Apartment Building Elamakkara",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449291/Apartment-Building-Construction-Elamakkara-Kochi_k8kqpm.webp",
      title: "Apartment Building Elamakkara",
      location: "Elamakkara",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "Edacheril Commercial Building",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449303/Edacheril-Commercial-Building-COnstruction-Edapally_rj9v9w.webp",
      title: "Edacheril Commercial Building",
      location: "Edapally",
      architect: "M/s Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Residential Building Edathala",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449308/Residential-building-construction-Edathala-Kakkanad-Ernakulam_l4tmhd.webp",
      title: "Residential Building Edathala",
      location: "Edathala",
      architect: "M/s Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Anasvara Souparnika Elamakkara",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449291/Anasvara-Souparnika-Anaswvara-Builders-Elamakkara-Kochi_x065pm.webp",
      title: "Anasvara Souparnika Elamakkara",
      location: "Maradu",
      architect: "M/s Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Commercial Building Palarivattom",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449302/Commercial-building-construction-palarivattom-Ernakulam_oimpzm.webp",
      title: "Commercial Building Palarivattom",
      location: "Palarivattom",
      architect: "M/s Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Parekkattu Plaza Ernakulam",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449306/Parekkattu-plaza-Karikkamuri-Elamkulam-Ernakulam_wc2foz.webp",
      title: "Parekkattu Plaza",
      location: "Elamkulam",
      architect: "Ar.Jayanand Kilikar",
      construction: "Starline Constructions"
    },
    {
      alt: "Baba Tourist Home",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449294/Ar._Jibu_Thomas._Residential_for_Mr._Jai_lal_gmkasu.webp",
      title: "Baba Tourist Home at Trivandrum",
      location: "Trivandrum",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "Securus Commercial Building",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449299/Ar.Avishkar_Commercial_Building_at_Panampilly_Nagar_for_Securus_p9pwlj.webp",
      title: "Securus Commercial Building",
      location: "Panampilly Nagar",
      architect: "Arch. Avishkar",
      construction: "Starline Constructions"
    },
    {
      alt: "Residential for Mr.Suresh",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449299/Ar._Silpi._Residential_for_Mr.Suresh_dxp3tb.webp",
      title: "Residential for Mr.Suresh",
      location: "Karimughal, Ernakulam",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "Residential for Mr. Jobilal",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449295/Ar._Jibu_Thomas._Residential_for_Mr._Jobilal_d6jh68.webp",
      title: "Residential for Mr. Jobilal",
      location: "Nellimattom",
      architect: "Jibu & Thomas",
      construction: "Starline Constructions"
    },
    {
      alt: "Residential for Mr. Aslam",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449298/Ar._Silpi._Residential_for_Mr._Aslam_jmaiav.webp",
      title: "Residential for Mr. Aslam",
      location: "Kochi",
      architect: "Silpi Architects",
      construction: "Starline Constructions"
    },
    {
      alt: "Kumar group Total Designers",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449292/Ar._Anuj_Gopakumar_Kumar_group_Total_Designers_jvg2ok.webp",
      title: "Kumar Group Total Designers",
      location: "Kochi",
      architect: "Anuj Gopakumar",
      construction: "Starline Constructions"
    },
    {
      alt: "Apartment Complex",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449290/Anasvara_Apartments_at_Maradu_iwpbuz.webp",
      title: "Anasvara Apartments",
      location: "Maradu",
      architect: "Ar. Arjun",
      construction: "Starline Constructions"
    },
    {
      alt: "Sparkle Scapes",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449300/Ar.Jibu_Thomas_Sparkle_Homes_Perandoor_ogyhll.webp",
      title: "Sparkle Scapes",
      location: "Perandoor",
      architect: "Ar.Jibu",
      construction: "Starline Constructions"
    },
    {
      alt: "Modern Villa Design",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449295/Ar._Mathew_Saira_Residential_Bldng_of_Ar._Mathew_Saira_kya33w.webp",
      title: "Residence of Mr.Satheesh & Smitha",
      location: "Kochi",
      architect: "Ar. Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Classic Villa",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449297/Ar._Mathew_Saira_Residential_Bldng_of_Mrs_Gleena_Arun_bdnba4.webp",
      title: "Residence of Mrs. Gleena Arun",
      location: "Kochi",
      architect: "Ar. Mathew & Saira",
      construction: "Starline Constructions"
    },
    {
      alt: "Modern Estate",
      src: "https://res.cloudinary.com/sorumlx6/image/upload/v1783449293/Ar._Jibu_Thomas_Residencial_bldng_of_Mr._Thomas_Cherian_rty4r2.webp",
      title: "Residence of Mr. Thomas Cherian",
      location: "Kochi",
      architect: "Ar. Jibu & Thomas",
      construction: "Starline Constructions"
    },
  ];

  const videosList = [
    {
      id: 1,
      title: "Ongoing Apartment – Kakkanad, Vazhakala",
      subtitle: "Site Progress Video",
      src: "https://res.cloudinary.com/sorumlx6/video/upload/v1783698818/Kakkanad_vazhakala_ongoing_apartment_1_b3fhgz.webm",
      thumbnail: "https://res.cloudinary.com/sorumlx6/video/upload/so_0/v1783698818/Kakkanad_vazhakala_ongoing_apartment_1_b3fhgz.jpg",
    },
    {
      id: 2,
      title: "Ongoing Site – Kadavanthra",
      subtitle: "Site Progress Video",
      src: "https://res.cloudinary.com/sorumlx6/video/upload/v1783698816/kadavantra_ongoing_site_fkhqer.webm",
      thumbnail: "https://res.cloudinary.com/sorumlx6/video/upload/so_0/v1783698816/kadavantra_ongoing_site_fkhqer.jpg",
    },
  ];

  const ongoingProjects: OngoingProject[] = [
    { slNo: "1.", name: "Apartment work at Vazhakala", client: "Mr. Rohit R", architect: "Er Jayanthi", value: "1.50cr" },
    { slNo: "2.", name: "Apartment Work at Kadavanthra", client: "Mr. George Panicker", architect: "Ar Rajesh", value: "1.70cr" },
    { slNo: "3.", name: "Baba Tourist Home at Trivandrum", client: "Mr. Jai Lal", architect: "Jibu & Thomas", value: "55Lakhs" },
    { slNo: "4.", name: "Residential renovation work at Thrissur", client: "Mr. Jose Alukkas", architect: "Jibu & Thomas", value: "25Lakhs" }
  ];

  const completedProjects: CompletedProject[] = [
    { slNo: "1.", name: "Apartment Building, Good People Vismaya, Kaloor, Ernakulam", client: "Indian Overseas Bank", architect: "M/s Mathew & Saira", valueYear: "2.5Cr / 2014" },
    { slNo: "2.", name: "Anasvara Souparnika, Palarivattom, Ernakulam", client: "Mr. Arun Vijayakumar", architect: "M/s Mathew & Saira", valueYear: "3.1Cr / 2018" },
    { slNo: "3.", name: "Commercial Building, Palarivattom, Ernakulam", client: "Mr. Jossy Joseph (Central Excise)", architect: "M/s Mathew & Saira", valueYear: "65Lakhs / 2018" },
    { slNo: "4.", name: "Edacheril Building, Koonamthai, Edappally", client: "Mr. Mathew Edacheril", architect: "M/s Mathew & Saira", valueYear: "68Lakhs / 2019" },
    { slNo: "5.", name: "Sparkle Scapes, Elamakkara, Ernakulam", client: "Mr. Varghese Nettikadan", architect: "Jibu & Thomas Architects", valueYear: "5.5Cr / 2018" },
    { slNo: "6.", name: "Kerala Film Chamber of Commerce (Renovation), M.G. Road, Ernakulam", client: "Film Chamber", architect: "Jibu & Thomas Architects", valueYear: "20Lakhs / 2019" },
    { slNo: "7.", name: "Parekkattu Building, Karikkamuri, Ernakulam", client: "Mr. Stanley Joseph", architect: "Ar. Jayanand Kilikar", valueYear: "1.65Cr / 2013" },
    { slNo: "8.", name: "Commercial Building (Vertical Extension), Pulleppady, Ernakulam", client: "Dr. Majeed", architect: "Ar. Jayanand Kilikar", valueYear: "1.25Cr / 2013" },
    { slNo: "9.", name: "Commercial Building, Panampilly Nagar, Ernakulam", client: "Mrs. Flory Jolly", architect: "Ar. Jayanand Kilikar", valueYear: "1.35Cr / 2012" },
    { slNo: "10.", name: "Commercial Building, Palarivattom, Ernakulam", client: "Mr. Anil Raun", architect: "Ar. Jayanand Kilikar", valueYear: "2Cr / 2009" },
    { slNo: "11.", name: "Apartment Building, Palarivattom, Ernakulam", client: "Mr. K.C. Mani", architect: "Alpha Engineers, Palarivattom", valueYear: "80Lakhs / 2010" },
    { slNo: "12.", name: "Commercial Building, Ravipuram, Ernakulam", client: "Mr. Bobby Peter", architect: "Ar. Jayanand Kilikar", valueYear: "68Lakhs / 2011" },
    { slNo: "13.", name: "Commercial Building, Vyttila, Ernakulam", client: "Mr. K.G. Kammath", architect: "Ar. Jayanand Kilikar", valueYear: "1.15Cr / 2012" },
    { slNo: "14.", name: "Commercial Building, Karimugal, Ernakulam", client: "Mr. Suresh Kumar", architect: "-", valueYear: "18Lakhs / 2016" },
    { slNo: "15.", name: "Park for Uncle John Ice Cream, Vyttila, Ernakulam", client: "M/s Laza Ice Cream", architect: "Ar. Anzar Fayaz", valueYear: "60Lakhs / 2012" },
    { slNo: "16.", name: "Villas for Heera VasthuGramam, Kakkanad", client: "Heera Constructions", architect: "-", valueYear: "55Lakhs / 2006" },
    { slNo: "17.", name: "Villas for Imperial Gardens, Tripunithura, Ernakulam", client: "M/s Meridian Homes", architect: "Ar. P.K.R. Menon", valueYear: "1.35Cr / 2007" },
    { slNo: "18.", name: "Villas at Leisure Gardens, Kakkanad, Ernakulam", client: "Mather Projects", architect: "-", valueYear: "1.25Cr / 2006" },
    { slNo: "19.", name: "Residential Building, Kadavanthra, Ernakulam", client: "Mr. George Panikkar (Central Excise)", architect: "Ar. M/s Foliage", valueYear: "90Lakhs / 2018" },
    { slNo: "20.", name: "Residential Building, Edathala, Ernakulam", client: "Mr. Satheesh", architect: "M/s Mathew & Saira", valueYear: "40Lakhs / 2019" },
    { slNo: "21.", name: "Residential Building, Kadavanthra, Ernakulam", client: "Mr. Sreekanth Bhatt", architect: "Ar. Jayanand Kilikar", valueYear: "35Lakhs / 2015" },
    { slNo: "22.", name: "Residential Building (Renovation), Panampilly Nagar, Ernakulam", client: "Mr. Joseph John", architect: "Alpha Engineers, Palarivattom", valueYear: "40Lakhs / 2020" },
    { slNo: "23.", name: "Commercial Building, Mamangalam", client: "Mr. Rajagopal", architect: "Concerns Architects", valueYear: "80Lakhs / 2021" },
    { slNo: "24.", name: "Residential Building, Kadavanthra, Ernakulam", client: "Mr. Cherian Varghese", architect: "M/s Mathew & Saira", valueYear: "1.10Cr / 2021" },
    { slNo: "25.", name: "Residential Building, Edachira, Kakkanad", client: "Mr. M.C. Raju (Central Excise)", architect: "M/s Mathew & Saira", valueYear: "68Lakhs / 2021" },
    { slNo: "26.", name: "Residential Building, Aluva, Kochi", client: "Mrs. Gleena Arun", architect: "M/s Mathew & Saira", valueYear: "80Lakhs / 2022" },
    { slNo: "27.", name: "BEO Software Commercial Building, InfoPark, Kakkanad, Ernakulam", client: "BEO Software", architect: "M/s Mathew & Saira", valueYear: "7Cr / 2022" },
    { slNo: "28.", name: "Residential Building, Puthuppally, Kottayam", client: "Mr. Thomas Cherian", architect: "Jibu & Thomas", valueYear: "2.50Cr (12000Sqft) / 2023" },
    { slNo: "29.", name: "Commercial Building, Vyttila, Kochi", client: "Mr. Binny T. Rajan", architect: "Jibu & Thomas", valueYear: "1.30Cr / 2023" },
    { slNo: "30.", name: "Residential Building, Padamugal, Kakkanad", client: "Mr. Sudeep Kumar", architect: "Total Designers", valueYear: "60Lakhs / 2023" },
    { slNo: "31.", name: "Residential Building, Unichira, Edappally", client: "Mr. Sarji", architect: "Total Designers", valueYear: "1.15Cr / 2024" },
    { slNo: "32.", name: "Residential Building, Kalamassery", client: "Mr. Abbas", architect: "Silpi Architects", valueYear: "80Lakhs / 2024" },
    { slNo: "33.", name: "Residential Building (2 Nos), Ravipuram, Kochi", client: "Mr. Rajagopal & Mrs. Usha", architect: "Inspiration", valueYear: "85Lakhs / 2024" },
    { slNo: "34.", name: "Securus Commercial Building, Panampilly Nagar", client: "Securus Insurance Company", architect: "Avishkar", valueYear: "2024" },
    { slNo: "35.", name: "Apartment at Maradu", client: "Anasvara Properties", architect: "Ar. Arjun", valueYear: "3Cr / 2025" },
    { slNo: "36.", name: "Residential Building, Palarivattom", client: "Mr. Suresh", architect: "Silpi Architects", valueYear: "1.70Cr / 2025" },
    { slNo: "37.", name: "Residential Work, Kaipamangalam, Thrissur", client: "Mr. Sudarshan", architect: "Jibu & Thomas", valueYear: "75Lakhs / 2026" },
    { slNo: "38.", name: "Residential Building Renovation, Nellimattom", client: "Mr. Jobilal", architect: "Jibu & Thomas", valueYear: "1.00Cr / 2026" },
    { slNo: "39.", name: "Residential Building, Kalamassery", client: "Mr. Aslam Muhammed", architect: "Silpi Architects", valueYear: "1.00Cr" }
  ];

  const filteredOngoing = ongoingProjects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.architect.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompleted = completedProjects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.architect.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
        <FadeIn className="relative z-10 text-center px-margin-mobile md:px-0">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] block mb-4 font-bold">
            Portfolio
          </span>
          <h1 className="font-display-lg text-[32px] md:text-5xl lg:text-[64px] text-on-surface mb-6 font-bold leading-tight">
            Our Legacy in Structures
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </FadeIn>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-12 mb-12">
        <div className="flex justify-center border-b border-outline-variant/30">
          <nav className="flex gap-12 -mb-px">
            <button
              onClick={() => setActiveTab("pictures")}
              className={`py-4 font-label-md text-sm uppercase tracking-widest transition-all duration-300 border-b-2 cursor-pointer ${activeTab === "pictures"
                ? "border-secondary text-secondary font-bold"
                : "border-transparent text-on-surface-variant hover:text-secondary"
                }`}
            >
              Pictures
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`py-4 font-label-md text-sm uppercase tracking-widest transition-all duration-300 border-b-2 cursor-pointer ${activeTab === "videos"
                ? "border-secondary text-secondary font-bold"
                : "border-transparent text-on-surface-variant hover:text-secondary"
                }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`py-4 font-label-md text-sm uppercase tracking-widest transition-all duration-300 border-b-2 cursor-pointer ${activeTab === "clients"
                ? "border-secondary text-secondary font-bold"
                : "border-transparent text-on-surface-variant hover:text-secondary"
                }`}
            >
              Clients
            </button>
          </nav>
        </div>
      </section>

      {/* Tab Contents */}
      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {activeTab === "pictures" && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
              <FadeInChild
                key={index}
                direction="up"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface-container transition-transform duration-300 cursor-pointer"
                onClick={() => setTappedIndex(tappedIndex === index ? null : index)}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-primary/90 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm group-hover:opacity-100 ${
                  tappedIndex === index ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="space-y-4 w-full max-w-[240px]">
                    <h3 className="text-white font-display-lg text-lg leading-tight font-bold">
                      {project.title}
                    </h3>
                    <div className="h-px bg-secondary/30 w-12 mx-auto"></div>
                    <div className="grid grid-cols-1 gap-3 text-white/90 text-xs font-body-md uppercase tracking-wide">
                      <div className="flex flex-col">
                        <span className="text-secondary font-bold text-[9px] mb-0.5">Location</span>
                        <span className="text-white">{project.location}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-secondary font-bold text-[9px] mb-0.5">Architect</span>
                        <span className="text-white">{project.architect}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-secondary font-bold text-[9px] mb-0.5">Construction</span>
                        <span className="text-white">{project.construction}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInChild>
            ))}
          </StaggerChildren>
        )}

        {activeTab === "videos" && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosList.map((video) => (
              <FadeInChild
                key={video.id}
                direction="up"
                className="relative group cursor-pointer aspect-video bg-on-background rounded-xl overflow-hidden shadow-xl border border-outline-variant/10"
                onClick={() => setActiveVideoId(video.id)}
              >
                {/* Cloudinary auto-thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center text-on-secondary shadow-xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                {/* Title bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-secondary font-label-md text-[10px] uppercase tracking-widest mb-1">
                    {video.subtitle}
                  </p>
                  <h4 className="text-white font-body-lg font-bold text-sm">
                    {video.title}
                  </h4>
                </div>
              </FadeInChild>
            ))}
          </StaggerChildren>
        )}

        {activeTab === "clients" && (
          <FadeIn direction="up" className="space-y-16">
            {/* Search Registry */}
            <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex-col md:flex-row gap-4">
              <h2 className="font-headline-md text-2xl text-on-surface font-semibold">Project Registry</h2>
              <div className="relative w-full md:w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by client or project..."
                  className="pl-10 pr-4 py-2 bg-surface rounded-full border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none text-sm w-full transition-all"
                />
              </div>
            </div>

            {/* Ongoing Projects */}
            <div className="space-y-6">
              <h2 className="font-headline-md text-2xl text-on-surface border-b border-secondary/20 pb-4 font-bold">
                Ongoing Projects
              </h2>
              <div className="overflow-x-auto bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low text-secondary font-label-md text-xs uppercase tracking-widest">
                    <tr className="border-b border-outline-variant/30">
                      <th className="px-6 py-4">Sl. No</th>
                      <th className="px-6 py-4">Name of Project</th>
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Architect</th>
                      <th className="px-6 py-4">Contract Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10 font-body-md text-sm text-on-surface-variant">
                    {filteredOngoing.length > 0 ? (
                      filteredOngoing.map((project, idx) => (
                        <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                          <td className="px-6 py-4">{project.slNo}</td>
                          <td className="px-6 py-4 font-bold text-secondary">{project.name}</td>
                          <td className="px-6 py-4">{project.client}</td>
                          <td className="px-6 py-4">{project.architect}</td>
                          <td className="px-6 py-4">{project.value}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="space-y-6">
              <h2 className="font-headline-md text-2xl text-on-surface border-b border-secondary/20 pb-4 font-bold">
                Completed Projects
              </h2>
              <div className="overflow-x-auto bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low text-secondary font-label-md text-xs uppercase tracking-widest">
                    <tr className="border-b border-outline-variant/30">
                      <th className="px-6 py-4">Sl. No</th>
                      <th className="px-6 py-4">Name of Project</th>
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Architect</th>
                      <th className="px-6 py-4">Value / Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10 font-body-md text-sm text-on-surface-variant">
                    {filteredCompleted.length > 0 ? (
                      filteredCompleted.map((project, idx) => (
                        <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                          <td className="px-6 py-4">{project.slNo}</td>
                          <td className="px-6 py-4 font-bold text-secondary">{project.name}</td>
                          <td className="px-6 py-4">{project.client}</td>
                          <td className="px-6 py-4">{project.architect}</td>
                          <td className="px-6 py-4">{project.valueYear}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}
      </section>

      {/* ── Video Lightbox Modal ── */}
      {activeVideoId !== null && (() => {
        const vid = videosList.find((v) => v.id === activeVideoId)!;
        return (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={vid.title}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveVideoId(null)}
            />

            {/* Modal card — fixed max-w so the box never changes size */}
            <div className="relative z-10 w-full max-w-4xl bg-on-background rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-secondary font-label-md text-[10px] uppercase tracking-widest mb-0.5">
                    {vid.subtitle}
                  </p>
                  <h3 className="text-white font-body-lg font-bold text-base">
                    {vid.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoId(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close video"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Fixed 16:9 video box — portrait vids letterbox, landscape vids fill */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  key={vid.id}
                  src={vid.src}
                  poster={vid.thumbnail}
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}
