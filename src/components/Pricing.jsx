import { useEffect, useRef } from "react";

const prices = [
  {tag:"STARTER", type:"BASIC SOLAR", sub:"Starting price · varies by specs", price:"₦650K+", info:['500W itel power tank', '600W solar panel', 'With all accessories', 'Full wiring & installation', '1-month support'], package:"Basic Solar Package"},
  {tag:"BEST VALUE", type:"HOME SOLAR", sub:"Starting price · varies by specs", price:"₦1.2M+", info:['1.5KVA inverter system', '2–4 solar panels (200–450W)', '2.5KWh lithium battery', 'Full wiring & installation', '2-month support'], package:"Home Solar Package"},
  {tag:"POPULAR", type:"STANDARD SOLAR", sub:"Starting price · varies by specs", price:"₦2.2M+", info:['4.2KVA inverter system', '6pcs 450W mono panels', '2.5KWh lithium battery', 'Full wiring & installation', '3-month support'], package:"Standard Solar Package"},
  {tag:"PREMIUM", type:"INDUSTRIAL SOLAR", sub:"Starting price · varies by specs", price:"₦5M+", info:['11KVA inverter system', '16KWh lithium battery bank', 'Full panel array included', 'Full wiring & installation', '6-month support'], package:"Industrial Solar Package"},
  {tag:"HVAC", type:"AC INSTALLATION", price:"₦150K+", sub:"Per unit · labour only", info:['Split unit installation', 'Piping & electrical connection', 'Testing & commissioning', 'AC servicing & repairs', 'Industrial AC available'], package:"AC Installation Package"},
  {tag:"ELECTRICAL", type:"WIRING & INSTALLATION", price:"₦100K+", sub:"Starting price · per job", info:['House & apartment wiring', 'Industrial wiring on termination', 'Fault finding & repair', 'Power installation', 'Safety inspection'], package:"Wiring & Installation Package"},
  {tag:"CUSTOM", type:"CUSTOM PROJECT", price:"CONTACT US", sub:"We'll build a package for you", info:['Industrial-scale solar farms', 'Estate solar street lighting', 'Full building electrical setup', 'Solar upgrade & migration', 'Multi-site projects'], package:"Custom Project"},
];

const handleWhatsapp = (packageName, price) => {
  const text = [
    `Hello Dadotech! I'm interested in the *${packageName}*.`,
    ``,
    `*Package:* ${packageName}`,
    `*Starting Price:* ${price}`,
    ``,
    `Please send me a detailed quote. Thank you!`,
  ].join("\n");
  window.open(`https://wa.me/2349023744204?text=${encodeURIComponent(text)}`, "_blank");
};

const CardBase = ({ p, featured, dark, cardRef, delay }) => {
  const bg = featured ? "bg-green" : dark ? "bg-[#0a0f06]" : "bg-white border border-gray-200";
  const titleColor = featured || dark ? "text-white" : "";
  const priceColor = featured ? "lemon" : dark ? "text-white font-bebas" : "green";
  const subColor = featured ? "text-gray-100" : dark ? "text-[rgba(255,255,255,0.6)]" : "gray";
  const itemColor = featured || dark ? "text-white" : "gray";
  const btnClass = featured || dark
    ? "bg-lemon text-dark"
    : "bg-green text-white";

  return (
    <div
      ref={cardRef}
      className={`card-anim ${bg} px-6 py-9`}
      style={{ transitionDelay: delay }}
    >
      <p className="w-fit bg-lemon font-inter py-0.5 px-3 text-[0.7rem] tracking-wider text-black font-semibold">
        {p.tag}
      </p>
      <h3 className={`font-bebas text-[1.5rem] font-semibold tracking-wide mt-3 ${titleColor}`}>
        {p.type}
      </h3>
      <h1 className={`text-[2rem] font-grotesque font-semibold ${priceColor}`}>
        {p.price}
      </h1>
      <p className={`font-inter text-[0.7rem] mt-1 ${subColor}`}>{p.sub}</p>
      <ul className="flex flex-col gap-2 mt-4">
        {p.info.map((i) => (
          <li key={i} className={`flex gap-2 text-sm font-inter ${itemColor}`}>
            <span className="text-lemon font-bold mt-[1px]">✓</span> {i}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleWhatsapp(p.package, p.price)}
        className={`w-full font-grotesque font-semibold text-[0.85rem] tracking-wider py-2.5 px-4 mt-6 hover:opacity-90 transition-opacity ${btnClass}`}
      >
        GET QUOTE ON WHATSAPP
      </button>
    </div>
  );
};

export default function Pricing() {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

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
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-off py-16 px-4 md:px-10 lg:px-16 max-w-screen overflow-x-hidden">
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.animate-in { opacity: 1; transform: translateY(0); }
        .card-anim {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .card-anim.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* heading */}
      <div ref={headingRef} className="fade-up md:w-[75%] lg:w-[40%]">
        <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">SERVICE PACKAGE</p>
        <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 font-bold dark tracking-wide">OUR PRICING</h1>
        <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
        <p className="font-inter gray mt-5 text-[0.9rem]">Transparent pricing for every budget. All packages include installation, testing, and after-service support. Contact us for custom quotes.</p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {prices.map((p, i) => (
          <CardBase
            key={p.type}
            p={p}
            featured={i === 2}
            dark={i === 6}
            cardRef={(el) => (cardRefs.current[i] = el)}
            delay={`${i * 0.08}s`}
          />
        ))}
      </div>

      <p className="gray text-[0.83rem] font-inter flex justify-center mt-10 text-center">
        * All prices are starting prices and may vary based on site conditions, distance, and equipment specifications. Contact us for an accurate quote.
      </p>
    </div>
  );
}