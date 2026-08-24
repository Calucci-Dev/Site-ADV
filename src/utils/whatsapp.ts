import { siteConfig } from '../config/site';

export function openWhatsApp(customMessage?: string) {
  const message = customMessage || `Olá! Acessei o site da ${siteConfig.firmName} ${siteConfig.firmNameSuffix} e gostaria de solicitar uma consulta jurídica.`;
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    window.location.href = url;
  }
}
