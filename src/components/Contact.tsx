import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12 scroll-mt-24">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <i className="fas fa-envelope text-white text-xl"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Me</h2>
      </div>
      <div className="glass-card p-6 md:p-8 text-center hover-grow">
        <p className="mb-6 text-gray-300">
          For business inquiries, collaborations, or just to say hello!
        </p>
        <a
          href="mailto:gangjiaakash@gmail.com"
          className="contact-btn inline-block px-8 py-3 rounded-full text-white font-medium"
        >
          <i className="fas fa-paper-plane mr-2"></i> Email Me
        </a>
      </div>
    </section>
  );
};
