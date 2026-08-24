import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FinalCTAProps {
  onOpenPrivacyModal?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPrivacyModal }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    assunto: 'Direito Empresarial & Societário',
    mensagem: '',
    aceitouTermos: false,
  });

  const [errors, setErrors] = useState<{
    nome?: string;
    telefone?: string;
    assunto?: string;
    mensagem?: string;
    aceitouTermos?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Formatação automática do telefone (BR: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, '($1');
    }

    setFormData((prev) => ({ ...prev, telefone: value }));
    if (errors.telefone) {
      setErrors((prev) => ({ ...prev, telefone: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      newErrors.nome = 'Por favor, informe seu nome completo (mínimo de 3 caracteres).';
    }

    const cleanPhone = formData.telefone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.telefone = 'Informe um número de telefone/WhatsApp válido com DDD.';
    }

    if (!formData.mensagem.trim() || formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Por favor, detalhe brevemente sua demanda (mínimo de 10 caracteres).';
    }

    if (!formData.aceitouTermos) {
      newErrors.aceitouTermos = 'É obrigatório concordar com o tratamento ético e confidencial dos dados.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Mensagem formatada e organizada para o WhatsApp da banca
    const message = `*SOLICITAÇÃO DE CONSULTA JURÍDICA*\n*Escritório Almeida & Rocha Advocacia*\n\n` +
      `*Nome:* ${formData.nome.trim()}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Assunto:* ${formData.assunto}\n` +
      `*Mensagem:* ${formData.mensagem.trim()}\n\n` +
      `_Enviado através do site institucional._`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    // Tentativa de redirecionamento imediato para o WhatsApp
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Caso popup seja bloqueado, o link estará disponível no estado visual
    }
  };

  const handleReset = () => {
    setFormData({
      nome: '',
      telefone: '',
      assunto: 'Direito Empresarial & Societário',
      mensagem: '',
      aceitouTermos: false,
    });
    setErrors({});
    setSubmitted(false);
    setGeneratedWhatsAppUrl('');
  };

  return (
    <section id="contato" className="py-24 bg-[#070D1E] text-white relative border-t border-[#20304C]">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#C5A880]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                  Atendimento Estratégico
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Inicie uma conversa <br />
                <span className="text-[#E7DAC2] font-normal italic">confidencial e segura</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Nossa banca está preparada para analisar a sua demanda com total rigor e discrição. Preencha o formulário para atendimento prioritário via WhatsApp.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">Telefone & WhatsApp</h4>
                  <p className="text-sm text-white font-mono mt-0.5">{siteConfig.whatsappFormatted}</p>
                  <p className="text-[11px] text-[#C5A880] mt-0.5">Atendimento rápido ao cliente</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">E-mail Institucional</h4>
                  <p className="text-sm text-white font-mono mt-0.5">{siteConfig.email}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Respostas em até 2 horas úteis</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">Endereço da Sede</h4>
                  <p className="text-xs text-white leading-relaxed mt-0.5">{siteConfig.address}</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#0B132B] border border-[#20304C] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">Horário de Funcionamento</h4>
                  <p className="text-xs text-white mt-0.5">{siteConfig.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Confidentiality seal */}
            <div className="flex items-center gap-3 p-4 rounded-sm bg-[#152238]/60 border border-[#C5A880]/30 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0" />
              <span>Garantia de sigilo profissional e proteção de dados conforme o Código de Ética da OAB e LGPD.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B132B] border border-[#20304C] rounded-sm p-7 sm:p-10 shadow-2xl relative">
              
              {/* Form Title */}
              <div className="border-b border-[#20304C] pb-6 mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Formulário de Contato Direto
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
                  Os dados preenchidos serão formatados e enviados diretamente ao plantão jurídico via WhatsApp.
                </p>
              </div>

              {submitted ? (
                /* Success Feedback State */
                <div className="space-y-6 py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center mx-auto text-[#C5A880]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="font-serif text-2xl font-bold text-white">
                      Mensagem Preparada com Sucesso!
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Abrimos o WhatsApp para você confirmar o envio. Caso a janela não tenha aberto automaticamente, clique no botão abaixo:
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#152238] border border-[#20304C] text-left text-xs font-mono text-slate-300 max-w-lg mx-auto space-y-1">
                    <p><strong className="text-[#C5A880]">Nome:</strong> {formData.nome}</p>
                    <p><strong className="text-[#C5A880]">Telefone:</strong> {formData.telefone}</p>
                    <p><strong className="text-[#C5A880]">Assunto:</strong> {formData.assunto}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#C5A880] text-[#0B132B] font-semibold text-xs uppercase tracking-widest hover:bg-[#B39265] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Abrir WhatsApp Agora</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-sm border border-[#3A4D6B] text-slate-300 text-xs font-semibold uppercase tracking-widest hover:bg-[#152238] hover:text-white transition-colors cursor-pointer"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="form-nome" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Nome Completo <span className="text-[#C5A880]">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-nome"
                      name="nome"
                      placeholder="Ex.: Dr. Roberto Silva ou Nome da Empresa"
                      value={formData.nome}
                      onChange={(e) => {
                        setFormData({ ...formData, nome: e.target.value });
                        if (errors.nome) setErrors({ ...errors, nome: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-sm bg-[#152238] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors ${
                        errors.nome ? 'border-red-500/80 bg-red-950/10' : 'border-[#20304C] focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.nome && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Phone & Subject Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="form-telefone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Telefone / WhatsApp <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-telefone"
                        name="telefone"
                        placeholder="(62) 99999-9999"
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        className={`w-full px-4 py-3 rounded-sm bg-[#152238] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors font-mono ${
                          errors.telefone ? 'border-red-500/80 bg-red-950/10' : 'border-[#20304C] focus:border-[#C5A880]'
                        }`}
                      />
                      {errors.telefone && (
                        <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.telefone}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="form-assunto" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Área ou Assunto <span className="text-[#C5A880]">*</span>
                      </label>
                      <select
                        id="form-assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-[#152238] border border-[#20304C] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors cursor-pointer"
                      >
                        {siteConfig.practiceAreas.map((pa) => (
                          <option key={pa.id} value={pa.title} className="bg-[#0B132B] text-white">
                            {pa.title}
                          </option>
                        ))}
                        <option value="Planejamento Tributário & Fiscal" className="bg-[#0B132B] text-white">
                          Planejamento Tributário & Fiscal
                        </option>
                        <option value="Outro Assunto / Consulta Geral" className="bg-[#0B132B] text-white">
                          Outro Assunto / Consulta Geral
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="form-mensagem" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Descrição Resumida da Necessidade <span className="text-[#C5A880]">*</span>
                    </label>
                    <textarea
                      id="form-mensagem"
                      name="mensagem"
                      rows={4}
                      placeholder="Descreva suscintamente o cenário ou o objetivo da consulta jurídica..."
                      value={formData.mensagem}
                      onChange={(e) => {
                        setFormData({ ...formData, mensagem: e.target.value });
                        if (errors.mensagem) setErrors({ ...errors, mensagem: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-sm bg-[#152238] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors resize-none ${
                        errors.mensagem ? 'border-red-500/80 bg-red-950/10' : 'border-[#20304C] focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.mensagem && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.mensagem}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        id="form-aceitou-termos"
                        name="aceitouTermos"
                        checked={formData.aceitouTermos}
                        onChange={(e) => {
                          setFormData({ ...formData, aceitouTermos: e.target.checked });
                          if (errors.aceitouTermos) setErrors({ ...errors, aceitouTermos: undefined });
                        }}
                        className="mt-1 w-4 h-4 rounded-xs text-[#C5A880] bg-[#152238] border-[#20304C] focus:ring-[#C5A880] cursor-pointer"
                      />
                      <span className="text-xs text-slate-300 font-light leading-relaxed">
                        Concordo com os termos de{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onOpenPrivacyModal) onOpenPrivacyModal();
                          }}
                          className="text-[#C5A880] underline hover:text-[#E7DAC2] transition-colors"
                        >
                          política de privacidade e confidencialidade
                        </button>{' '}
                        para o tratamento dos dados com fins exclusivos de contato profissional.
                      </span>
                    </label>
                    {errors.aceitouTermos && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.aceitouTermos}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="form-submit-button"
                    className="w-full py-4 px-6 rounded-sm bg-[#C5A880] text-[#0B132B] font-semibold text-xs uppercase tracking-widest hover:bg-[#B39265] transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-[#C5A880]/15 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-[#0B132B]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem via WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Ao enviar, você será direcionado para o canal oficial de atendimento ({siteConfig.whatsappFormatted}).
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
