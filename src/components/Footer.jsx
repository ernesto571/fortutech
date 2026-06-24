const services = [
    { label:"Solar Installations", to:"#services" },
    { label:"Inverters & Batteries", to:"#services" },
    { label:"Solar Pumping Machines", to:"#services" },
    { label:"Installation & Maintenance", to:"#services" },
    { label:"View Pricing", to:"#pricing" }
]

const contact = [
    { label:"WhatsApp: 08133100045", to:"https://wa.me/2348133100045" },
    { label:"09023744204", to:"tel:+2349023744204" },
    { label:"08136901264", to:"tel:+2348136901264" },
    { label:"Ero Arike Complex, Osogbo", to:"#consult" },
    { label:"Mon–Sat · 8:00–18:00", to:"#consult" }
]

const socials = [
    { label:"IG", to:"https://instagram.com/dadotech_consultant" },
    { label:"TK", to:"https://tiktok.com/@dadoraus" },
    { label:"FB", to:"https://facebook.com/share/18nQ5hncVc/" },
    { label:"WA", to:"https://wa.me/234813310004" }
]

export default function Footer () {

    return (
        <footer className="bg-[#0a1230] w-full py-12 px-5 md:px-8 lg:px-14 border-t-4 amber-bord">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                <section>
                    <div className="flex amber font-bebas text-[1.8rem] font-semibold tracking-wide">
                        FORTU
                        <h1 className="text-white ">TECH SOLAR ENERGY</h1>
                    </div>
                    <p className="text-[rgba(255,255,255,0.45)] text-[0.78rem] leading-5 font-inter font-medium mt-1 w-[70%] ">Official distributor of Chinese & Indian solar products, in collaboration with Dadotech Consultant Solar-HVAC Company.</p>
                    <p className="amber text-[0.74rem] font-inter tracking-wider py-0.5 px-2 w-fit mt-3 bg-[rgba(245,166,35,0.14)] border border-[rgba(245,166,35,0.4)] ">RN: 9200781</p>
                </section>

                <section className="grid lg:justify-center  ">
                    <strong className="amber text-sm tracking-widest ">SERVICES</strong>
                    <div className="flex flex-col gap-2 mt-3">
                        { services.map((s) => (
                            <a  key={s.label} className="text-[rgba(255,255,255,0.45)] hover:text-white text-[0.8rem] font-inter font-medium" href={s.to}>{s.label} </a>
                        )) }
                    </div>
                </section>

                <section className="grid lg:justify-center  ">
                    <strong className="amber text-sm tracking-widest ">CONTACT</strong>
                    <div className="flex flex-col gap-2 mt-3">
                        { contact.map((c) => (
                            <a  key={c.label} className="text-[rgba(255,255,255,0.45)] hover:text-white text-[0.8rem] font-inter font-medium" href={c.to}>{c.label} </a>
                        )) }
                    </div>
                </section>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.08)] mt-7 pt-7 w-full grid gap-3 md:flex items-center justify-between ">
                <p className="gray-2 text-xs font-inter font-medium">© 2026 Fortutech Solar Energy. All rights reserved.</p>
                <span className="flex gap-3">
                    { socials.map((s) => (
                        <a href={s.to}  target="_blank" key={s.label} className="text-[rgba(255,255,255,0.45)] hover:text-[#f5a623] border border-[rgba(255,255,255,0.08)] hover:border-[#f5a623] py-1 px-2  text-[0.8rem] font-inter font-medium ">{s.label} </a>
                    )) }
                </span>
            </div>

        </footer>
    )
}