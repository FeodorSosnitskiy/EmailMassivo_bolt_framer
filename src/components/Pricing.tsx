import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      priceUnit: '',
      description: t('pricing.free.desc'),
      features: [
        t('pricing.free.feature1'),
        t('pricing.free.feature2'),
        t('pricing.free.feature3'),
        t('pricing.free.feature4'),
        t('pricing.free.feature5'),
      ],
      cta: t('pricing.cta'),
      highlighted: false,
    },
    {
      name: t('pricing.premium.name'),
      price: t('pricing.premium.price'),
      priceUnit: t('pricing.premium.priceUnit'),
      description: t('pricing.premium.desc'),
      features: [
        t('pricing.premium.feature1'),
        t('pricing.premium.feature2'),
        t('pricing.premium.feature3'),
        t('pricing.premium.feature4'),
        t('pricing.premium.feature5'),
        t('pricing.premium.feature6'),
        t('pricing.premium.feature7'),
        t('pricing.premium.feature8'),
      ],
      cta: t('pricing.cta'),
      highlighted: true,
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      priceUnit: '',
      description: t('pricing.enterprise.desc'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
        t('pricing.enterprise.feature6'),
        t('pricing.enterprise.feature7'),
        t('pricing.enterprise.feature8'),
      ],
      cta: t('pricing.contactSales'),
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceUnit && (
                    <span
                      className={`text-lg ${
                        plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {plan.priceUnit}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-100' : 'text-green-500'
                      }`}
                    />
                    <span
                      className={`${
                        plan.highlighted ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-medium transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
