import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonials.client1.quote'),
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote: t('testimonials.client2.quote'),
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote: t('testimonials.client3.quote'),
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
