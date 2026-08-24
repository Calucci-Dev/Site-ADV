import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onOpenConsultationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueio do scroll da página quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#0B132B] border-b border-[#20304C] py-3.5 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0B132B] via-[#0B132B]/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Marca */}
            <a
              href="#inicio"
              id="header-logo-link"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A880] rounded-sm transition-all"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
            >
              <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880] group-hover:shadow-[0_0_15px_rgba(197,168,128,0.3)] transition-all">
                <Scale className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#E7DAC2] transition-colors leading-tight">
                  {siteConfig.firmName}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] font-medium uppercase -mt-0.5">
                  {siteConfig.firmNameSuffix}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs tracking-wider uppercase text-slate-300 hover:text-[#C5A880] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Header Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de atendimento com a Almeida & Rocha Advocacia.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="header-phone-quick-link"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#C5A880] transition-colors"
                title="Conversar pelo WhatsApp"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="hidden xl:inline font-mono">{siteConfig.whatsappFormatted}</span>
              </a>

              <button
                type="button"
                id="header-cta-button"
                onClick={() => openWhatsApp('Olá! Gostaria de agendar uma consulta jurídica com o escritório Almeida & Rocha Advocacia.')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[#C5A880] text-xs font-semibold uppercase tracking-widest text-[#0B132B] bg-[#C5A880] hover:bg-[#B39265] hover:border-[#B39265] transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(197,168,128,0.25)] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-[#0B132B] cursor-pointer"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                id="mobile-menu-toggle-button"
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 rounded-sm border border-[#20304C] bg-[#152238] text-slate-200 hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] cursor-pointer active:scale-95"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A880]" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Separate fixed overlay) */}
      <div
        id="mobile-drawer-overlay"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-x-0 bottom-0 top-[64px] z-40 bg-[#0B132B] lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#20304C] transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        <div className="space-y-4 pt-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A880] mb-2">
            Navegação Principal
          </p>
          <div className="flex flex-col divide-y divide-[#20304C]/60">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="py-4 text-lg font-serif text-slate-100 hover:text-[#C5A880] active:text-[#C5A880] transition-colors flex items-center justify-between cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]/70" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#20304C] space-y-4 pb-10 mt-6">
          <div className="text-xs text-slate-400 space-y-1.5">
            <p className="font-semibold text-slate-200">{siteConfig.addressShort}</p>
            <p>{siteConfig.businessHours}</p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conversar com a Almeida & Rocha Advocacia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#C5A880] font-medium hover:underline inline-block"
            >
              {siteConfig.whatsappFormatted}
            </a>
          </div>

          <button
            type="button"
            id="mobile-menu-cta-button"
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp('Olá! Gostaria de falar com um advogado especialista da Almeida & Rocha Advocacia.');
            }}
            className="w-full py-4 px-4 rounded-sm bg-[#C5A880] text-[#0B132B] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#B39265] active:bg-[#B39265] transition-colors cursor-pointer shadow-lg shadow-[#C5A880]/15"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};


