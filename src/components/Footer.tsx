import React from 'react';
import { Mail, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t('footer.features'), href: '#features' },
      { label: t('footer.pricing'), href: '#pricing' },
      { label: t('footer.integrations'), href: '#integrations' },
      { label: t('footer.api'), href: '#' },
    ],
    company: [
      { label: t('footer.about'), href: '#' },
      { label: t('footer.careers'), href: '#' },
      { label: t('footer.blog'), href: '#' },
      { label: t('footer.press'), href: '#' },
    ],
    support: [
      { label: t('footer.helpCenter'), href: '#' },
      { label: t('footer.community'), href: '#' },
      { label: t('footer.status'), href: '#' },
      { label: t('footer.contact'), href: '#contact' },
    ],
    legal: [
      { label: t('footer.privacy'), href: '#' },
      { label: t('footer.terms'), href: '#' },
      { label: t('footer.security'), href: '#' },
      { label: t('footer.gdpr'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                EmailMassivo
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The most powerful email marketing platform for modern businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.product')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
