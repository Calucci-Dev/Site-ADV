import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/site';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Olá! Acessei o site da Almeida & Rocha Advocacia e gostaria de solicitar uma consulta com a equipe jurídica.';
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet tooltip banner */}
      {showTooltip && (
        <div
          id="whatsapp-tooltip"
          className="hidden sm:flex items-center gap-2 bg-[#0B132B]/95 backdrop-blur-md border border-[#C5A880]/50 text-white px-3.5 py-2 rounded-sm shadow-xl text-xs transition-all animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-slate-200">Plantão Jurídico Online</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1 transition-colors cursor-pointer"
            title="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco pelo WhatsApp"
        className="w-13 h-13 rounded-full bg-[#0B132B] border-2 border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#0B132B] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] group focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-[#0B132B]"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
