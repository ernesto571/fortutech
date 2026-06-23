import { useState, useEffect, useRef } from "react";

const SERVICES = [
  "Solar Panel Installation",
  "Inverters & Batteries",
  "Solar Street Lights",
  "Home & Office Solar System",
  "AC Installation & Repairs",
  "Electrical Installation & Wiring",
  "Fault Troubleshooting",
  "Energy Consultation",
  "Custom Project",
];

const COOLDOWN_SECONDS = 30;

const contacts = [
  { icon: "💬", label: "WhatsApp (Primary)", value: "09023744204" },
  { icon: "📞", label: "Phone Lines", value: "09035482321 · 08133100045" },
  { icon: "📍", label: "Office Address", value: "Office 3, Ero Arike Shopping Complex, Along Ilesha Garage Road, Osogbo, Osun State" },
  { icon: "🕐", label: "Business Hours", value: "Monday – Saturday · 8:00AM – 6:00PM" },
];

export default function Consult() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", location: "", message: "" });
  const [cooldown, setCooldown] = useState(0);

  const headingRef  = useRef(null);
  const leftRef     = useRef(null);
  const formRef     = useRef(null);
  const contactRefs = useRef([]);

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
    if (leftRef.current)    observer.observe(leftRef.current);
    if (formRef.current)    observer.observe(formRef.current);
    contactRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (cooldown > 0) return;
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      alert("Please fill in your name, phone number, and select a service.");
      return;
    }
    const text = [
      "Hello Dadotech! I'd like to book a consultation.", "",
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service:* ${formData.service}`,
      formData.location ? `*Location:* ${formData.location}` : "",
      formData.message  ? `*Message:* ${formData.message}`  : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/2349023744204?text=${encodeURIComponent(text)}`, "_blank");
    setCooldown(COOLDOWN_SECONDS);
  };

  return (
    <section id="consult" className="relative overflow-hidden py-24 px-[5%] bg-[#f6faf0]">
      <style>{`
        .fade-up { opacity:0; transform:translateY(28px); transition:opacity 0.65s ease,transform 0.65s ease; }
        .fade-up.animate-in { opacity:1; transform:translateY(0); }
        .slide-left { opacity:0; transform:translateX(-36px); transition:opacity 0.7s ease,transform 0.7s ease; }
        .slide-left.animate-in { opacity:1; transform:translateX(0); }
        .slide-right { opacity:0; transform:translateX(36px); transition:opacity 0.7s ease,transform 0.7s ease; }
        .slide-right.animate-in { opacity:1; transform:translateX(0); }
        .contact-anim { opacity:0; transform:translateX(-24px); transition:opacity 0.5s ease,transform 0.5s ease; }
        .contact-anim.animate-in { opacity:1; transform:translateX(0); }
      `}</style>

      <div className="absolute inset-0 opacity-[0.035] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=60')" }}
      />
      <div className="absolute inset-0" style={{
        backgroundImage: "repeating-linear-gradient(45deg,rgba(26,107,47,0.05) 0,rgba(26,107,47,0.05) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(-45deg,rgba(26,107,47,0.05) 0,rgba(26,107,47,0.05) 1px,transparent 1px,transparent 40px)",
      }}/>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

        {/* LEFT */}
        <div ref={leftRef} className="slide-left">
          <p className="font-inter text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#1a6b2f] mb-3">
            Get In Touch
          </p>
          <h2 ref={headingRef} className="fade-up font-bebas text-4xl lg:text-5xl text-[#0a0f06] leading-none mb-5">
            Book A Free <span className="text-[#1a6b2f]">Consultation</span>
          </h2>
          <p className="font-inter text-sm text-[#5a6b4a] leading-relaxed mb-8 max-w-md">
            Fill the form and we'll reach out on WhatsApp immediately. No stress, no long process.
          </p>

          <div className="flex flex-col gap-3">
            {contacts.map(({ icon, label, value }, i) => (
              <div
                key={label}
                ref={(el) => (contactRefs.current[i] = el)}
                className="contact-anim flex items-center gap-4 p-4 border border-[#1a6b2f]/10 bg-white hover:border-[#1a6b2f]/40 transition-colors"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-9 h-9 flex items-center justify-center bg-[#edf5e1] flex-shrink-0 text-base">
                  {icon}
                </div>
                <div>
                  <p className="font-inter text-[0.68rem] uppercase tracking-wider text-[#5a6b4a]">{label}</p>
                  <p className="font-inter text-sm font-bold text-[#0a0f06] mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div ref={formRef} className="slide-right bg-white border border-[#1a6b2f]/15 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-10">
          <h3 className="font-bebas text-2xl text-[#0a0f06] mb-1">Request A Consultation</h3>
          <p className="font-inter text-sm text-[#5a6b4a] mb-6">We'll reach out on WhatsApp within minutes.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-inter text-[0.68rem] font-bold uppercase tracking-wider text-[#5a6b4a] mb-1.5">Your Name</label>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Ade Bello"
                className="w-full bg-[#f6faf0] border border-[#1a6b2f]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#1a6b2f] focus:bg-white transition-colors"/>
            </div>
            <div>
              <label className="block font-inter text-[0.68rem] font-bold uppercase tracking-wider text-[#5a6b4a] mb-1.5">Phone Number</label>
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 08012345678"
                className="w-full bg-[#f6faf0] border border-[#1a6b2f]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#1a6b2f] focus:bg-white transition-colors"/>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-inter text-[0.68rem] font-bold uppercase tracking-wider text-[#5a6b4a] mb-1.5">Service Needed</label>
            <select name="service" value={formData.service} onChange={handleChange}
              className="w-full bg-[#f6faf0] border border-[#1a6b2f]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#1a6b2f] focus:bg-white transition-colors appearance-none">
              <option value="">Select a service...</option>
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-inter text-[0.68rem] font-bold uppercase tracking-wider text-[#5a6b4a] mb-1.5">Location</label>
            <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Osogbo, Osun State"
              className="w-full bg-[#f6faf0] border border-[#1a6b2f]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#1a6b2f] focus:bg-white transition-colors"/>
          </div>

          <div className="mb-2">
            <label className="block font-inter text-[0.68rem] font-bold uppercase tracking-wider text-[#5a6b4a] mb-1.5">Message (Optional)</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe what you need..." rows={3}
              className="w-full bg-[#f6faf0] border border-[#1a6b2f]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#1a6b2f] focus:bg-white transition-colors resize-none"/>
          </div>

          <button
            onClick={handleSubmit}
            disabled={cooldown > 0}
            className={`w-full mt-4 flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors ${
              cooldown > 0 ? "bg-[#25D366]/50 text-white cursor-not-allowed" : "bg-[#25D366] text-white hover:bg-[#20ba5a]"
            }`}
          >
            💬 {cooldown > 0 ? `Wait ${cooldown}s before sending again...` : "Send via WhatsApp"}
          </button>
        </div>

      </div>
    </section>
  );
}