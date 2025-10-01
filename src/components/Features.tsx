import React from 'react';
import { Zap, User, BarChart3, Puzzle, Palette, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('features.automation.title'),
      description: t('features.automation.desc'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: User,
      title: t('features.personalization.title'),
      description: t('features.personalization.desc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.desc'),
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Puzzle,
      title: t('features.integrations.title'),
      description: t('features.integrations.desc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: t('features.templates.title'),
      description: t('features.templates.desc'),
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Send,
      title: t('features.deliverability.title'),
      description: t('features.deliverability.desc'),
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
