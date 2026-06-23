import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const btn = "py-3 font-grotesque px-7 font-semibold text-sm lg:text-[0.9rem]";
const subs = [
  { label:"5+", sub:"BRAND PARTNERS" },
  { label:"RC",  sub:"REGISTERED" },
  { label:"100%",  sub:"GENUINE PRODUCTS" },
  { label:"24/7", sub:"WA SUPPORT" },
];

export default function HeroSection() {
  useGSAP(() => {
    const heroSplit     = new SplitText("#hero-title",    { type: "chars" });
    const subtitleSplit = new SplitText("#hero-subtitle", { type: "lines" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // eyebrow badge
    tl.from("#hero-eyebrow", {
      opacity: 0, y: -16, duration: 0.5,
    })
    // headline chars
    .from(heroSplit.chars, {
      opacity: 0, y: 24, duration: 0.5,
      ease: "back.out(1.4)", stagger: 0.018,
    }, "-=0.1")
    // subtitle lines
    .from(subtitleSplit.lines, {
      opacity: 0, y: 14, duration: 0.5, stagger: 0.1,
    }, "-=0.25")
    // buttons
    .from("#hero-btns a", {
      opacity: 0, y: 16, duration: 0.45, stagger: 0.12,
    }, "-=0.2")
    // stats
    .from("#hero-stats > div", {
      opacity: 0, y: 12, duration: 0.4, stagger: 0.1,
    }, "-=0.2")
    // right image
    .from("#hero-img", {
      opacity: 0, x: 40, duration: 0.7, ease: "power2.out",
    }, "-=0.6")
    // floating badges
    .from(".hero-badge", {
      opacity: 0, scale: 0.85, duration: 0.4,
      ease: "back.out(1.6)", stagger: 0.15,
    }, "-=0.3");
  });

  return (
    <div className="h-screen max-w-screen relative">
      <img
        src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
        alt="hero-bg"
        className="relative h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="absolute w-[90%]  lg:w-[85%] mx-auto gap-3 grid items-center inset-0">
        <section className="mt-3 md:mt-0">
          {/* eyebrow */}
          <span
            id="hero-eyebrow"
            className="inline-flex items-center gap-3 font-grotesque font-bold amber tracking-wider text-xs md:text-sm px-5 py-2 bg-[rgba(245,166,35,0.14)] border border-[rgba(245,166,35,0.4)] "
          >
            <div className="bg-[#f5a623] animate-pulse w-[7px] h-[7px] rounded-full" />
            <p>RC REG. · CRN 9200781 · OFFICIAL DISTRIBUTOR · OSOGBO, OSUN STATE</p>
          </span>

          {/* title */}
          <div
            id="hero-title"
            className="text-white block text-[2.6rem] leading-[3.4rem] md:text-[4rem] md:leading-[4.4rem] lg:text-[5rem] font-semibold lg:leading-[5.4rem] mt-4 font-bebas tracking-wide "
          >
            SMART ENERGY FOR A
            <span className="amber block ">BRIGHTER TOMORROW.</span>
          </div>

          {/* subtitle */}
          <p
            id="hero-subtitle"
            className="font-grotesque text-[0.9rem] leading-7 lg:text-[1.15rem] text-[rgba(255,255,255,0.75)] mt-3 w-full md:w-[85%] lg:w-[50%] font-medium"
          >
            Fortutech Solar Energy — in collaboration with Dadotech Consultant — is your official distributor of premium Chinese & Indian solar products. Inverters, batteries, panels, and full installation, done right.
          </p>

          {/* buttons */}
          <span id="hero-btns" className="grid md:flex text-center gap-4 mt-8">
            <a className={`${btn} bg-amber text-purple`} href="#consult">⚡ GET A FREE QUOTE</a>
            <a className={`${btn} border border-white text-white hover:bg-[rgba(255,255,255,0.1)]`} href="#services">VIEW PRODUCTS</a>
          </span>

          {/* stats */}
          <span id="hero-stats" className="grid grid-cols-3 md:flex gap-3 md:gap-10 mt-10">
            {subs.map((s) => (
              <div key={s.label}>
                <h3 className="font-bebas amber font-bold text-[2rem]">{s.label}</h3>
                <p className="font-grotesque text-xs tracking-wider lg:text-[0.8rem] text-[rgba(255,255,255,0.75)]  ">{s.sub}</p>
              </div>
            ))}
          </span>
        </section>

      </div>
    </div>
  );
}