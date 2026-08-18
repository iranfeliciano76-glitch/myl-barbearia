"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/data"

const NAV_LINKS = [
  { href: "#inicio", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#localizacao", label: "Localização" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1c1208] border-b border-[#f2f1f0]/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 gap-4 lg:gap-8">

        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="MYL"
              className="object-contain h-8 lg:h-12 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-[#f2f1f0] font-black text-2xl tracking-[0.12em] uppercase">MYL</span>
          )}
          <span className="text-[#827c78] text-[0.5rem] tracking-[0.28em] font-medium uppercase">
            BARBER | CLINIC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#827c78] hover:text-[#f2f1f0] text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-[#f2f1f0] text-[#1c1208] text-sm font-bold px-7 py-3 rounded-full hover:bg-[#827c78] hover:text-[#f2f1f0] transition-colors duration-300 flex-shrink-0"
        >
          Agendar
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#f2f1f0] p-2 flex-shrink-0"
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1c1208] border-t border-[#f2f1f0]/[0.06] px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#827c78] hover:text-[#f2f1f0] text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-[#f2f1f0] text-[#1c1208] text-sm font-bold px-7 py-3 rounded-full hover:bg-[#827c78] hover:text-[#f2f1f0] transition-colors mt-2"
          >
            Agendar via WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
