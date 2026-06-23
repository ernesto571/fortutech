import { useEffect, useRef } from "react";

const partners = [
  { url: "https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227838/sunmate-removebg-preview_o0uqmo.png" },
  { url: "https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227757/deye-removebg-preview_nelzk6.png" },
  { url: "https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227699/nexus-removebg-preview_yafhpm.png" },
  { url: "https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227666/beve-removebg-preview_j32mnb.png" },
  { url: "https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227893/itel-removebg-preview_stz6cf.png" },
];

export default function Partners() {
  const headingRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    logoRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white py-16 px-6 flex flex-col justify-center text-center max-w-screen overflow-x-hidden">
      <style>{`
        .fade-up { opacity:0; transform:translateY(24px); transition:opacity 0.6s ease,transform 0.6s ease; }
        .fade-up.animate-in { opacity:1; transform:translateY(0); }
        .logo-pop { opacity:0; transform:scale(0.85); transition:opacity 0.5s ease,transform 0.5s ease; }
        .logo-pop.animate-in { opacity:1; transform:scale(1); }
      `}</style>

      {/* heading */}
      <div ref={headingRef} className="fade-up flex flex-col justify-center items-center">
        <p className="purple font-inter tracking-widest text-xs font-semibold uppercase">Official Distributor Partner</p>
        <h1 className="font-bebas purple text-[2.2rem] lg:text-[3rem] mt-1 font-bold uppercase tracking-wide">Our Brand Partners</h1>
        <div className="w-[70px] h-[3px] bg-amber mt-1"></div>
        <p className="font-inter gray-2 mt-5 text-[0.9rem]">Authorized dealer of leading Chinese & Indian solar brands.</p>
      </div>

      {/* logos */}
      <div className="flex flex-wrap gap-6 md:gap-10 mt-8 justify-center items-center">
        {partners.map((p, i) => (
          <div
            key={p.url}
            ref={(el) => (logoRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
            className="logo-pop px-6 py-3 bg-off border border-gray-200 hover:border-amber/40 hover:shadow-md transition-all duration-300"
          >
            <img src={p.url} className="w-[70px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}