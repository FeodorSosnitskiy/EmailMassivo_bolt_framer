import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Integrations: React.FC = () => {
  const { t } = useLanguage();

  const integrations = [
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Shopify', logo: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'WordPress', logo: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'HubSpot', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Stripe', logo: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Slack', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Google Analytics', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Zapier', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  return (
    <section id="integrations" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white text-center">
                {integration.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
