import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowUp, Shield } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnchor = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#070D1E] text-slate-400 border-t border-[#20304C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#20304C]/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#152238] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block leading-none">
                  {siteConfig.firmName}
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C5A880] font-semibold uppercase">
                  {siteConfig.firmNameSuffix}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Assessoria jurídica de excelência em causas corporativas, societárias e patrimoniais de alta complexidade.
            </p>

            <div className="text-[11px] font-mono text-[#C5A880] pt-1">
              {siteConfig.oabRegistration}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Almeida & Rocha"
                className="w-8 h-8 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-center justify-center text-slate-300 hover:text-[#C5A880] hover:border-[#C5A880]/60 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Almeida & Rocha"
                className="w-8 h-8 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-center justify-center text-slate-300 hover:text-[#C5A880] hover:border-[#C5A880]/60 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Almeida & Rocha"
                className="w-8 h-8 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-center justify-center text-slate-300 hover:text-[#C5A880] hover:border-[#C5A880]/60 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToAnchor(link.href);
                    }}
                    className="hover:text-[#C5A880] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Principais Práticas
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.practiceAreas.slice(0, 5).map((pa) => (
                <li key={pa.id}>
                  <a
                    href="#areas-atuacao"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToAnchor('#areas-atuacao');
                    }}
                    className="hover:text-[#C5A880] transition-colors py-0.5 inline-block"
                  >
                    {pa.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sede & Contato (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Sede e Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="font-mono text-slate-300">{siteConfig.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="font-mono text-slate-300">{siteConfig.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.firmName} {siteConfig.firmNameSuffix}. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="hover:text-[#C5A880] transition-colors underline cursor-pointer"
              >
                Política de Privacidade & LGPD
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="hover:text-[#C5A880] transition-colors underline cursor-pointer"
              >
                Termos de Uso
              </button>
            </div>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#C5A880] transition-colors p-2 cursor-pointer focus:outline-none"
            title="Voltar ao início da página"
          >
            <span className="text-[10px] uppercase font-semibold tracking-wider">Início</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
