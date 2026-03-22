import { RiAwardFill, RiExternalLinkLine } from "@remixicon/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    id: 1,
    title: "Online Course Certification (LPU)",
    detail: "Completed an intensive online course demonstrating technical proficiency and continuous learning.",
    file: "/Certificate/12303457_848_20_08_2025 (1).pdf",
    type: "pdf"
  },
  {
    id: 2,
    title: "Cloud Computing",
    detail: "NPTEL Certification for comprehensive study and practical understanding of Cloud Computing infrastructures.",
    file: "/Certificate/Cloud Computing NPTEL.pdf",
    type: "pdf"
  },
  {
    id: 3,
    title: "SEBI Certification",
    detail: "Certification of participation in financial regulations and investment awareness program.",
    file: "/Certificate/SEBI Certificate.pdf",
    type: "pdf"
  },
  {
    id: 4,
    title: "GEN AI NASSCOM",
    detail: "Earned for passing rigorous technical assessments and demonstrating strong problem-solving skills.",
    file: "/Certificate/certificate-CERT-1771500708169.png",
    type: "image"
  },
  {
    id: 5,
    title: "Deloitte Tech Consulting Internship",
    detail: "Completed a virtual internship displaying skills in tech consulting, client communication, and system design.",
    file: "/Certificate/deloitte.pdf",
    type: "pdf"
  },
  {
    id: 6,
    title: "Oracle",
    detail: "Oracle Cloud Infrastructure Data Science certification covering OCI services, machine learning models, data pipelines, and model deployment on Oracle Cloud Platform.",
    file: "/Certificate/eCertificate.pdf",
    type: "pdf"
  }
];

const Certificates = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      ".cert-title-item",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
      }
    );

    tl.fromTo(
      ".cert-card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.6"
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-24 bg-[#0f0f0f] relative overflow-hidden"
      aria-label="Certificates"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col gap-4">
          <div className="overflow-hidden">
            <span className="cert-title-item inline-block text-[#c9ff00] text-sm font-bold tracking-[0.3em] uppercase">
              Achievements
            </span>
          </div>
          <div className="overflow-hidden">
            <h2 className="cert-title-item inline-block text-[clamp(40px,6vw,80px)] font-black text-white leading-none tracking-tight">
              Certificates
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="cert-card group relative flex flex-col bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-black/50 border border-neutral-700 flex items-center justify-center mb-8 shrink-0">
                <RiAwardFill className="w-8 h-8 text-[#c9ff00]" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 pr-4 leading-snug">
                {cert.title}
              </h3>

              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                {cert.detail}
              </p>

              <div className="mt-auto pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">
                  {cert.type === "pdf" ? "PDF Document" : "Image"}
                </span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#c9ff00] hover:scale-110 transition-all duration-300"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <RiExternalLinkLine className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
