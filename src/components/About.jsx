import { useEffect, useRef } from "react";

const info = [
  { id:"01", title:"CAC Certified & Registered", sub:"Officially incorporated under CAMA 2020. CRN: 9359229. Registered Feb 23, 2026." },
  { id:"02", title:"Experienced Technical Team", sub:"Years of hands-on experience across solar, HVAC, and electrical for residential and industrial clients." },
  { id:"03", title:"Fortutech Solar Collaboration", sub:"Strategic partnership ensuring access to premium solar equipment and industry-standard practices." },
  { id:"04", title:"Fast Response & Reliable", sub:"We show up, we deliver, and we stand behind our work. Available Mon–Sat, 8AM–6PM." },
];

export default function About() {
  const headingRef = useRef(null);
  const itemRefs = useRef([]);
  const imgRef = useRef(null);

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
      { threshold: 0.12 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (imgRef.current) observer.observe(imgRef.current);
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-16 max-w-screen overflow-x-hidden">
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.animate-in { opacity: 1; transform: translateY(0); }
        .card-anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .card-anim.animate-in { opacity: 1; transform: translateY(0); }
        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .slide-right.animate-in { opacity: 1; transform: translateX(0); }
      `}</style>

      {/* heading */}
      <div ref={headingRef} className="fade-up md:w-[75%] lg:w-[40%]">
        <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">WHY CHOOSE US</p>
        <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 font-bold dark tracking-wide">BUILT ON TRUST & EXPERTISE</h1>
        <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
        <p className="font-inter gray mt-5 text-[0.9rem]">Dadotech Consultant Solar-HVAC Company Ltd is a CAC-registered engineering firm serving clients across Osun State and beyond.</p>
      </div>

      {/* content */}
      <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <div className="flex flex-col gap-6">
          {info.map((i, idx) => (
            <span
              key={i.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              className="card-anim flex gap-5 border border-gray-200 hover:border-[rgba(26,107,47,0.3)] px-4 py-5 bg-white hover:bg-[#f6faf0] transition-all duration-300"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <h2 className="lemon font-bebas text-[1.8rem] tracking-wide">{i.id}</h2>
              <div>
                <strong className="font-inter text-gray-900 text-[0.93rem]">{i.title}</strong>
                <p className="font-inter gray text-[0.83rem] mt-1">{i.sub}</p>
              </div>
            </span>
          ))}
        </div>

        <img
          ref={imgRef}
          src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1781292345/Screenshot_2026-06-12_at_20-01-14_CERTIFICATE_-_DADOTECH_CONSULTANT_SOLAR-HVAC_COMPANY_LTD.pdf-removebg-preview_fhdzlg.png"
          alt="Cert"
          className="slide-right w-fit object-cover mx-auto"
        />
      </div>
    </div>
  );
}