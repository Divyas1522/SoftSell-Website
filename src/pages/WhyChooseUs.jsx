import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, BriefcaseIcon, GlobeIcon, DollarSignIcon } from 'lucide-react';

const features = [
  {
    icon: <UsersIcon className="w-10 h-10 text-pink-600" />,
    title: 'Trusted Network',
    description: 'Join a growing network of trusted sellers and buyers globally.'
  },
  {
    icon: <DollarSignIcon className="w-10 h-10 text-pink-600" />,
    title: 'High Returns',
    description: 'Get the best possible value for your unused licenses.'
  },
  {
    icon: <BriefcaseIcon className="w-10 h-10 text-pink-600" />,
    title: 'Professional Platform',
    description: 'We provide a professional platform for secure and seamless reselling.'
  },
  {
    icon: <GlobeIcon className="w-10 h-10 text-pink-600" />,
    title: 'Global Reach',
    description: 'Connect with clients and companies from all over the world.'
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const WorkWithUs = () => {
  return (
    <section id="whychooseus" className="bg-pink-50 dark:bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
              variants={item}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-pink-700 dark:text-pink-400 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithUs;
