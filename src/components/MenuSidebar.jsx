import { navLinks } from "../utils";

export default function MenuSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-[2.9rem] bg-white border-b-2 lemon-bord shadow-inner left-0 z-50 py-4 px-6 md:px-12 w-full lg:hidden  transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.slice(0, 4).map((l) => (
           <a href={l.to}
              key={l.to}
              onClick={onClose}
              className="font-grotesque font-semibold tracking-wider text-[0.9rem] hover:text-[#1a6b2f] text-gray-800 py-3 border-b border-gray-200"
            >
              {l.label}
            </a>
          ))}
          {navLinks.slice(4).map((l) => (
           <a href={l.to}
              key={l.to}
              onClick={onClose}
              className="font-grotesque font-semibold tracking-wider text-[0.9rem] text-[#1a6b2f] py-3 border-b border-gray-200"
            >
              → BOOK CONSULTATION
            </a>
          ))}
        </div>
      </div>
    </>
  );
}