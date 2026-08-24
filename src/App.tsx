/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { Attorneys } from './components/Attorneys';
import { Statistics } from './components/Statistics';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { LegalContent } from './components/LegalContent';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import {
  PracticeAreaModal,
  AttorneyModal,
  ArticleModal,
  PrivacyModal,
} from './components/Modals';
import { PracticeArea, Attorney, LegalArticle } from './config/site';

export default function App() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAreaForConsultation = (areaName: string) => {
    scrollToContact();
    const select = document.querySelector('#form-assunto') as HTMLSelectElement | null;
    if (select) {
      // Tenta selecionar ou focar
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(areaName) || select.options[i].value.includes(areaName)) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  };

  const handleDirectContactAttorney = (attorneyName: string) => {
    scrollToContact();
    const textarea = document.querySelector('#form-mensagem') as HTMLTextAreaElement | null;
    if (textarea && !textarea.value) {
      textarea.value = `Gostaria de agendar uma consulta com foco na atuação de ${attorneyName}.`;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-[#C5A880] selection:text-[#0B132B]">
      
      {/* 1. Header Fixo & Responsivo */}
      <Header onOpenConsultationModal={scrollToContact} />

      <main>
        {/* 2. Hero Section de Alto Luxo com Visual Inspirado na Imagem */}
        <Hero onOpenConsultationModal={scrollToContact} />

        {/* 3. Áreas de Atuação */}
        <PracticeAreas onSelectArea={(area) => setSelectedArea(area)} />

        {/* 4. Corpo Jurídico / Advogados */}
        <Attorneys
          onSelectAttorney={(attorney) => setSelectedAttorney(attorney)}
          onOpenConsultationModal={scrollToContact}
        />

        {/* 5. Estatísticas & Resultados Comprovados */}
        <Statistics />

        {/* 6. Sobre Nós / Tradição & Valores */}
        <About onOpenConsultationModal={scrollToContact} />

        {/* 7. Diferenciais Competitivos */}
        <Differentials />

        {/* 8. Artigos & Insights Jurídicos */}
        <LegalContent onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 9. Formulário de Contato & Redirecionamento WhatsApp */}
        <FinalCTA onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
      </main>

      {/* 10. Rodapé Completo com OAB e Links */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* 11. Botão Flutuante Discreto do WhatsApp */}
      <WhatsAppButton />

      {/* Modais Interativos */}
      <PracticeAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onSelectForConsultation={handleSelectAreaForConsultation}
      />

      <AttorneyModal
        attorney={selectedAttorney}
        onClose={() => setSelectedAttorney(null)}
        onDirectContact={handleDirectContactAttorney}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

    </div>
  );
}
