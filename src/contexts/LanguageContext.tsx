import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.integrations': 'Integrations',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.headline': 'Email Marketing That Drives Results',
    'hero.subheadline': 'Create powerful email campaigns with intelligent automation, deep personalization, and analytics that matter. Trusted by thousands of businesses worldwide.',
    'hero.cta': 'Start Free Trial',
    'hero.secondaryCta': 'Watch Demo',

    // Features
    'features.title': 'Everything You Need to Succeed',
    'features.subtitle': 'Powerful tools designed to help you create, send, and optimize email campaigns that convert.',
    'features.automation.title': 'Smart Automation',
    'features.automation.desc': 'Set up sophisticated workflows that engage customers at the perfect moment. Trigger emails based on behavior, preferences, and lifecycle stages.',
    'features.personalization.title': 'Deep Personalization',
    'features.personalization.desc': 'Go beyond first names. Deliver hyper-relevant content using dynamic fields, segmentation, and AI-powered recommendations.',
    'features.analytics.title': 'Actionable Analytics',
    'features.analytics.desc': 'Track opens, clicks, conversions, and revenue. Make data-driven decisions with real-time dashboards and custom reports.',
    'features.integrations.title': 'Seamless Integrations',
    'features.integrations.desc': 'Connect with your favorite tools in minutes. Native integrations with CRMs, e-commerce platforms, and business apps.',
    'features.templates.title': 'Beautiful Templates',
    'features.templates.desc': 'Choose from hundreds of professionally designed templates or create your own with our intuitive drag-and-drop builder.',
    'features.deliverability.title': 'Premium Deliverability',
    'features.deliverability.desc': 'Maximize inbox placement with advanced sending infrastructure, dedicated IPs, and deliverability monitoring.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Start free and scale as you grow. No hidden fees, no surprises.',
    'pricing.free.name': 'Starter',
    'pricing.free.price': 'Free',
    'pricing.free.desc': 'Perfect for getting started',
    'pricing.free.feature1': 'Up to 500 contacts',
    'pricing.free.feature2': '2,000 emails per month',
    'pricing.free.feature3': 'Basic templates',
    'pricing.free.feature4': 'Email support',
    'pricing.free.feature5': 'EmailMassivo branding',
    'pricing.premium.name': 'Professional',
    'pricing.premium.price': '$49',
    'pricing.premium.priceUnit': '/month',
    'pricing.premium.desc': 'For growing businesses',
    'pricing.premium.feature1': 'Up to 10,000 contacts',
    'pricing.premium.feature2': 'Unlimited emails',
    'pricing.premium.feature3': 'All templates',
    'pricing.premium.feature4': 'Priority support',
    'pricing.premium.feature5': 'Remove branding',
    'pricing.premium.feature6': 'Advanced automation',
    'pricing.premium.feature7': 'A/B testing',
    'pricing.premium.feature8': 'Custom domains',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.desc': 'For large organizations',
    'pricing.enterprise.feature1': 'Unlimited contacts',
    'pricing.enterprise.feature2': 'Unlimited emails',
    'pricing.enterprise.feature3': 'Dedicated IP addresses',
    'pricing.enterprise.feature4': '24/7 phone support',
    'pricing.enterprise.feature5': 'Custom integrations',
    'pricing.enterprise.feature6': 'Advanced security',
    'pricing.enterprise.feature7': 'SLA guarantee',
    'pricing.enterprise.feature8': 'Dedicated account manager',
    'pricing.cta': 'Get Started',
    'pricing.contactSales': 'Contact Sales',

    // Testimonials
    'testimonials.title': 'Trusted by Industry Leaders',
    'testimonials.subtitle': 'Join thousands of businesses that have transformed their email marketing with EmailMassivo.',
    'testimonials.client1.quote': 'EmailMassivo increased our email ROI by 300% in just three months. The automation features are game-changing.',
    'testimonials.client1.name': 'Sarah Chen',
    'testimonials.client1.role': 'Marketing Director, TechFlow',
    'testimonials.client2.quote': 'The best email platform we\'ve used. Intuitive, powerful, and their support team is always there when we need them.',
    'testimonials.client2.name': 'Marcus Silva',
    'testimonials.client2.role': 'CEO, GrowthHub',
    'testimonials.client3.quote': 'We switched from a major competitor and never looked back. EmailMassivo offers better features at half the price.',
    'testimonials.client3.name': 'Emma Thompson',
    'testimonials.client3.role': 'Head of Marketing, Velocity',

    // Integrations
    'integrations.title': 'Connects With Your Favorite Tools',
    'integrations.subtitle': 'Seamlessly integrate EmailMassivo with the platforms you already use.',

    // Contact
    'contact.title': 'Ready to Transform Your Email Marketing?',
    'contact.subtitle': 'Start your free trial today. No credit card required.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.message': 'Tell us about your needs',
    'contact.submit': 'Start Free Trial',
    'contact.privacy': 'By submitting, you agree to our Privacy Policy and Terms of Service.',

    // Footer
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.integrations': 'Integrations',
    'footer.api': 'API Documentation',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.press': 'Press Kit',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.community': 'Community',
    'footer.status': 'System Status',
    'footer.contact': 'Contact Us',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.security': 'Security',
    'footer.gdpr': 'GDPR Compliance',
    'footer.rights': '© 2025 EmailMassivo. All rights reserved.',
  },
  es: {
    // Header
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.integrations': 'Integraciones',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',

    // Hero
    'hero.headline': 'Email Marketing Que Genera Resultados',
    'hero.subheadline': 'Crea campañas de email potentes con automatización inteligente, personalización profunda y análisis que importan. Confiado por miles de empresas en todo el mundo.',
    'hero.cta': 'Prueba Gratuita',
    'hero.secondaryCta': 'Ver Demo',

    // Features
    'features.title': 'Todo Lo Que Necesitas Para Tener Éxito',
    'features.subtitle': 'Herramientas potentes diseñadas para ayudarte a crear, enviar y optimizar campañas de email que convierten.',
    'features.automation.title': 'Automatización Inteligente',
    'features.automation.desc': 'Configura flujos de trabajo sofisticados que involucran a los clientes en el momento perfecto. Activa emails según comportamiento, preferencias y etapas del ciclo de vida.',
    'features.personalization.title': 'Personalización Profunda',
    'features.personalization.desc': 'Ve más allá de los nombres. Entrega contenido hiper-relevante usando campos dinámicos, segmentación y recomendaciones impulsadas por IA.',
    'features.analytics.title': 'Análisis Accionables',
    'features.analytics.desc': 'Rastrea aperturas, clics, conversiones e ingresos. Toma decisiones basadas en datos con paneles en tiempo real e informes personalizados.',
    'features.integrations.title': 'Integraciones Perfectas',
    'features.integrations.desc': 'Conecta con tus herramientas favoritas en minutos. Integraciones nativas con CRMs, plataformas de e-commerce y aplicaciones empresariales.',
    'features.templates.title': 'Plantillas Hermosas',
    'features.templates.desc': 'Elige entre cientos de plantillas diseñadas profesionalmente o crea la tuya con nuestro constructor intuitivo de arrastrar y soltar.',
    'features.deliverability.title': 'Entregabilidad Premium',
    'features.deliverability.desc': 'Maximiza la ubicación en bandeja de entrada con infraestructura avanzada de envío, IPs dedicadas y monitoreo de entregabilidad.',

    // Pricing
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Comienza gratis y escala a medida que creces. Sin tarifas ocultas, sin sorpresas.',
    'pricing.free.name': 'Inicial',
    'pricing.free.price': 'Gratis',
    'pricing.free.desc': 'Perfecto para comenzar',
    'pricing.free.feature1': 'Hasta 500 contactos',
    'pricing.free.feature2': '2,000 emails por mes',
    'pricing.free.feature3': 'Plantillas básicas',
    'pricing.free.feature4': 'Soporte por email',
    'pricing.free.feature5': 'Marca EmailMassivo',
    'pricing.premium.name': 'Profesional',
    'pricing.premium.price': '$49',
    'pricing.premium.priceUnit': '/mes',
    'pricing.premium.desc': 'Para empresas en crecimiento',
    'pricing.premium.feature1': 'Hasta 10,000 contactos',
    'pricing.premium.feature2': 'Emails ilimitados',
    'pricing.premium.feature3': 'Todas las plantillas',
    'pricing.premium.feature4': 'Soporte prioritario',
    'pricing.premium.feature5': 'Eliminar marca',
    'pricing.premium.feature6': 'Automatización avanzada',
    'pricing.premium.feature7': 'Pruebas A/B',
    'pricing.premium.feature8': 'Dominios personalizados',
    'pricing.enterprise.name': 'Empresa',
    'pricing.enterprise.price': 'Personalizado',
    'pricing.enterprise.desc': 'Para grandes organizaciones',
    'pricing.enterprise.feature1': 'Contactos ilimitados',
    'pricing.enterprise.feature2': 'Emails ilimitados',
    'pricing.enterprise.feature3': 'Direcciones IP dedicadas',
    'pricing.enterprise.feature4': 'Soporte 24/7 por teléfono',
    'pricing.enterprise.feature5': 'Integraciones personalizadas',
    'pricing.enterprise.feature6': 'Seguridad avanzada',
    'pricing.enterprise.feature7': 'Garantía SLA',
    'pricing.enterprise.feature8': 'Gerente de cuenta dedicado',
    'pricing.cta': 'Comenzar',
    'pricing.contactSales': 'Contactar Ventas',

    // Testimonials
    'testimonials.title': 'Confiado Por Líderes de la Industria',
    'testimonials.subtitle': 'Únete a miles de empresas que han transformado su marketing por email con EmailMassivo.',
    'testimonials.client1.quote': 'EmailMassivo aumentó nuestro ROI de email en un 300% en solo tres meses. Las funciones de automatización son revolucionarias.',
    'testimonials.client1.name': 'Sarah Chen',
    'testimonials.client1.role': 'Directora de Marketing, TechFlow',
    'testimonials.client2.quote': 'La mejor plataforma de email que hemos usado. Intuitiva, potente, y su equipo de soporte siempre está ahí cuando los necesitamos.',
    'testimonials.client2.name': 'Marcus Silva',
    'testimonials.client2.role': 'CEO, GrowthHub',
    'testimonials.client3.quote': 'Cambiamos desde un competidor importante y nunca miramos atrás. EmailMassivo ofrece mejores características a la mitad del precio.',
    'testimonials.client3.name': 'Emma Thompson',
    'testimonials.client3.role': 'Directora de Marketing, Velocity',

    // Integrations
    'integrations.title': 'Se Conecta Con Tus Herramientas Favoritas',
    'integrations.subtitle': 'Integra EmailMassivo sin problemas con las plataformas que ya usas.',

    // Contact
    'contact.title': '¿Listo Para Transformar Tu Email Marketing?',
    'contact.subtitle': 'Comienza tu prueba gratuita hoy. No se requiere tarjeta de crédito.',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Nombre de Empresa',
    'contact.message': 'Cuéntanos sobre tus necesidades',
    'contact.submit': 'Comenzar Prueba Gratuita',
    'contact.privacy': 'Al enviar, aceptas nuestra Política de Privacidad y Términos de Servicio.',

    // Footer
    'footer.product': 'Producto',
    'footer.features': 'Características',
    'footer.pricing': 'Precios',
    'footer.integrations': 'Integraciones',
    'footer.api': 'Documentación API',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.press': 'Kit de Prensa',
    'footer.support': 'Soporte',
    'footer.helpCenter': 'Centro de Ayuda',
    'footer.community': 'Comunidad',
    'footer.status': 'Estado del Sistema',
    'footer.contact': 'Contacto',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.security': 'Seguridad',
    'footer.gdpr': 'Cumplimiento GDPR',
    'footer.rights': '© 2025 EmailMassivo. Todos los derechos reservados.',
  },
  pt: {
    // Header
    'nav.features': 'Recursos',
    'nav.pricing': 'Preços',
    'nav.testimonials': 'Depoimentos',
    'nav.integrations': 'Integrações',
    'nav.contact': 'Contato',
    'nav.getStarted': 'Começar',

    // Hero
    'hero.headline': 'Email Marketing Que Gera Resultados',
    'hero.subheadline': 'Crie campanhas de email poderosas com automação inteligente, personalização profunda e análises que importam. Confiado por milhares de empresas em todo o mundo.',
    'hero.cta': 'Teste Grátis',
    'hero.secondaryCta': 'Ver Demo',

    // Features
    'features.title': 'Tudo O Que Você Precisa Para Ter Sucesso',
    'features.subtitle': 'Ferramentas poderosas projetadas para ajudá-lo a criar, enviar e otimizar campanhas de email que convertem.',
    'features.automation.title': 'Automação Inteligente',
    'features.automation.desc': 'Configure fluxos de trabalho sofisticados que envolvem clientes no momento perfeito. Dispare emails com base em comportamento, preferências e estágios do ciclo de vida.',
    'features.personalization.title': 'Personalização Profunda',
    'features.personalization.desc': 'Vá além dos primeiros nomes. Entregue conteúdo hiper-relevante usando campos dinâmicos, segmentação e recomendações impulsionadas por IA.',
    'features.analytics.title': 'Análises Acionáveis',
    'features.analytics.desc': 'Rastreie aberturas, cliques, conversões e receita. Tome decisões baseadas em dados com painéis em tempo real e relatórios personalizados.',
    'features.integrations.title': 'Integrações Perfeitas',
    'features.integrations.desc': 'Conecte-se com suas ferramentas favoritas em minutos. Integrações nativas com CRMs, plataformas de e-commerce e aplicativos empresariais.',
    'features.templates.title': 'Modelos Lindos',
    'features.templates.desc': 'Escolha entre centenas de modelos projetados profissionalmente ou crie o seu próprio com nosso construtor intuitivo de arrastar e soltar.',
    'features.deliverability.title': 'Entregabilidade Premium',
    'features.deliverability.desc': 'Maximize a colocação na caixa de entrada com infraestrutura avançada de envio, IPs dedicados e monitoramento de entregabilidade.',

    // Pricing
    'pricing.title': 'Preços Simples e Transparentes',
    'pricing.subtitle': 'Comece grátis e escale conforme você cresce. Sem taxas ocultas, sem surpresas.',
    'pricing.free.name': 'Inicial',
    'pricing.free.price': 'Grátis',
    'pricing.free.desc': 'Perfeito para começar',
    'pricing.free.feature1': 'Até 500 contatos',
    'pricing.free.feature2': '2.000 emails por mês',
    'pricing.free.feature3': 'Modelos básicos',
    'pricing.free.feature4': 'Suporte por email',
    'pricing.free.feature5': 'Marca EmailMassivo',
    'pricing.premium.name': 'Profissional',
    'pricing.premium.price': '$49',
    'pricing.premium.priceUnit': '/mês',
    'pricing.premium.desc': 'Para empresas em crescimento',
    'pricing.premium.feature1': 'Até 10.000 contatos',
    'pricing.premium.feature2': 'Emails ilimitados',
    'pricing.premium.feature3': 'Todos os modelos',
    'pricing.premium.feature4': 'Suporte prioritário',
    'pricing.premium.feature5': 'Remover marca',
    'pricing.premium.feature6': 'Automação avançada',
    'pricing.premium.feature7': 'Testes A/B',
    'pricing.premium.feature8': 'Domínios personalizados',
    'pricing.enterprise.name': 'Empresarial',
    'pricing.enterprise.price': 'Personalizado',
    'pricing.enterprise.desc': 'Para grandes organizações',
    'pricing.enterprise.feature1': 'Contatos ilimitados',
    'pricing.enterprise.feature2': 'Emails ilimitados',
    'pricing.enterprise.feature3': 'Endereços IP dedicados',
    'pricing.enterprise.feature4': 'Suporte 24/7 por telefone',
    'pricing.enterprise.feature5': 'Integrações personalizadas',
    'pricing.enterprise.feature6': 'Segurança avançada',
    'pricing.enterprise.feature7': 'Garantia SLA',
    'pricing.enterprise.feature8': 'Gerente de conta dedicado',
    'pricing.cta': 'Começar',
    'pricing.contactSales': 'Contatar Vendas',

    // Testimonials
    'testimonials.title': 'Confiado Por Líderes do Setor',
    'testimonials.subtitle': 'Junte-se a milhares de empresas que transformaram seu email marketing com EmailMassivo.',
    'testimonials.client1.quote': 'EmailMassivo aumentou nosso ROI de email em 300% em apenas três meses. Os recursos de automação são revolucionários.',
    'testimonials.client1.name': 'Sarah Chen',
    'testimonials.client1.role': 'Diretora de Marketing, TechFlow',
    'testimonials.client2.quote': 'A melhor plataforma de email que usamos. Intuitiva, poderosa, e sua equipe de suporte está sempre lá quando precisamos.',
    'testimonials.client2.name': 'Marcus Silva',
    'testimonials.client2.role': 'CEO, GrowthHub',
    'testimonials.client3.quote': 'Mudamos de um grande concorrente e nunca olhamos para trás. EmailMassivo oferece melhores recursos pela metade do preço.',
    'testimonials.client3.name': 'Emma Thompson',
    'testimonials.client3.role': 'Chefe de Marketing, Velocity',

    // Integrations
    'integrations.title': 'Conecta Com Suas Ferramentas Favoritas',
    'integrations.subtitle': 'Integre o EmailMassivo perfeitamente com as plataformas que você já usa.',

    // Contact
    'contact.title': 'Pronto Para Transformar Seu Email Marketing?',
    'contact.subtitle': 'Comece seu teste grátis hoje. Não é necessário cartão de crédito.',
    'contact.name': 'Nome Completo',
    'contact.email': 'Endereço de Email',
    'contact.company': 'Nome da Empresa',
    'contact.message': 'Conte-nos sobre suas necessidades',
    'contact.submit': 'Começar Teste Grátis',
    'contact.privacy': 'Ao enviar, você concorda com nossa Política de Privacidade e Termos de Serviço.',

    // Footer
    'footer.product': 'Produto',
    'footer.features': 'Recursos',
    'footer.pricing': 'Preços',
    'footer.integrations': 'Integrações',
    'footer.api': 'Documentação API',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre Nós',
    'footer.careers': 'Carreiras',
    'footer.blog': 'Blog',
    'footer.press': 'Kit de Imprensa',
    'footer.support': 'Suporte',
    'footer.helpCenter': 'Central de Ajuda',
    'footer.community': 'Comunidade',
    'footer.status': 'Status do Sistema',
    'footer.contact': 'Contato',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.security': 'Segurança',
    'footer.gdpr': 'Conformidade GDPR',
    'footer.rights': '© 2025 EmailMassivo. Todos os direitos reservados.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
